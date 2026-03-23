"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, Edit2 } from "lucide-react";

interface Course {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  price: string;
  originalPrice?: string;
  mode: string;
  category: string;
  features: string[];
  courseHighlights: string[];
  razorpayUrl: string;
}

export default function CourseEditor() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/get-content?file=courses.json');
      const result = await response.json();
      
      if (result.success) {
        setCourses(result.data.courses || []);
      } else {
        console.error('Failed to fetch courses:', result.error);
      }
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveCourses = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          file: 'courses.json', 
          data: { courses } 
        })
      });

      if (response.ok) {
        alert('Courses updated successfully!');
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      alert('Failed to save courses. Please try again.');
      console.error('Save error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const editCourse = (course: Course) => {
    setEditingCourse({ ...course });
  };

  const saveCourse = () => {
    if (!editingCourse) return;
    
    setCourses(prev => prev.map(course => 
      course.id === editingCourse.id ? editingCourse : course
    ));
    setEditingCourse(null);
  };

  const deleteCourse = (id: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(prev => prev.filter(course => course.id !== id));
    }
  };

  const addNewCourse = () => {
    const newCourse: Course = {
      id: `course-${Date.now()}`,
      title: 'New Course',
      shortDescription: 'Course description',
      duration: '6 months',
      price: '₹50,000',
      mode: 'Online',
      category: 'Complete Package',
      features: ['Expert Faculty', 'Comprehensive Material'],
      courseHighlights: ['Structured program', 'Expert guidance'],
      razorpayUrl: 'https://rzp.io/rzp/example'
    };
    setCourses(prev => [...prev, newCourse]);
    setEditingCourse(newCourse);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="text-[#2D1B33]">Loading courses...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-[#2D1B33]/60 hover:text-[#D9A15B] mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1B33] mb-2">
                Course Editor
              </h1>
              <p className="text-[#2D1B33]/70 text-lg">
                Manage course information and pricing
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={addNewCourse}
                className="bg-[#D9A15B] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#B8873E] transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Course
              </button>
              <button
                onClick={saveCourses}
                disabled={isSaving}
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save All'}
              </button>
            </div>
          </div>
        </div>

        {/* Courses List */}
        <div className="grid gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#2D1B33]">{course.title}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => editCourse(course)}
                    className="p-2 text-[#2D1B33]/60 hover:text-[#D9A15B] transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteCourse(course.id)}
                    className="p-2 text-[#2D1B33]/60 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-[#2D1B33]/80">Price:</span>
                  <div className="text-[#D9A15B] font-semibold">{course.price}</div>
                </div>
                <div>
                  <span className="font-medium text-[#2D1B33]/80">Duration:</span>
                  <div className="text-[#2D1B33]">{course.duration}</div>
                </div>
                <div>
                  <span className="font-medium text-[#2D1B33]/80">Category:</span>
                  <div className="text-[#2D1B33]">{course.category}</div>
                </div>
                <div>
                  <span className="font-medium text-[#2D1B33]/80">Mode:</span>
                  <div className="text-[#2D1B33]">{course.mode}</div>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <span className="font-medium text-[#2D1B33]/80">Razorpay Link:</span>
                <div className="text-[#2D1B33] break-all">{course.razorpayUrl || 'Not set'}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingCourse && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-semibold text-[#2D1B33] mb-6">Edit Course</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingCourse.title}
                    onChange={(e) => setEditingCourse({...editingCourse, title: e.target.value})}
                    className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Description</label>
                  <textarea
                    value={editingCourse.shortDescription}
                    onChange={(e) => setEditingCourse({...editingCourse, shortDescription: e.target.value})}
                    className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B] h-24"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Price</label>
                    <input
                      type="text"
                      value={editingCourse.price}
                      onChange={(e) => setEditingCourse({...editingCourse, price: e.target.value})}
                      className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                      placeholder="₹50,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Duration</label>
                    <input
                      type="text"
                      value={editingCourse.duration}
                      onChange={(e) => setEditingCourse({...editingCourse, duration: e.target.value})}
                      className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Mode</label>
                    <select
                      value={editingCourse.mode}
                      onChange={(e) => setEditingCourse({...editingCourse, mode: e.target.value})}
                      className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                    >
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Category</label>
                    <input
                      type="text"
                      value={editingCourse.category}
                      onChange={(e) => setEditingCourse({...editingCourse, category: e.target.value})}
                      className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Razorpay Link</label>
                  <input
                    type="url"
                    value={editingCourse.razorpayUrl || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, razorpayUrl: e.target.value})}
                    className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                    placeholder="https://rzp.io/rzp/your-course-link"
                  />
                  <p className="text-xs text-[#2D1B33]/60 mt-1">
                    Set a unique payment link for this course page.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={saveCourse}
                    className="bg-[#D9A15B] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#B8873E] transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditingCourse(null)}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}