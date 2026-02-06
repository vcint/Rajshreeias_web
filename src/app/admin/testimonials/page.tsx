'use client';

import { useState, useEffect } from 'react';

interface StudentReview {
  id: number;
  studentName: string;
  course: string;
  platform: string;
  imageUrl: string;
  rating: number;
  preview: string;
  isVideo: boolean;
}

interface StudentReviewData {
  studentReviews: StudentReview[];
}

export default function TestimonialEditor() {
  const [reviewData, setReviewData] = useState<StudentReviewData>({ studentReviews: [] });
  const [selectedReview, setSelectedReview] = useState<StudentReview | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Omit<StudentReview, 'id'>>({
    studentName: '',
    course: '',
    platform: 'WhatsApp',
    imageUrl: '',
    rating: 5,
    preview: '',
    isVideo: false
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const loadReviewData = async () => {
    try {
      const response = await fetch('/api/get-content?type=student-reviews');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          setReviewData(result.data);
        } else {
          console.error('API returned error:', result.error);
        }
      }
    } catch (error) {
      console.error('Error loading student review data:', error);
    }
  };

  useEffect(() => {
    loadReviewData();
  }, []);

  const saveReviewData = async (updatedData: StudentReviewData) => {
    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'student-reviews',
          data: updatedData
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setReviewData(updatedData);
          alert('Student review data saved successfully!');
        } else {
          alert('Error saving student review data: ' + result.error);
        }
      } else {
        alert('Error saving student review data');
      }
    } catch (error) {
      console.error('Error saving student review data:', error);
      alert('Error saving student review data');
    }
  };

  const handleEdit = (review: StudentReview) => {
    setSelectedReview(review);
    setFormData({
      studentName: review.studentName,
      course: review.course,
      platform: review.platform,
      imageUrl: review.imageUrl,
      rating: review.rating,
      preview: review.preview,
      isVideo: review.isVideo
    });
    setUploadedFile(null);
    setIsEditing(true);
  };

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload-review', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setFormData(prev => ({
            ...prev,
            imageUrl: result.filePath,
            isVideo: result.isVideo
          }));
          alert('File uploaded successfully!');
        } else {
          alert('Upload failed: ' + result.error);
        }
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      handleFileUpload(file);
    }
  };

  const handleAddNew = () => {
    setSelectedReview(null);
    setFormData({
      studentName: '',
      course: '',
      platform: 'WhatsApp',
      imageUrl: '',
      rating: 5,
      preview: '',
      isVideo: false
    });
    setUploadedFile(null);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!formData.studentName || !formData.course) {
      alert('Please fill all required fields (Student Name and Course)');
      return;
    }

    if (!formData.imageUrl) {
      alert('Please upload a file or provide an image path');
      return;
    }

    const updatedReviews = [...reviewData.studentReviews];
    
    if (selectedReview) {
      // Edit existing review
      const index = updatedReviews.findIndex(review => review.id === selectedReview.id);
      if (index !== -1) {
        updatedReviews[index] = {
          ...selectedReview,
          ...formData
        };
      }
    } else {
      // Add new review
      const newId = Math.max(...updatedReviews.map(review => review.id), 0) + 1;
      updatedReviews.push({
        id: newId,
        ...formData
      });
    }

    await saveReviewData({ studentReviews: updatedReviews });
    setIsEditing(false);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this student review?')) {
      const updatedReviews = reviewData.studentReviews.filter(review => review.id !== id);
      await saveReviewData({ studentReviews: updatedReviews });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedReview(null);
    setUploadedFile(null);
  };

  const courses = Array.from(new Set(reviewData.studentReviews.map(review => review.course)));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Student Review Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Review
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {selectedReview ? 'Edit Student Review' : 'Add New Student Review'}
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Student Name *</label>
                <input
                  type="text"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Priya Sharma"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Course *</label>
                <input
                  type="text"
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., UPSC CSE, MPSC"
                  list="courses"
                />
                <datalist id="courses">
                  {courses.map(course => (
                    <option key={course} value={course} />
                  ))}
                </datalist>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Platform *</label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({...formData, platform: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Notepad">Notepad</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rating *</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Upload Review Image/Video</label>
              <div className="space-y-3">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  disabled={isUploading}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {isUploading && (
                  <p className="text-blue-600 text-sm">Uploading file...</p>
                )}
                {uploadedFile && !isUploading && (
                  <p className="text-green-600 text-sm">✓ {uploadedFile.name} uploaded successfully</p>
                )}
                <p className="text-sm text-gray-600">
                  Supported formats: JPEG, PNG, GIF, WebP, MP4, AVI, MOV, WMV, WebM<br/>
                  Max size: 10MB for images, 50MB for videos
                </p>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-2">
                Review Image/Video Path {!formData.imageUrl && '*'}
              </label>
              <input
                type="text"
                value={formData.imageUrl}
                onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Upload a file above or enter path manually: /reviews/filename.jpg"
                disabled={isUploading}
              />
              <p className="text-sm text-gray-600 mt-1">
                {formData.imageUrl ? 
                  'File will be available at: ' + formData.imageUrl : 
                  'Upload a file above or manually enter the file path'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Preview Text</label>
                <textarea
                  value={formData.preview}
                  onChange={(e) => setFormData({...formData, preview: e.target.value})}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Short preview text (optional)"
                />
              </div>

              <div className="flex items-center">
                <label className="block text-sm font-medium mb-2">
                  <input
                    type="checkbox"
                    checked={formData.isVideo}
                    onChange={(e) => setFormData({...formData, isVideo: e.target.checked})}
                    className="mr-2"
                  />
                  This is a video review
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              {selectedReview ? 'Update Review' : 'Add Review'}
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Current Student Reviews ({reviewData.studentReviews.length})
            </h2>
            
            {reviewData.studentReviews.length === 0 ? (
              <p className="text-gray-500">No student reviews found. Add some to get started!</p>
            ) : (
              <div className="space-y-4">
                {reviewData.studentReviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-800">
                            {review.studentName}
                          </h3>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                            {review.course}
                          </span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                            {review.platform}
                          </span>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm">ID: {review.id}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Image: {review.imageUrl}
                        </p>
                        {review.preview && (
                          <p className="text-gray-600 text-sm mb-2">
                            Preview: {review.preview}
                          </p>
                        )}
                        {review.isVideo && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                            Video Review
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(review)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(review.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}