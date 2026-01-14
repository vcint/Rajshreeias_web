"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, Clock, Calendar, CheckCircle, Play, Star } from "lucide-react";

const upcomingBatches = [
    {
        title: "UPSC CSE 2026",
        subtitle: "Foundation Batch",
        date: "Starting February 2026",
        duration: "12 Months",
        mode: "Offline + Online",
        features: ["Complete Syllabus", "Test Series", "Mentorship"],
        highlight: true,
    },
    {
        title: "MPSC 2026",
        subtitle: "State Services Batch",
        date: "Starting March 2026",
        duration: "10 Months",
        mode: "Offline",
        features: ["Maharashtra Special", "Marathi Medium", "Weekly Tests"],
        highlight: false,
    },
    {
        title: "Prelims Crash Course",
        subtitle: "UPSC Prelims 2026",
        date: "Starting April 2026",
        duration: "3 Months",
        mode: "Online",
        features: ["60+ Tests", "Current Affairs", "Revision Notes"],
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

            <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D9A15B]/10 border border-[#D9A15B]/20 mb-6">
                            <Star className="w-4 h-4 text-[#D9A15B] fill-[#D9A15B]" />
                            <span className="text-sm font-medium text-[#2D1B33]">
                                UPSC & MPSC Coaching in Latur
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1B33] leading-[1.15] tracking-tight font-serif">
                            Begin Your 
                            <span className="text-[#D9A15B]"> IAS Journey </span>
                            with Expert Guidance
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-6 text-lg text-[#2D1B33]/70 leading-relaxed">
                            Join Rajshree IAS Portal for comprehensive Civil Services preparation. 
                            Our experienced faculty, structured approach, and personalized mentorship 
                            help you achieve your dream of becoming an IAS/IPS officer.
                        </p>

                        {/* Key Features */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="text-sm font-medium text-[#2D1B33]">Expert Faculty</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-[#2D1B33]">Complete Material</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-5 h-5 text-purple-600" />
                                </div>
                                <span className="text-sm font-medium text-[#2D1B33]">Small Batches</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-orange-600" />
                                </div>
                                <span className="text-sm font-medium text-[#2D1B33]">Flexible Timing</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <Link href="/enroll">
                                <button className="group px-8 py-4 bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] text-white font-semibold rounded-xl flex items-center gap-2 hover:shadow-xl hover:shadow-[#2D1B33]/20 transition-all cursor-pointer">
                                    Enroll Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/courses">
                                <button className="group px-8 py-4 text-[#2D1B33] font-semibold rounded-xl border-2 border-[#2D1B33]/20 hover:border-[#D9A15B] hover:bg-[#D9A15B]/5 transition-all flex items-center gap-2 cursor-pointer">
                                    <Play className="w-4 h-4" />
                                    View Courses
                                </button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 pt-8 border-t border-[#2D1B33]/10">
                            <p className="text-sm text-[#2D1B33]/50 mb-3">Preparing students for:</p>
                            <div className="flex flex-wrap gap-3">
                                {["UPSC CSE", "MPSC", "SSC CGL", "Banking"].map((exam) => (
                                    <span 
                                        key={exam}
                                        className="px-4 py-1.5 bg-white rounded-full text-sm font-medium text-[#2D1B33]/70 border border-[#2D1B33]/10"
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
                            <div className="p-4 space-y-4">
                                {upcomingBatches.map((batch, index) => (
                                    <div 
                                        key={index}
                                        className={`p-4 rounded-xl border transition-all hover:shadow-md cursor-pointer ${
                                            batch.highlight 
                                                ? 'bg-gradient-to-r from-[#D9A15B]/10 to-[#D9A15B]/5 border-[#D9A15B]/30' 
                                                : 'bg-[#FAF9F6] border-[#2D1B33]/10 hover:border-[#D9A15B]/30'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-bold text-[#2D1B33]">{batch.title}</h4>
                                                    {batch.highlight && (
                                                        <span className="px-2 py-0.5 bg-[#D9A15B] text-white text-xs font-semibold rounded">
                                                            NEW
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-[#2D1B33]/60 mt-0.5">{batch.subtitle}</p>
                                                
                                                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                                                    <span className="flex items-center gap-1 text-[#2D1B33]/70">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {batch.date}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-[#2D1B33]/70">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {batch.duration}
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {batch.features.map((feature, i) => (
                                                        <span 
                                                            key={i}
                                                            className="px-2 py-1 bg-white rounded text-xs text-[#2D1B33]/70 border border-[#2D1B33]/10"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="text-right flex-shrink-0">
                                                <span className="inline-block px-3 py-1 bg-[#2D1B33]/5 rounded-full text-xs font-medium text-[#2D1B33]">
                                                    {batch.mode}
                                                </span>
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
                            <p className="text-sm text-white/80 mb-2">Have questions? Call us:</p>
                            <a href="tel:+918668275251" className="text-xl font-bold text-[#D9A15B] hover:underline">
                                +91 8668275251
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
