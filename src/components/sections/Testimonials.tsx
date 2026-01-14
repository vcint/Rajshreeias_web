"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "UPSC Aspirant",
        content: "The faculty at Rajshree IAS Portal really understands the UPSC exam pattern. Their current affairs program is exceptional - it connects daily news with the syllabus in a way that makes retention easy. The small batch size means you actually get personal attention.",
        initials: "PS"
    },
    {
        name: "Rahul Deshmukh",
        role: "MPSC Student",
        content: "Being from a Marathi medium background, I was worried about coaching. But the faculty here explains concepts in both Hindi and Marathi, making it easier to understand. The study material is comprehensive and saves a lot of time.",
        initials: "RD"
    },
    {
        name: "Anjali Patil",
        role: "Working Professional",
        content: "The weekend batch and online classes are a blessing for working professionals like me. I can attend live sessions when possible and catch up with recordings otherwise. The test series helps me benchmark my preparation effectively.",
        initials: "AP"
    },
    {
        name: "Vikram Singh",
        role: "UPSC Aspirant",
        content: "What I appreciate most is the honest guidance. They don't make false promises but focus on building a strong foundation. The answer writing practice with personalized feedback has significantly improved my Mains preparation.",
        initials: "VS"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#2D1B33]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Student Experiences
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-6">
                        What Our Students Say
                    </h2>
                    <p className="text-white/60 text-lg">
                        Hear from aspirants who are preparing with us. Their feedback helps us continuously improve our teaching.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 text-[#D9A15B]/50 mb-4" />
                            
                            {/* Content */}
                            <p className="text-white/80 leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>
                            
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#D9A15B]/20 flex items-center justify-center">
                                    <span className="text-[#D9A15B] font-semibold text-sm">
                                        {testimonial.initials}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
