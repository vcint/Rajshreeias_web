"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is the eligibility criteria for UPSC Civil Services Examination?",
        answer: "To appear for UPSC CSE, you must be an Indian citizen (with some relaxations for other categories), hold a graduate degree from a recognized university, and be between 21-32 years of age (with relaxations for reserved categories). The number of attempts allowed varies based on category: General - 6 attempts, OBC - 9 attempts, SC/ST - unlimited attempts until age limit."
    },
    {
        question: "What courses does Rajshree IAS Portal offer?",
        answer: "We offer comprehensive courses for UPSC Civil Services Examination (IAS/IPS/IFS), MPSC (Maharashtra State Services), Prelims-specific programs, Mains answer writing courses, Optional subject coaching, Current affairs programs, and Interview preparation. All courses are available in both offline and online modes."
    },
    {
        question: "Do you provide study material?",
        answer: "Yes, all our courses include comprehensive study material developed by our experienced faculty. This includes subject-wise notes, current affairs monthly magazines, previous year question papers with solutions, and practice question banks. The material is regularly updated to align with the latest exam patterns and current developments."
    },
    {
        question: "What is the batch size at Rajshree IAS Portal?",
        answer: "We maintain small batch sizes of 30-40 students to ensure personalized attention for each aspirant. This allows our faculty to track individual progress, address specific weaknesses, and provide customized guidance throughout the preparation journey."
    },
    {
        question: "Do you offer online classes?",
        answer: "Yes, we offer live online classes that mirror the quality of our offline sessions. Online students get access to live interactive sessions, recorded lectures for revision, digital study material, online test series with performance analytics, and dedicated doubt-clearing sessions via video calls."
    },
    {
        question: "How is the current affairs program structured?",
        answer: "Our current affairs program includes daily news analysis covering The Hindu, Indian Express, and PIB. We provide weekly current affairs tests, monthly compilations, and special sessions linking current events to static syllabus topics. We focus on making current affairs relevant for both Prelims MCQs and Mains answer writing."
    },
    {
        question: "What is the fee structure for UPSC coaching?",
        answer: "Our fee structure varies based on the program you choose. We offer flexible payment options including installments. For detailed fee information, please visit our institute or contact us. We also provide scholarships for meritorious students and those from economically weaker sections."
    },
    {
        question: "How do I enroll in a course?",
        answer: "You can enroll by visiting our center in Latur, calling us at +91 98765 43210, or filling out the enquiry form on our website. Our counselors will understand your requirements and guide you to the most suitable program. We recommend attending a demo class before enrolling."
    },
    {
        question: "Do you provide hostel facilities?",
        answer: "While we don't operate our own hostel, we assist outstation students in finding suitable accommodation near our center. We have tie-ups with several PG accommodations and hostels in the vicinity that offer student-friendly rates and a conducive study environment."
    },
    {
        question: "What is the success rate of Rajshree IAS Portal?",
        answer: "As a growing institution, we focus on providing quality education rather than making tall claims. We measure our success through consistent student improvement, positive feedback, and the strong foundation we build for each aspirant's preparation journey. We encourage you to interact with our current students to understand our teaching methodology."
    }
];

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
                        Frequently Asked Questions About UPSC Coaching
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        Find answers to common questions about our courses, teaching methodology, and the civil services examination.
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
