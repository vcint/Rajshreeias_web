"use client";

import { useState, useRef } from "react";
import { Upload, FileText, Trash2, Eye, Download, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface UploadedFile {
  id: string;
  title: string;
  fileName: string;
  category: string;
  uploadDate: string;
  fileSize: string;
}

export default function ResourceManager() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileTitle, setFileTitle] = useState("");
  const [fileCategory, setFileCategory] = useState("currentAffairs");

  const categories = [
    { value: "currentAffairs", label: "Current Affairs" },
    { value: "previousYearQuestions", label: "Previous Year Questions" },
    { value: "studyNotes", label: "Study Notes" },
    { value: "syllabus", label: "Syllabus" },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setFileTitle(file.name.replace('.pdf', ''));
    } else {
      alert("Please select a PDF file only");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !fileTitle.trim()) {
      alert("Please select a file and enter a title");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('title', fileTitle);
      formData.append('category', fileCategory);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch('/api/upload-resource', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (response.ok) {
        const result = await response.json();
        
        // Add to uploaded files list
        const newFile: UploadedFile = {
          id: Date.now().toString(),
          title: fileTitle,
          fileName: selectedFile.name,
          category: fileCategory,
          uploadDate: new Date().toLocaleDateString(),
          fileSize: formatFileSize(selectedFile.size)
        };
        
        setUploadedFiles(prev => [newFile, ...prev]);
        
        // Reset form
        setSelectedFile(null);
        setFileTitle("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        
        alert("File uploaded successfully!");
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024 * 1024) {
      return Math.round(bytes / 1024) + " KB";
    }
    return Math.round(bytes / (1024 * 1024)) + " MB";
  };

  const deleteFile = (id: string) => {
    if (confirm("Are you sure you want to delete this file?")) {
      setUploadedFiles(prev => prev.filter(file => file.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-[#2D1B33]/60 hover:text-[#D9A15B] mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1B33] mb-2">
            Resource Manager
          </h1>
          <p className="text-[#2D1B33]/70 text-lg">
            Upload and manage PDF resources for students
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
              <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">Upload New Resource</h2>
              
              {/* File Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">
                  Select PDF File
                </label>
                <div className="border-2 border-dashed border-[#2D1B33]/20 rounded-lg p-6 text-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-input"
                  />
                  <label htmlFor="file-input" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-[#2D1B33]/40 mx-auto mb-2" />
                    <p className="text-[#2D1B33]/60">
                      {selectedFile ? selectedFile.name : "Click to select PDF file"}
                    </p>
                    <p className="text-xs text-[#2D1B33]/40 mt-1">Max size: 10MB</p>
                  </label>
                </div>
              </div>

              {/* Title Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">
                  Resource Title
                </label>
                <input
                  type="text"
                  value={fileTitle}
                  onChange={(e) => setFileTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="Enter resource title"
                />
              </div>

              {/* Category Select */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">
                  Category
                </label>
                <select
                  value={fileCategory}
                  onChange={(e) => setFileCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload Progress */}
              {isUploading && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-[#2D1B33]/60 mb-1">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-[#2D1B33]/10 rounded-full h-2">
                    <div 
                      className="bg-[#D9A15B] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Upload Button */}
              <button
                onClick={handleUpload}
                disabled={!selectedFile || !fileTitle.trim() || isUploading}
                className="w-full bg-[#D9A15B] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#B8873E] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                {isUploading ? "Uploading..." : "Upload Resource"}
              </button>
            </div>
          </div>

          {/* Files List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
              <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">
                Uploaded Resources ({uploadedFiles.length})
              </h2>

              {uploadedFiles.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-[#2D1B33]/20 mx-auto mb-4" />
                  <p className="text-[#2D1B33]/60">No resources uploaded yet</p>
                  <p className="text-sm text-[#2D1B33]/40 mt-1">Upload your first PDF resource to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="border border-[#2D1B33]/10 rounded-lg p-4 hover:bg-[#2D1B33]/5 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 p-2 rounded-lg">
                            <FileText className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-[#2D1B33]">{file.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-[#2D1B33]/60">
                              <span>{categories.find(cat => cat.value === file.category)?.label}</span>
                              <span>{file.uploadDate}</span>
                              <span>{file.fileSize}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-[#2D1B33]/60 hover:text-[#D9A15B] transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-[#2D1B33]/60 hover:text-[#D9A15B] transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => deleteFile(file.id)}
                            className="p-2 text-[#2D1B33]/60 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}