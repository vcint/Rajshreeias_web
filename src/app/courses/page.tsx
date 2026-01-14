"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
    Search, Clock, Users, BookOpen, Calendar, CheckCircle, 
    ArrowRight, Star, GraduationCap, FileText, Award 
} from "lucide-react";

const courses = [
    { 
        id: 1, 
        title: "UPSC CSE Foundation Course", 
        category: "UPSC", 
        description: "Complete GS coverage from basics to advanced for serious aspirants. Ideal for beginners and those seeking a strong foundation.",
        duration: "12 Months",
        mode: "Offline + Online",
        batchSize: "30-40 Students",
        highlights: ["Complete GS Syllabus", "Daily Current Affairs", "Weekly Tests", "Answer Writing Practice"],
        featured: true,
        startDate: "February 2026"
    },
    { 
        id: 2, 
        title: "MPSC State Services Complete", 
        category: "MPSC", 
        description: "Comprehensive preparation for Maharashtra PSC covering all papers with Maharashtra-specific content.",
        duration: "10 Months",
        mode: "Offline",
        batchSize: "30-40 Students",
        highlights: ["Marathi & English Medium", "Maharashtra History & Geography", "Mock Tests", "Interview Guidance"],
        featured: true,
        startDate: "March 2026"
    },
    { 
        id: 3, 
        title: "UPSC Prelims Intensive", 
        category: "UPSC", 
        description: "Focused crash course for UPSC Prelims with extensive test practice and revision.",
        duration: "3 Months",
        mode: "Online",
        batchSize: "50 Students",
        highlights: ["60+ Mock Tests", "PYQ Analysis", "Quick Revision Notes", "CSAT Preparation"],
        featured: false,
        startDate: "April 2026"
    },
    { 
        id: 4, 
        title: "Mains Answer Writing Program", 
        category: "UPSC", 
        description: "Master the art of answer writing with personalized feedback from experienced evaluators.",
        duration: "4 Months",
        mode: "Offline + Online",
        batchSize: "25 Students",
        highlights: ["200+ Answer Evaluations", "Model Answers", "Essay Writing", "Ethics Case Studies"],
        featured: false,
        startDate: "July 2026"
    },
    { 
        id: 5, 
        title: "History Optional Complete", 
        category: "Optional", 
        description: "In-depth coverage of History optional with focus on answer writing and map work.",
        duration: "8 Months",
        mode: "Offline",
        batchSize: "25 Students",
        highlights: ["Ancient + Medieval + Modern", "World History", "Map Practice", "PYQ Discussion"],
        featured: false,
        startDate: "February 2026"
    },
    { 
        id: 6, 
        title: "Current Affairs Yearly Program", 
        category: "UPSC", 
        description: "Daily current affairs analysis with monthly compilations and prelims-mains integration.",
        duration: "12 Months",
        mode: "Online",
        batchSize: "Unlimited",
        highlights: ["Daily The Hindu Analysis", "Monthly Magazine", "Weekly Quiz", "Prelims MCQs"],
        featured: false,
        startDate: "Ongoing Admission"
    },
    { 
        id: 7, 
        title: "UPSC Interview Guidance", 
        category: "UPSC", 
        description: "Comprehensive personality test preparation with mock interviews by experienced panels.",
        duration: "2 Months",
        mode: "Offline",
        batchSize: "15 Students",
        highlights: ["10+ Mock Interviews", "DAF Analysis", "Current Affairs Update", "Personality Development"],
        featured: false,
        startDate: "On Demand"
    },
    { 
        id: 8, 
        title: "UPSC + MPSC Combined", 
        category: "MPSC", 
        description: "Simultaneous preparation for both UPSC and MPSC with common and specific modules.",
        duration: "15 Months",
        mode: "Offline",
        batchSize: "30 Students",
        highlights: ["Common GS Foundation", "State-specific Modules", "Dual Test Series", "Flexible Schedule"],
        featured: true,
        startDate: "February 2026"
    },
];

