"use client";

import { GraduationCap } from "lucide-react";

const exams = ["UPSC CSE", "MPSC", "SSC", "Banking"];

export default function StatsSection() {
    return (
        <section className="py-16 bg-[#2D1B33]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left content */}
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <GraduationCap className="w-5 h-5 text-[#D9A15B]" />
                            <span className="text-[#D9A15B] text-sm font-medium">
                                Preparing Students For
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
                            India&apos;s Top Competitive Exams
                        </h3>
                    </div>

                    {/* Exam badges */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {exams.map((exam) => (
                            <div
                                key={exam}
                                className="px-6 py-3 rounded-lg bg-white/10 border border-white/10 text-white font-medium hover:bg-white/15 transition-colors"
                            >
                                {exam}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
