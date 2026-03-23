"use client";

import { useEffect, useState } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

interface Testimonial {
  id: number;
  name: string;
  rank: string;
  image: string;
  text: string;
  rating: number;
  course: string;
}

interface TestimonialsData {
  testimonials: Testimonial[];
}

const emptyForm: Omit<Testimonial, "id"> = {
  name: "",
  rank: "",
  image: "",
  text: "",
  rating: 5,
  course: ""
};

export default function TestimonialsEditor() {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const [data, setData] = useState<TestimonialsData>({ testimonials: [] });
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Omit<Testimonial, "id">>(emptyForm);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const loadTestimonials = async () => {
    try {
      const response = await fetch("/api/get-content?type=testimonials");
      const result = await response.json();

      if (result.success && result.data) {
        setData({ testimonials: result.data.testimonials || [] });
      } else {
        console.error("Failed to load testimonials:", result.error);
      }
    } catch (error) {
      console.error("Failed to load testimonials:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadTestimonials();
    }
  }, [isAuthenticated]);

  const saveTestimonials = async (updated: TestimonialsData) => {
    try {
      const response = await fetch("/api/update-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "testimonials",
          data: updated
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setData(updated);
        alert("Testimonials saved successfully.");
      } else {
        alert("Failed to save testimonials: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Failed to save testimonials:", error);
      alert("Failed to save testimonials.");
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setSelected(testimonial);
    setFormData({
      name: testimonial.name,
      rank: testimonial.rank,
      image: testimonial.image,
      text: testimonial.text,
      rating: testimonial.rating,
      course: testimonial.course
    });
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setSelected(null);
    setFormData(emptyForm);
    setUploadedFile(null);
    setIsEditing(true);
  };

  const handleImageUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const payload = new FormData();
      payload.append("file", file);

      const response = await fetch("/api/upload-testimonial", {
        method: "POST",
        body: payload
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setFormData((prev) => ({ ...prev, image: result.filePath }));
        alert("Image uploaded successfully.");
      } else {
        alert("Upload failed: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    setUploadedFile(file);
    handleImageUpload(file);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    const updated = {
      testimonials: data.testimonials.filter((item) => item.id !== id)
    };

    await saveTestimonials(updated);
  };

  const handleSave = async () => {
    if (!formData.name || !formData.rank || !formData.course || !formData.text) {
      alert("Please fill all required fields: Name, Rank, Course, and Testimonial Text.");
      return;
    }

    const updated = [...data.testimonials];

    if (selected) {
      const index = updated.findIndex((item) => item.id === selected.id);
      if (index !== -1) {
        updated[index] = {
          ...selected,
          ...formData
        };
      }
    } else {
      const newId = Math.max(...updated.map((item) => item.id), 0) + 1;
      updated.push({ id: newId, ...formData });
    }

    await saveTestimonials({ testimonials: updated });
    setIsEditing(false);
    setSelected(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelected(null);
    setFormData(emptyForm);
    setUploadedFile(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Testimonials Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Testimonial
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {selected ? "Edit Testimonial" : "Add New Testimonial"}
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Priya Sharma"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rank / Achievement *</label>
                <input
                  type="text"
                  value={formData.rank}
                  onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., AIR 45, UPSC CSE 2023"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Course *</label>
                <input
                  type="text"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., UPSC CSE Complete Course"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rating *</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value, 10) })}
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
              <label className="block text-sm font-medium mb-2">Upload Image (Optional)</label>
              <div className="space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isUploading}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {isUploading && <p className="text-blue-600 text-sm">Uploading image...</p>}
                {uploadedFile && !isUploading && (
                  <p className="text-green-600 text-sm">Uploaded: {uploadedFile.name}</p>
                )}
                <p className="text-sm text-gray-600">Supported formats: JPEG, PNG, GIF, WebP. Max size: 10MB. Uploaded file path will auto-fill below.</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Image Link or Path (Optional)</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste full URL (https://...) or local path (/testimonials/image.jpg)"
                disabled={isUploading}
              />
              <p className="text-sm text-gray-600 mt-1">
                {formData.image
                  ? `Current image value: ${formData.image}`
                  : "You can either upload an image above or paste an image URL/path here."}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Testimonial Text *</label>
              <textarea
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write testimonial text"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              {selected ? "Update Testimonial" : "Add Testimonial"}
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
              Current Testimonials ({data.testimonials.length})
            </h2>

            {data.testimonials.length === 0 ? (
              <p className="text-gray-500">No testimonials found. Add one to get started.</p>
            ) : (
              <div className="space-y-4">
                {data.testimonials.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{item.rank}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">{item.course}</span>
                          <div className="flex items-center">
                            {[...Array(item.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">{item.text}</p>
                        <p className="text-gray-500 text-xs">Image: {item.image || "Not set"}</p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
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
