"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, Clock, Calendar, CheckCircle, Play, Star } from "lucide-react";
import siteSettings from "@/content/site-settings.json";

const upcomingBatches = [
    {
        title: "Sankalp 2027 Foundation Batch",
        subtitle: "Complete UPSC + MPSC Preparation",
        date: "Starting February 2026",
        duration: "11 Months",
        mode: "Online",
        features: ["UPSC + MPSC Syllabus", "Prelims + Mains", "Answer Writing Practice", "Interview Preparation"],
        highlight: true,
    },
    {
        title: "Civil Services Foundation 2026",
        subtitle: "UPSC & MPSC Combined Program",
        date: "Starting March 2026",
        duration: "12 Months",
        mode: "Online",
        features: ["Dual Exam Preparation", "State & Central Focus", "Mock Tests", "Mentorship"],
        highlight: false,
    },
    {
        title: "Prelims Intensive 2026",
        subtitle: "UPSC + MPSC Prelims Focus",
        date: "Starting April 2026",
        duration: "4 Months",
        mode: "Online",
        features: ["Combined Test Series", "Current Affairs", "Revision Sessions", "Performance Analytics"],
        highlight: false,
    },
];

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D9A15B]/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2D1B33]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#D9A15B]/10 border border-[#D9A15B]/20 mb-4 sm:mb-6">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#D9A15B] fill-[#D9A15B]" />
                            <span className="text-xs sm:text-sm font-medium text-[#2D1B33]">
                                UPSC & MPSC Coaching in Latur
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D1B33] leading-[1.15] tracking-tight font-serif">
                            {siteSettings.hero.title.split(' ').slice(0, 2).join(' ')}
                            <span className="text-[#D9A15B]"> {siteSettings.hero.title.split(' ').slice(2, 4).join(' ')} </span>
                            {siteSettings.hero.title.split(' ').slice(4).join(' ')}
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#2D1B33]/70 leading-relaxed">
                            {siteSettings.hero.subtitle}
                        </p>

                        {/* Key Features */}
                        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-[#2D1B33]">Expert Faculty</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-[#2D1B33]">Complete Material</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-[#2D1B33]">Small Batches</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-[#2D1B33]">Flexible Timing</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                            <Link href="/enroll" className="flex-1 sm:flex-initial">
                                <button className="w-full group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#2D1B33]/20 transition-all cursor-pointer min-h-[48px]">
                                    Enroll Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/courses" className="flex-1 sm:flex-initial">
                                <button className="w-full group px-6 sm:px-8 py-3 sm:py-4 text-[#2D1B33] font-semibold rounded-xl border-2 border-[#2D1B33]/20 hover:border-[#D9A15B] hover:bg-[#D9A15B]/5 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]">
                                    <Play className="w-4 h-4" />
                                    View Courses
                                </button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#2D1B33]/10">
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {["UPSC CSE", "MPSC", "SSC CGL", "Banking Exams", "RRB", "State PSC"].map((exam) => (
                                    <span 
                                        key={exam}
                                        className="px-3 py-1 sm:px-4 sm:py-1.5 bg-white rounded-full text-xs sm:text-sm font-medium text-[#2D1B33]/70 border border-[#2D1B33]/10"
                                    >
                                        {exam}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Upcoming Batches */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-white rounded-2xl shadow-2xl shadow-[#2D1B33]/10 border border-[#2D1B33]/5 overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-[#D9A15B]" />
                                    <h3 className="text-lg font-semibold text-white">Upcoming Batches</h3>
                                </div>
                            </div>

                            {/* Batch Cards */}
                            <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                                {upcomingBatches.map((batch, index) => (
                                    <div 
                                        key={index}
                                        className={`p-3 sm:p-4 rounded-xl border transition-all hover:shadow-md cursor-pointer ${
                                            batch.highlight 
                                                ? 'bg-gradient-to-r from-[#D9A15B]/10 to-[#D9A15B]/5 border-[#D9A15B]/30' 
                                                : 'bg-[#FAF9F6] border-[#2D1B33]/10 hover:border-[#D9A15B]/30'
                                        }`}
                                    >
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <h4 className="font-bold text-[#2D1B33] text-sm sm:text-base truncate">{batch.title}</h4>
                                                        {batch.highlight && (
                                                            <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-[#D9A15B] text-white text-xs font-semibold rounded flex-shrink-0">
                                                                NEW
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs sm:text-sm text-[#2D1B33]/60 mt-0.5 truncate">{batch.subtitle}</p>
                                                </div>
                                                <span className="inline-block px-2 py-1 sm:px-3 bg-[#2D1B33]/5 rounded-full text-xs font-medium text-[#2D1B33] flex-shrink-0">
                                                    {batch.mode}
                                                </span>
                                            </div>
                                            
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                                                <span className="flex items-center gap-1 text-[#2D1B33]/70">
                                                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                    {batch.date}
                                                </span>
                                                <span className="flex items-center gap-1 text-[#2D1B33]/70">
                                                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                    {batch.duration}
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {batch.features.map((feature, i) => (
                                                    <span 
                                                        key={i}
                                                        className="px-2 py-0.5 sm:px-2 sm:py-1 bg-white rounded text-xs text-[#2D1B33]/70 border border-[#2D1B33]/10"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 bg-[#FAF9F6] border-t border-[#2D1B33]/5">
                                <Link 
                                    href="/courses"
                                    className="flex items-center justify-center gap-2 text-sm font-semibold text-[#2D1B33] hover:text-[#D9A15B] transition-colors"
                                >
                                    View All Courses
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="mt-6 p-4 bg-[#2D1B33] rounded-xl text-white text-center">
                            <p className="text-sm text-white/80 mb-2">📞 Get FREE Counseling from IAS Experts</p>
                            <a href="tel:+918668275251" className="text-xl font-bold text-[#D9A15B] hover:underline">
                                +91 86682 75251
                            </a>
                            <p className="text-xs text-white/60 mt-1">Call now for personalized guidance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
