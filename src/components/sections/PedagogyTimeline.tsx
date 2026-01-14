"use client";

import { BookOpen, Lightbulb, PenTool, Target } from "lucide-react";

const steps = [
    {
        icon: BookOpen,
        phase: "Phase 1",
        title: "Foundation Building",
        duration: "3 Months",
        description: "Build strong fundamentals with NCERT-based learning and conceptual clarity sessions."
    },
    {
        icon: Lightbulb,
        phase: "Phase 2",
        title: "Knowledge Application",
        duration: "4 Months",
        description: "Connect concepts with current affairs and develop analytical thinking skills."
    },
    {
        icon: PenTool,
        phase: "Phase 3",
        title: "Answer Writing",
        duration: "3 Months",
        description: "Master the art of answer writing with regular practice and personalized feedback."
    },
    {
        icon: Target,
        phase: "Phase 4",
        title: "Exam Mastery",
        duration: "2 Months",
        description: "Intensive revision, mock tests, and interview preparation for final success."
    }
];

export default function PedagogyTimeline() {
    return (
        <section className="py-20 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Our Approach
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-4">
                        A Proven Path to Success
                    </h2>
                    <p className="text-[#2D1B33]/60">
                        Our structured 12-month program takes you from basics to mastery
                    </p>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="relative p-6 rounded-xl bg-white border border-[#2D1B33]/10 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Phase Badge */}
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-[#D9A15B] text-white text-xs font-semibold rounded-full">
                                {step.phase}
                            </div>

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-[#2D1B33]/5 flex items-center justify-center mt-4 mb-4">
                                <step.icon className="w-6 h-6 text-[#2D1B33]" />
                            </div>

                            {/* Content */}
                            <p className="text-xs font-medium text-[#D9A15B] uppercase tracking-wider mb-2">
                                {step.duration}
                            </p>
                            <h3 className="text-lg font-semibold text-[#2D1B33] mb-2 font-serif">
                                {step.title}
                            </h3>
                            <p className="text-sm text-[#2D1B33]/60 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#D9A15B]/30" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom info */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
                    {[
                        { value: "12", label: "Months Duration" },
                        { value: "500+", label: "Hours of Content" },
                        { value: "100%", label: "Syllabus Coverage" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl font-bold text-[#2D1B33]">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#2D1B33]/60 mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
