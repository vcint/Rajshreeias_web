"use client";

import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Users } from "lucide-react";

const courses = [
    {
        title: "UPSC & MPSC Foundation Course - Latur",
        duration: "15 Months",
        mode: "Online",
        highlights: [
            "Complete General Studies (GS) Paper 1, 2, 3, 4 coverage",
            "CSAT (Paper 2) - Quantitative Aptitude & Reasoning",
            "Daily current affairs analysis & newspaper reading",
            "Weekly prelims mock tests with detailed solutions",
            "Monthly mains answer writing practice",
            "Essay writing & ethics case studies",
            "Interview preparation & personality development"
        ],
        description: "🏆 Most Popular Course. Comprehensive UPSC Civil Services Exam preparation program designed for beginners. Complete syllabus coverage with expert faculty, regular assessments, and personalized mentorship. Join Latur's best IAS coaching institute.",
        tag: "Most Popular"
    },
    {
        title: "MPSC State Services Course - Maharashtra",
        duration: "12 Months",
        mode: " Online",
        highlights: [
            "Maharashtra state-specific syllabus & geography",
            "State economy, polity & administration",
            "Marathi language paper preparation",
            "MPSC prelims & mains pattern practice",
            "Previous year question papers analysis",
            "State service interview guidance",
            "Local governance & rural development"
        ],
        description: "Specialized MPSC preparation course with Maharashtra focus. Expert faculty with state service experience. Bilingual delivery in English + Marathi. Complete preparation for Maharashtra Public Service Commission examinations.",
        tag: "Regional Focus"
    },
    {
        title: "UPSC Prelims Intensive Program",
        duration: "4 Months",
        mode: "Online",
        highlights: [
            "Rapid revision of entire prelims syllabus",
            "2000+ MCQ practice questions",
            "CSAT complete preparation included",
            "10 full-length mock tests",
            "Performance analytics & improvement tracking",
            "Current affairs special focus",
            "Negative marking strategy training"
        ],
        description: "Fast-track UPSC Prelims preparation for working professionals and late starters. Intensive revision program with extensive practice tests. Designed for quick results and maximum score improvement.",
        tag: "Fast Track"
    },
    {
        title: "Mains Answer Writing Mastery Program",
        duration: "6 Months",
        mode: "Online",
        highlights: [
            "Daily answer writing practice for all GS papers",
            "Personalized feedback from expert evaluators",
            "Essay writing workshops & advanced techniques",
            "Ethics & integrity case study practice",
            "Model answer discussions & improvement tips",
            "Time management & presentation skills",
            "Previous year question paper analysis"
        ],
        description: "🎯 Expert-Led Program. Master the art of Mains answer writing with personalized feedback. Learn to structure answers, manage time effectively, and score maximum marks in UPSC Mains examination.",
        tag: "Skill Building"
    }
];

export default function CoursesOverview() {
    return (
        <section className="py-20 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Our Programs
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-6">
                        Best IAS Coaching Courses in Latur - UPSC & MPSC Preparation
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        Join Latur's premier IAS coaching institute for comprehensive UPSC Civil Services Exam preparation. 
                        Expert faculty, proven results, and personalized mentorship for IAS aspirants in Maharashtra.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {courses.map((course) => (
                        <div 
                            key={course.title}
                            className="bg-white rounded-2xl border border-[#2D1B33]/10 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Tag */}
                            <div className="px-4 sm:px-6 pt-4 sm:pt-6">
                                <span className="inline-block px-2 sm:px-3 py-1 bg-[#D9A15B]/10 text-[#D9A15B] text-xs font-semibold rounded-full">
                                    {course.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-[#2D1B33] font-serif mb-2 sm:mb-3">
                                    {course.title}
                                </h3>
                                
                                <p className="text-[#2D1B33]/60 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                                    {course.description}
                                </p>

                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-[#2D1B33]/50">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {course.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {course.mode}
                                    </span>
                                </div>

                                {/* Highlights */}
                                <div className="border-t border-[#2D1B33]/5 pt-3 sm:pt-4">
                                    <p className="text-xs font-semibold text-[#2D1B33]/40 uppercase tracking-wider mb-2 sm:mb-3">
                                        What's Included
                                    </p>
                                    <ul className="space-y-1.5 sm:space-y-2">
                                        {course.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#2D1B33]/70">
                                                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#D9A15B] flex-shrink-0 mt-0.5" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="mt-4 sm:mt-6">
                                    <Link href="/enroll">
                                        <button className="w-full py-2.5 sm:py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center justify-center gap-2 min-h-[44px]">
                                            Enquire Now
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-12">
                    <Link href="/courses">
                        <button className="px-8 py-3 border-2 border-[#2D1B33]/20 text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33] hover:text-white transition-all">
                            View All Courses
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
