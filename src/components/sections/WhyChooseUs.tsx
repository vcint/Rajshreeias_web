"use client";

import { CheckCircle, Users, BookOpen, Clock, Award, Target, FileText, Headphones } from "lucide-react";

const reasons = [
    {
        icon: Users,
        title: "Experienced Faculty",
        description: "Learn from educators with 10+ years of experience in UPSC/MPSC coaching. Our faculty includes former civil servants and subject matter experts."
    },
    {
        icon: BookOpen,
        title: "Comprehensive Study Material",
        description: "Get access to meticulously prepared notes, current affairs compilations, and previous year question papers with detailed solutions."
    },
    {
        icon: Clock,
        title: "Flexible Batch Timings",
        description: "Choose from morning, evening, or weekend batches. We also offer recorded lectures for those who miss live sessions."
    },
    {
        icon: Target,
        title: "Focused Approach",
        description: "Our teaching methodology is aligned with the latest UPSC and MPSC exam patterns, ensuring you study what matters most."
    },
    {
        icon: FileText,
        title: "Regular Test Series",
        description: "Weekly tests for Prelims and monthly tests for Mains with detailed performance analysis and improvement suggestions."
    },
    {
        icon: Headphones,
        title: "Doubt Resolution",
        description: "Get your doubts cleared through dedicated doubt-clearing sessions and one-on-one interactions with faculty."
    },
    {
        icon: Award,
        title: "Answer Writing Practice",
        description: "Daily answer writing practice with personalized feedback to help you develop the skill most crucial for Mains examination."
    },
    {
        icon: CheckCircle,
        title: "Interview Guidance",
        description: "Comprehensive personality test preparation including mock interviews by panels of experienced interviewers."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Why Rajshree IAS Portal
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-6">
                        8 Reasons to Choose Us for Your Civil Services Preparation
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        We understand that choosing the right coaching institute is a crucial decision. 
                        Here's what makes Rajshree IAS Portal the preferred choice for UPSC and MPSC aspirants.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div 
                            key={reason.title}
                            className="p-6 rounded-xl bg-[#FAF9F6] border border-[#2D1B33]/5 hover:shadow-lg hover:border-[#D9A15B]/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center mb-4">
                                <reason.icon className="w-6 h-6 text-[#D9A15B]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#2D1B33] mb-3 font-serif">
                                {reason.title}
                            </h3>
                            <p className="text-sm text-[#2D1B33]/60 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
