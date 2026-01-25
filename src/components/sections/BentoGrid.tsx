"use client";

import { Video, FileText, Users, Award } from "lucide-react";

const features = [
    {
        icon: Video,
        title: "Live Interactive Classes",
        description: "Experience engaging live classes with expert IAS faculty. Interactive sessions, doubt clearing, and real-time learning for UPSC & MPSC preparation in Latur."
    },
    {
        icon: FileText,
        title: "Comprehensive Study Material",
        description: "Get access to meticulously curated study materials covering complete UPSC syllabus, MPSC papers, current affairs, and practice questions designed by toppers."
    },
    {
        icon: Users,
        title: "1-on-1 Mentorship Program",
        description: "Personalized mentorship from UPSC toppers and experienced faculty. Regular progress tracking, study plan customization, and career guidance for IAS aspirants."
    },
    {
        icon: Award,
        title: "Advanced Test Series",
        description: "Regular mock tests with detailed performance analysis. All India ranking, answer keys, and expert evaluation to improve your UPSC & MPSC exam scores."
    },
];

export default function BentoGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Why Choose Rajashree's IAS Portal?
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-4">
                        Complete IAS Preparation Ecosystem in Latur
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        Everything you need for UPSC & MPSC success under one roof. 
                        Join Latur's #1 IAS coaching institute with proven results and expert guidance.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-4 sm:p-6 lg:p-8 rounded-xl bg-[#FAF9F6] border border-[#2D1B33]/5 hover:shadow-lg hover:shadow-[#2D1B33]/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#D9A15B]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#2D1B33] mb-2 sm:mb-3 font-serif text-center">
                                {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#2D1B33]/60 leading-relaxed text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
