"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

// Define types
interface TestimonialData {
    id: number;
    name: string;
    rank: string;
    image: string;
    text: string;
    rating: number;
    course: string;
}

interface FormattedTestimonial {
    name: string;
    role: string;
    content: string;
    initials: string;
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<FormattedTestimonial[]>([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/get-content?type=testimonials');
                const result = await response.json();
                if (result.success) {
                    const formattedTestimonials = result.data.testimonials.map((testimonial: TestimonialData) => ({
                        name: testimonial.name,
                        role: `${testimonial.course} - ${testimonial.rank}`,
                        content: testimonial.text,
                        initials: testimonial.name.split(' ').map(n => n[0]).join('')
                    }));
                    setTestimonials(formattedTestimonials);
                }
            } catch (error) {
                console.error('Error loading testimonials:', error);
            }
        };
        fetchTestimonials();
    }, []);
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
