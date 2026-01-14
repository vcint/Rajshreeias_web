"use client";

import { Calendar, FileText, Users, Award, BookOpen, Clock } from "lucide-react";

export default function UPSCInfo() {
    return (
        <section className="py-20 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Understanding the Examination
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-6">
                        About UPSC Civil Services Examination
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        The Civil Services Examination (CSE) is conducted by the Union Public Service Commission (UPSC) 
                        for recruitment to various Civil Services of the Government of India.
                    </p>
                </div>

                {/* Exam Structure */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-[#2D1B33] font-serif mb-8 text-center">
                        Three-Stage Selection Process
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Prelims */}
                        <div className="bg-white rounded-2xl p-8 border border-[#2D1B33]/10 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-6">
                                <FileText className="w-7 h-7 text-[#D9A15B]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#2D1B33] mb-4 font-serif">
                                Stage 1: Preliminary Exam
                            </h4>
                            <p className="text-[#2D1B33]/60 mb-4">
                                Objective type exam held in June. Qualifying in nature for Mains.
                            </p>
                            <ul className="space-y-2 text-sm text-[#2D1B33]/70">
                                <li>• <strong>Paper 1:</strong> General Studies (200 marks)</li>
                                <li>• <strong>Paper 2:</strong> CSAT - Aptitude (200 marks)</li>
                                <li>• Duration: 2 hours each paper</li>
                                <li>• Negative marking: 1/3rd for wrong answers</li>
                            </ul>
                        </div>

                        {/* Mains */}
                        <div className="bg-white rounded-2xl p-8 border border-[#2D1B33]/10 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-6">
                                <BookOpen className="w-7 h-7 text-[#D9A15B]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#2D1B33] mb-4 font-serif">
                                Stage 2: Main Examination
                            </h4>
                            <p className="text-[#2D1B33]/60 mb-4">
                                Descriptive exam held in September. Total 1750 marks.
                            </p>
                            <ul className="space-y-2 text-sm text-[#2D1B33]/70">
                                <li>• Essay Paper (250 marks)</li>
                                <li>• GS Paper I-IV (250 marks each)</li>
                                <li>• Optional Subject (500 marks)</li>
                                <li>• Language Papers (Qualifying)</li>
                            </ul>
                        </div>

                        {/* Interview */}
                        <div className="bg-white rounded-2xl p-8 border border-[#2D1B33]/10 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-[#D9A15B]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#2D1B33] mb-4 font-serif">
                                Stage 3: Personality Test
                            </h4>
                            <p className="text-[#2D1B33]/60 mb-4">
                                Interview conducted in March-April. Total 275 marks.
                            </p>
                            <ul className="space-y-2 text-sm text-[#2D1B33]/70">
                                <li>• Tests personality, not knowledge</li>
                                <li>• DAF-based questions</li>
                                <li>• Current affairs & opinion questions</li>
                                <li>• Duration: 20-40 minutes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Key Stats */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#2D1B33] rounded-2xl p-8 md:p-12">
                        <h3 className="text-xl font-bold text-white font-serif mb-8 text-center">
                            UPSC CSE Key Information
                        </h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                                    <Calendar className="w-6 h-6 text-[#D9A15B]" />
                                </div>
                                <p className="text-2xl font-bold text-white mb-1">Feb</p>
                                <p className="text-sm text-white/60">Notification Month</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                                    <Users className="w-6 h-6 text-[#D9A15B]" />
                                </div>
                                <p className="text-2xl font-bold text-white mb-1">10L+</p>
                                <p className="text-sm text-white/60">Applicants Yearly</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                                    <Award className="w-6 h-6 text-[#D9A15B]" />
                                </div>
                                <p className="text-2xl font-bold text-white mb-1">~1000</p>
                                <p className="text-sm text-white/60">Vacancies Approx.</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                                    <Clock className="w-6 h-6 text-[#D9A15B]" />
                                </div>
                                <p className="text-2xl font-bold text-white mb-1">12-18</p>
                                <p className="text-sm text-white/60">Months Preparation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services After Selection */}
                <div className="max-w-4xl mx-auto mt-16">
                    <h3 className="text-2xl font-bold text-[#2D1B33] font-serif mb-8 text-center">
                        Services You Can Join Through UPSC CSE
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Indian Administrative Service (IAS)",
                            "Indian Police Service (IPS)",
                            "Indian Foreign Service (IFS)",
                            "Indian Revenue Service (IRS)",
                            "Indian Audit & Accounts Service",
                            "Indian Railway Services",
                            "Indian Postal Service",
                            "Central Services Group A & B"
                        ].map((service, i) => (
                            <div 
                                key={i}
                                className="p-4 bg-white rounded-lg border border-[#2D1B33]/10 text-center"
                            >
                                <p className="text-sm font-medium text-[#2D1B33]">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