const categories = ["All", "UPSC", "MPSC", "Optional"];

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
                            Explore Our Courses
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg">
                            Comprehensive coaching programs designed to help you succeed in UPSC, MPSC, and other civil services examinations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-20 container mx-auto px-4">
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-xl border border-[#2D1B33]/10 shadow-sm">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer",
                                    activeCategory === cat 
                                        ? "bg-[#2D1B33] text-white shadow-md" 
                                        : "text-[#2D1B33]/60 hover:text-[#2D1B33] hover:bg-[#FAF9F6]"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#2D1B33]/40" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="pl-11 pr-4 py-3 rounded-xl border border-[#2D1B33]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent w-full md:w-72 shadow-sm"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Featured Courses */}
                {featuredCourses.length > 0 && (
                    <div className="mb-12 max-w-6xl mx-auto">
                        <div className="flex items-center gap-2 mb-6">
                            <Star className="w-5 h-5 text-[#D9A15B] fill-[#D9A15B]" />
                            <h2 className="text-xl font-bold text-[#2D1B33]">Featured Courses</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {featuredCourses.map(course => (
                                <div 
                                    key={course.id} 
                                    className="bg-white border-2 border-[#D9A15B]/20 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#D9A15B]/40 transition-all"
                                >
                                    <div className="bg-gradient-to-r from-[#D9A15B]/10 to-[#D9A15B]/5 px-6 py-3 border-b border-[#D9A15B]/10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-[#D9A15B] uppercase tracking-wider flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-[#D9A15B]" />
                                                Featured
                                            </span>
                                            <span className="text-xs font-medium text-[#2D1B33]/60 bg-white px-2 py-1 rounded">
                                                {course.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-serif font-bold text-[#2D1B33] mb-3">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-[#2D1B33]/60 mb-4 leading-relaxed">
                                            {course.description}
                                        </p>

                                        {/* Course Meta */}
                                        <div className="grid grid-cols-2 gap-3 mb-5">
                                            <div className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                                <Clock className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                                <Users className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.batchSize}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                                <BookOpen className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.mode}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                                <Calendar className="w-4 h-4 text-[#D9A15B]" />
                                                <span>{course.startDate}</span>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {course.highlights.map((h, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-2.5 py-1 rounded-full">
                                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                                    {h}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            <Link href="/enroll" className="flex-1">
                                                <button className="w-full py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors cursor-pointer flex items-center justify-center gap-2">
                                                    Enroll Now
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <button className="px-4 py-3 border-2 border-[#2D1B33]/20 text-[#2D1B33] font-semibold rounded-lg hover:bg-[#FAF9F6] transition-colors cursor-pointer">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* All Courses */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-bold text-[#2D1B33] mb-6">
                        {activeCategory === "All" ? "All Courses" : `${activeCategory} Courses`}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularCourses.map(course => (
                            <div 
                                key={course.id} 
                                className="bg-white border border-[#2D1B33]/10 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#D9A15B]/30 transition-all group"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-semibold text-[#D9A15B] uppercase tracking-wider">
                                            {course.category}
                                        </span>
                                        <span className="text-xs text-[#2D1B33]/50">
                                            {course.mode}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-[#2D1B33] mb-2 group-hover:text-[#D9A15B] transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-[#2D1B33]/60 mb-4 line-clamp-2">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-[#2D1B33]/60 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {course.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-3.5 h-3.5" />
                                            {course.batchSize.split(' ')[0]}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {course.highlights.slice(0, 2).map((h, i) => (
                                            <span key={i} className="text-xs bg-[#FAF9F6] text-[#2D1B33]/60 px-2 py-1 rounded">
                                                {h}
                                            </span>
                                        ))}
                                        {course.highlights.length > 2 && (
                                            <span className="text-xs bg-[#FAF9F6] text-[#2D1B33]/60 px-2 py-1 rounded">
                                                +{course.highlights.length - 2} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t border-[#2D1B33]/5 flex items-center justify-between">
                                        <span className="text-xs text-[#2D1B33]/50">
                                            {course.startDate}
                                        </span>
                                        <Link 
                                            href="/enroll" 
                                            className="text-sm font-semibold text-[#2D1B33] hover:text-[#D9A15B] transition-colors flex items-center gap-1"
                                        >
                                            Enquire 
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-16 max-w-md mx-auto">
                        <GraduationCap className="w-16 h-16 text-[#2D1B33]/20 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-[#2D1B33] mb-2">No courses found</h3>
                        <p className="text-[#2D1B33]/50">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="max-w-6xl mx-auto mt-16">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                            Not Sure Which Course is Right for You?
                        </h2>
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                            Our counselors will help you choose the best program based on your background, 
                            target exam, and preparation level. Schedule a free counseling session today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/enroll">
                                <button className="px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors cursor-pointer">
                                    Book Free Counseling
                                </button>
                            </Link>
                            <a href="tel:+918668275251">
                                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 cursor-pointer">
                                    Call: +91 98765 43210
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
