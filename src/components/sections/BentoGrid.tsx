"use client";

import { Video, FileText, Users, Award } from "lucide-react";

const features = [
    {
        icon: Video,
        title: "Live Classes",
        description: "Interactive sessions with experienced faculty covering complete UPSC and MPSC syllabus."
    },
    {
        icon: FileText,
        title: "Study Material",
        description: "Comprehensive notes, previous year questions, and curated content for effective preparation."
    },
    {
        icon: Users,
        title: "Personal Mentorship",
        description: "One-on-one guidance from mentors to help you stay on track and overcome challenges."
    },
    {
        icon: Award,
        title: "Test Series",
        description: "Regular mock tests with detailed analysis to evaluate your preparation level."
    },
];

export default function BentoGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        What We Offer
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-4">
                        Complete Preparation Ecosystem
                    </h2>
                    <p className="text-[#2D1B33]/60">
                        Everything you need for your civil services journey under one roof
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-8 rounded-xl bg-[#FAF9F6] border border-[#2D1B33]/5 hover:shadow-lg hover:shadow-[#2D1B33]/5 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-6">
                                <feature.icon className="w-7 h-7 text-[#D9A15B]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2D1B33] mb-3 font-serif">
                                {feature.title}
                            </h3>
                            <p className="text-[#2D1B33]/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
