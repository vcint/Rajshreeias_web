"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import faqsData from "@/content/faqs.json";

const faqs = faqsData.faqs;

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Common Questions
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-6">
                        IAS Coaching FAQs - Everything About UPSC Preparation in Latur
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        Get answers to frequently asked questions about IAS coaching in Latur, UPSC exam preparation, 
                        course fees, faculty experience, and success rates at Rajashree's IAS Portal coaching institute.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-[#2D1B33]/10 rounded-xl overflow-hidden bg-[#FAF9F6]"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#2D1B33]/5 transition-colors cursor-pointer"
                            >
                                <span className="font-semibold text-[#2D1B33] text-left">
                                    {faq.question}
                                </span>
                                <ChevronDown 
                                    className={cn(
                                        "w-5 h-5 text-[#D9A15B] flex-shrink-0 transition-transform duration-200",
                                        openIndex === index ? "rotate-180" : ""
                                    )}
                                />
                            </button>
                            
                            {openIndex === index && (
                                <div className="px-6 pb-5 text-[#2D1B33]/70 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="max-w-3xl mx-auto mt-12 text-center">
                    <p className="text-[#2D1B33]/60 mb-4">
                        Still have questions? We're here to help.
                    </p>
                    <a 
                        href="/enroll"
                        className="inline-block px-8 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
