"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const benefits = [
    "Experienced faculty with proven track record",
    "Small batch sizes for personal attention",
    "Comprehensive study material included",
    "Regular doubt clearing sessions",
];

export default function CTASection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto rounded-2xl bg-[#FAF9F6] border border-[#2D1B33]/10 p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#2D1B33] font-serif mb-4">
                                Ready to Start Your{" "}
                                <span className="text-[#D9A15B]">UPSC Journey?</span>
                            </h2>

                            <p className="text-[#2D1B33]/60 mb-8">
                                Join Rajashree's IAS Portal and take the first step towards your dream of becoming a civil servant.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#2D1B33]/70">
                                        <CheckCircle className="w-5 h-5 text-[#D9A15B] flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/enroll">
                                    <button className="w-full sm:w-auto px-8 py-4 bg-[#2D1B33] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#2D1B33]/90 transition-colors">
                                        Enroll Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                                <Link href="/courses">
                                    <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33]/20 text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                        View Courses
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Contact Info */}
                        <div className="bg-white rounded-xl p-8 border border-[#2D1B33]/10 shadow-sm">
                            <h3 className="text-xl font-semibold text-[#2D1B33] font-serif mb-6">
                                Get in Touch
                            </h3>
                            
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#D9A15B]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#2D1B33]/60 mb-1">Call us</p>
                                        <p className="font-medium text-[#2D1B33]">+91 86682 75251</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#D9A15B]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#2D1B33]/60 mb-1">Email us</p>
                                        <p className="font-medium text-[#2D1B33]">info@rajashreeias.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#D9A15B]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#2D1B33]/60 mb-1">Visit us</p>
                                        <p className="font-medium text-[#2D1B33]">Latur, Maharashtra</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#2D1B33]/10">
                                <p className="text-sm text-[#2D1B33]/60 text-center">
                                    Office hours: Mon - Sat, 9 AM - 7 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
