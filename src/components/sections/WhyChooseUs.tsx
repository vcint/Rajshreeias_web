"use client";

import { CheckCircle, Users, BookOpen, Clock, Award, Target, FileText, Headphones } from "lucide-react";

const reasons = [
    {
        icon: Target,
        title: "Gurukul Weekly Tracker",
        description: "We don't just teach; we track your progress every week. You are never studying alone."
    },
    {
        icon: BookOpen,
        title: "Bilingual Excellence",
        description: "Learn in mixed language, but get high-quality notes SEPARATELY in English & Marathi."
    },
    {
        icon: FileText,
        title: "Descriptive Focus",
        description: "Answer Writing integrated from Month 1. Master the art of expression for the new pattern."
    },
    {
        icon: Users,
        title: "Subject-Wise Mastery",
        description: "Flexible modules. Join the full course or just the subject you need."
    },
    {
        icon: Award,
        title: "The \"Balance & Harmony\" Approach",
        description: "The difference between a student and an officer is often just their state of mind. We provide exclusive mindset mastery sessions with experts to keep your focus sharp, your confidence high, and your spirit unshakeable throughout this journey."
    },
    {
        icon: Clock,
        title: "Regular Test Series",
        description: "Weekly tests for Prelims and monthly tests for Mains with detailed performance analysis and improvement suggestions."
    },
    {
        icon: Headphones,
        title: "Doubt Resolution",
        description: "Get your doubts cleared through dedicated doubt-clearing sessions and one-on-one interactions with faculty."
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
                        Why Rajashree's IAS Portal
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-6">
                        Why Choose Rajashree's IAS Portal: The Digital Gurukul Experience
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        Experience a revolutionary approach to civil services preparation that combines traditional wisdom with modern technology. 
                        Here's what makes our Gurukul methodology unique and effective.
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
