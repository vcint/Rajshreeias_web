"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
    Search, Clock, Users, BookOpen, Calendar, CheckCircle, 
    ArrowRight, Star, GraduationCap, FileText, Award 
} from "lucide-react";
import coursesData from "@/content/courses.json";

const courses = coursesData.courses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    category: course.category,
    description: course.shortDescription,
    duration: course.duration,
    mode: course.mode,
    batchSize: "30-40 Students",
    highlights: course.features.slice(0, 4),
    featured: course.featured,
    startDate: "February 2026",
    detailsPage: course.detailsPage,
    price: course.price,
    originalPrice: course.originalPrice,
    razorpayUrl: course.razorpayUrl
}));

// Updated categories to match actual course data and provide better filtering
const categories = [
    "All", 
    "Complete Package", 
    "Subject Module", 
    "Skill Development", 
    "Mentorship", 
    "Test Series", 
    "CSAT"
];

// Helper function to get display name for categories
const getCategoryDisplayName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
        "Complete Package": "Complete Package",
        "Subject Module": "Subject Modules",
        "Skill Development": "Skill Development",
        "Mentorship": "Mentorship",
        "Test Series": "Test Series",
        "CSAT": "CSAT"
    };
    return categoryMap[category] || category;
};

export default function CoursesPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredCourses = courses.filter(course => {
        const matchesCategory = activeCategory === "All" || course.category === activeCategory;
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredCourses = filteredCourses.filter(c => c.featured);
    const regularCourses = filteredCourses.filter(c => !c.featured);

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-white to-[#FAF9F6] pt-8 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60 mb-8">
                        <Link href="/" className="hover:text-[#D9A15B]">Home</Link>
                        <span>/</span>
                        <span className="text-[#2D1B33]">Courses</span>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Our Programs
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            IAS Coaching Courses in Latur - UPSC & MPSC Preparation
                        </h1>
                        <p className="text-base md:text-lg text-[#2D1B33]/70 leading-relaxed">
                            Join Latur's best IAS coaching institute for comprehensive UPSC Civil Services and MPSC preparation. 
                            Expert faculty, proven results, and personalized mentorship for civil services aspirants in Maharashtra.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filter and Search */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-10">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D1B33]/40" />
                            <input 
                                type="text" 
                                placeholder="Search courses..." 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9A15B]/20 focus:border-[#D9A15B]"
                            />
                        </div>
                    </div>

                    {/* Categories Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full font-medium transition-all",
                                    activeCategory === cat 
                                        ? "bg-[#D9A15B] text-white shadow-md" 
                                        : "bg-gray-100 text-[#2D1B33]/70 hover:bg-gray-200"
                                )}
                            >
                                {cat === "All" ? "All" : getCategoryDisplayName(cat)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Courses */}
                {featuredCourses.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Star className="w-6 h-6 text-[#D9A15B] fill-[#D9A15B]" />
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33]">
                                Featured Courses
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredCourses.map((course) => (
                                <div key={course.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group border border-[#D9A15B]/20">
                                    <div className="bg-gradient-to-br from-[#D9A15B]/10 to-[#D9A15B]/5 p-6 border-b border-[#D9A15B]/20">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9A15B] text-white text-sm font-semibold rounded-full">
                                                <Star className="w-3 h-3 fill-white" />
                                                Featured
                                            </span>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-[#2D1B33]">{course.price}</div>
                                                {course.originalPrice && (
                                                    <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2D1B33] mb-3">
                                            {course.title}
                                        </h3>
                                        
                                        <p className="text-[#2D1B33]/70 text-sm">
                                            {course.description}
                                        </p>
                                    </div>

                                    <div className="p-6">
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                                <Clock className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                                <Users className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.mode}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {course.highlights.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2 text-sm text-[#2D1B33]/70">
                                                    <CheckCircle className="w-4 h-4 text-[#D9A15B] flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            {course.razorpayUrl && (
                                                <a href={course.razorpayUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                    <button className="w-full px-4 py-3 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors">
                                                        Buy Now
                                                    </button>
                                                </a>
                                            )}
                                            <Link href={course.detailsPage} className="flex-1">
                                                <button className="w-full px-4 py-3 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33] hover:text-white transition-all flex items-center justify-center gap-2">
                                                    Details
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Regular Courses */}
                {regularCourses.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-8">
                            All Courses
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularCourses.map((course) => (
                                <div key={course.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="px-3 py-1 bg-[#2D1B33]/10 text-[#2D1B33] text-xs font-semibold rounded-full">
                                                {course.category}
                                            </span>
                                            <div className="text-right">
                                                <div className="text-xl font-bold text-[#2D1B33]">{course.price}</div>
                                                {course.originalPrice && (
                                                    <div className="text-xs text-gray-500 line-through">{course.originalPrice}</div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-serif font-bold text-[#2D1B33] mb-3">
                                            {course.title}
                                        </h3>
                                        
                                        <p className="text-[#2D1B33]/70 text-sm mb-4">
                                            {course.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                                            <div className="flex items-center gap-2 text-[#2D1B33]/70">
                                                <Clock className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[#2D1B33]/70">
                                                <Users className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.mode}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 mb-6">
                                            {course.highlights.slice(0, 3).map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2 text-sm text-[#2D1B33]/70">
                                                    <CheckCircle className="w-3.5 h-3.5 text-[#D9A15B] flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            {course.razorpayUrl && (
                                                <a href={course.razorpayUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                    <button className="w-full px-4 py-2.5 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors text-sm">
                                                        Buy Now
                                                    </button>
                                                </a>
                                            )}
                                            <Link href={course.detailsPage} className="flex-1">
                                                <button className="w-full px-4 py-2.5 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33] hover:text-white transition-all flex items-center justify-center gap-2 text-sm">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <BookOpen className="w-16 h-16 mx-auto mb-4 text-[#2D1B33]/20" />
                        <h3 className="text-xl font-semibold text-[#2D1B33] mb-2">No courses found</h3>
                        <p className="text-[#2D1B33]/60">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#2D1B33] to-[#3D2B43] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Can't Find the Right Course?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Our counseling team will help you choose the perfect program based on your goals and preparation level
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/enroll">
                            <button className="px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors">
                                Get Free Counseling
                            </button>
                        </Link>
                        <a href="tel:+918668275251">
                            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                                Call: +91 86682 75251
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
