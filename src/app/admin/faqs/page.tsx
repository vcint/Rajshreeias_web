'use client';

import { useState, useEffect } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQData {
  faqs: FAQ[];
}

export default function FAQEditor() {
  const [faqData, setFaqData] = useState<FAQData>({ faqs: [] });
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Omit<FAQ, 'id'>>({
    question: '',
    answer: '',
    category: ''
  });

  useEffect(() => {
    loadFAQData();
  }, []);

  const loadFAQData = async () => {
    try {
      const response = await fetch('/api/get-content?type=faqs');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          setFaqData(result.data);
        } else {
          console.error('API returned error:', result.error);
        }
      }
    } catch (error) {
      console.error('Error loading FAQ data:', error);
    }
  };

  const saveFAQData = async (updatedData: FAQData) => {
    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'faqs',
          data: updatedData
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setFaqData(updatedData);
          alert('FAQ data saved successfully!');
        } else {
          alert('Error saving FAQ data: ' + result.error);
        }
      } else {
        alert('Error saving FAQ data');
      }
    } catch (error) {
      console.error('Error saving FAQ data:', error);
      alert('Error saving FAQ data');
    }
  };

  const handleEdit = (faq: FAQ) => {
    setSelectedFAQ(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category
    });
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setSelectedFAQ(null);
    setFormData({
      question: '',
      answer: '',
      category: ''
    });
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!formData.question || !formData.answer || !formData.category) {
      alert('Please fill all required fields');
      return;
    }

    const updatedFAQs = [...faqData.faqs];
    
    if (selectedFAQ) {
      // Edit existing FAQ
      const index = updatedFAQs.findIndex(faq => faq.id === selectedFAQ.id);
      if (index !== -1) {
        updatedFAQs[index] = {
          ...selectedFAQ,
          ...formData
        };
      }
    } else {
      // Add new FAQ
      const newId = Math.max(...updatedFAQs.map(faq => faq.id), 0) + 1;
      updatedFAQs.push({
        id: newId,
        ...formData
      });
    }

    await saveFAQData({ faqs: updatedFAQs });
    setIsEditing(false);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      const updatedFAQs = faqData.faqs.filter(faq => faq.id !== id);
      await saveFAQData({ faqs: updatedFAQs });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedFAQ(null);
  };

  const categories = Array.from(new Set(faqData.faqs.map(faq => faq.category)));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">FAQ Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New FAQ
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {selectedFAQ ? 'Edit FAQ' : 'Add New FAQ'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category *</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., General, Courses, Admission"
                list="categories"
              />
              <datalist id="categories">
                {categories.map(cat => (
                  <option key={cat} value={cat} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Question *</label>
              <input
                type="text"
                value={formData.question}
                onChange={(e) => setFormData({...formData, question: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the frequently asked question"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Answer *</label>
              <textarea
                value={formData.answer}
                onChange={(e) => setFormData({...formData, answer: e.target.value})}
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Provide a detailed answer to the question"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              {selectedFAQ ? 'Update FAQ' : 'Add FAQ'}
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
              Current FAQs ({faqData.faqs.length})
            </h2>
            
            {faqData.faqs.length === 0 ? (
              <p className="text-gray-500">No FAQs found. Add some to get started!</p>
            ) : (
              <div className="space-y-4">
                {faqData.faqs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                            {faq.category}
                          </span>
                          <span className="text-gray-500 text-sm">ID: {faq.id}</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {faq.answer}
                        </p>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(faq)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(faq.id)}
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