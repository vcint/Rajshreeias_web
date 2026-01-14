"use client";

import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Users } from "lucide-react";

const courses = [
    {
        title: "UPSC CSE Foundation Course",
        duration: "12 Months",
        mode: "Offline & Online",
        highlights: [
            "Complete General Studies coverage",
            "NCERT foundation to advanced topics",
            "Daily current affairs analysis",
            "Weekly prelims tests",
            "Monthly mains answer writing"
        ],
        description: "A comprehensive program designed for beginners starting their UPSC Civil Services preparation from scratch. Covers complete GS syllabus with special focus on building strong fundamentals.",
        tag: "Most Popular"
    },
    {
        title: "MPSC State Services Course",
        duration: "10 Months",
        mode: "Offline & Online",
        highlights: [
            "Maharashtra-specific syllabus",
            "Marathi medium available",
            "State geography & economy",
            "MPSC pattern-focused tests",
            "Previous year paper analysis"
        ],
        description: "Specialized course for Maharashtra Public Service Commission examinations. Comprehensive coverage of state-specific topics along with general studies.",
        tag: "Regional Focus"
    },
    {
        title: "Prelims Intensive Program",
        duration: "4 Months",
        mode: "Offline & Online",
        highlights: [
            "Rapid revision of all subjects",
            "2000+ MCQ practice",
            "CSAT preparation included",
            "10 full-length mock tests",
            "Performance analytics"
        ],
        description: "Fast-track program for aspirants targeting the upcoming Prelims examination. Intensive revision combined with extensive practice tests.",
        tag: "Fast Track"
    },
    {
        title: "Mains Answer Writing Program",
        duration: "6 Months",
        mode: "Offline & Online",
        highlights: [
            "Daily answer writing practice",
            "Personalized feedback",
            "Essay writing workshops",
            "Ethics case study practice",
            "Model answer discussions"
        ],
        description: "Focused program to develop and refine answer writing skills essential for Mains examination. Learn the art of presenting your knowledge effectively.",
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
                        Comprehensive Courses for Every Stage of Your Preparation
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        Whether you're a beginner or looking to enhance specific skills, 
                        we have the right program for you. All courses include study material and test series.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {courses.map((course) => (
                        <div 
                            key={course.title}
                            className="bg-white rounded-2xl border border-[#2D1B33]/10 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Tag */}
                            <div className="px-6 pt-6">
                                <span className="inline-block px-3 py-1 bg-[#D9A15B]/10 text-[#D9A15B] text-xs font-semibold rounded-full">
                                    {course.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#2D1B33] font-serif mb-3">
                                    {course.title}
                                </h3>
                                
                                <p className="text-[#2D1B33]/60 text-sm mb-4 leading-relaxed">
                                    {course.description}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-4 mb-4 text-sm text-[#2D1B33]/50">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {course.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {course.mode}
                                    </span>
                                </div>

                                {/* Highlights */}
                                <div className="border-t border-[#2D1B33]/5 pt-4">
                                    <p className="text-xs font-semibold text-[#2D1B33]/40 uppercase tracking-wider mb-3">
                                        What's Included
                                    </p>
                                    <ul className="space-y-2">
                                        {course.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-[#2D1B33]/70">
                                                <BookOpen className="w-4 h-4 text-[#D9A15B] flex-shrink-0 mt-0.5" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="mt-6">
                                    <Link href="/enroll">
                                        <button className="w-full py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center justify-center gap-2">
                                            Enquire Now
                                            <ArrowRight className="w-4 h-4" />
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
