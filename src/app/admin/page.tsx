import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, FileText, Settings, MessageSquare, HelpCircle, BookOpen, Users, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Content Management Dashboard | Rajashree's IAS Portal",
    description: "Easy content management dashboard for Rajashree's IAS Portal website",
};

export default function ContentDashboard() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#2D1B33]/60 hover:text-[#D9A15B] mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Website
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1B33] mb-2">
                        Content Management Dashboard
                    </h1>
                    <p className="text-[#2D1B33]/70 text-lg">
                        Easily manage all website content without coding knowledge
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
                        <div className="flex items-center gap-3 mb-3">
                            <BookOpen className="w-8 h-8 text-[#D9A15B]" />
                            <div>
                                <div className="text-2xl font-bold text-[#2D1B33]">8</div>
                                <div className="text-sm text-[#2D1B33]/60">Courses</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
                        <div className="flex items-center gap-3 mb-3">
                            <MessageSquare className="w-8 h-8 text-[#D9A15B]" />
                            <div>
                                <div className="text-2xl font-bold text-[#2D1B33]">4</div>
                                <div className="text-sm text-[#2D1B33]/60">Testimonials</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
                        <div className="flex items-center gap-3 mb-3">
                            <HelpCircle className="w-8 h-8 text-[#D9A15B]" />
                            <div>
                                <div className="text-2xl font-bold text-[#2D1B33]">6</div>
                                <div className="text-sm text-[#2D1B33]/60">FAQs</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
                        <div className="flex items-center gap-3 mb-3">
                            <FileText className="w-8 h-8 text-[#D9A15B]" />
                            <div>
                                <div className="text-2xl font-bold text-[#2D1B33]">15+</div>
                                <div className="text-sm text-[#2D1B33]/60">Resources</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Management Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Courses */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-[#2D1B33]/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#D9A15B]/10 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-[#D9A15B]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-[#2D1B33]">Courses</h3>
                                <p className="text-[#2D1B33]/60">Manage course details & pricing</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-[#2D1B33]/70">UPSC CSE Complete</span>
                                <span className="font-semibold text-[#2D1B33]">₹1,20,000</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-[#2D1B33]/70">MPSC Complete</span>
                                <span className="font-semibold text-[#2D1B33]">₹80,000</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-[#2D1B33]/70">Current Affairs</span>
                                <span className="font-semibold text-[#2D1B33]">₹12,000</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                            Edit Courses
                        </button>
                    </div>

                    {/* Site Settings */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-[#2D1B33]/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#D9A15B]/10 rounded-xl flex items-center justify-center">
                                <Settings className="w-6 h-6 text-[#D9A15B]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-[#2D1B33]">Site Settings</h3>
                                <p className="text-[#2D1B33]/60">Contact info & social links</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-[#D9A15B]" />
                                <span className="text-[#2D1B33]/70">+91 86682 75251</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Users className="w-4 h-4 text-[#D9A15B]" />
                                <span className="text-[#2D1B33]/70">5000+ Students</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <BookOpen className="w-4 h-4 text-[#D9A15B]" />
                                <span className="text-[#2D1B33]/70">Quality Education</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                            Edit Settings
                        </button>
                    </div>

                    {/* Testimonials */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-[#2D1B33]/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#D9A15B]/10 rounded-xl flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-[#D9A15B]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-[#2D1B33]">Testimonials</h3>
                                <p className="text-[#2D1B33]/60">Student reviews & success stories</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="text-sm text-[#2D1B33]/70">
                                "The faculty really understands the UPSC exam pattern..."
                            </div>
                            <div className="text-sm text-[#2D1B33]/70">
                                "Small batch size ensured personalized attention..."
                            </div>
                            <div className="text-sm text-[#2D1B33]/70">
                                "Answer writing practice improved my Mains preparation..."
                            </div>
                        </div>

                        <button className="w-full px-4 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                            Edit Testimonials
                        </button>
                    </div>

                    {/* FAQs */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-[#2D1B33]/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#D9A15B]/10 rounded-xl flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-[#D9A15B]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-[#2D1B33]">FAQs</h3>
                                <p className="text-[#2D1B33]/60">Frequently asked questions</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="text-sm text-[#2D1B33]/70">
                                "What is the eligibility for UPSC CSE?"
                            </div>
                            <div className="text-sm text-[#2D1B33]/70">
                                "What courses do you offer?"
                            </div>
                            <div className="text-sm text-[#2D1B33]/70">
                                "Do you provide study material?"
                            </div>
                        </div>

                        <button className="w-full px-4 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                            Edit FAQs
                        </button>
                    </div>

                    {/* Resources */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-[#2D1B33]/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#D9A15B]/10 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-[#D9A15B]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-[#2D1B33]">Resources</h3>
                                <p className="text-[#2D1B33]/60">Free study materials & downloads</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="text-sm text-[#2D1B33]/70">
                                "Current Affairs - January 2026"
                            </div>
                            <div className="text-sm text-[#2D1B33]/70">
                                "UPSC Prelims 2025 Question Paper"
                            </div>
                            <div className="text-sm text-[#2D1B33]/70">
                                "Indian Polity Complete Notes"
                            </div>
                        </div>

                        <button className="w-full px-4 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                            Edit Resources
                        </button>
                    </div>

                    {/* Help & Guide */}
                    <div className="bg-gradient-to-br from-[#2D1B33] to-[#3D2B43] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-white">Help & Guide</h3>
                                <p className="text-white/80">How to edit content safely</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="text-sm text-white/80">
                                "Always backup files before editing"
                            </div>
                            <div className="text-sm text-white/80">
                                "Use https://jsonlint.com to validate"
                            </div>
                            <div className="text-sm text-white/80">
                                "Keep the same structure and format"
                            </div>
                        </div>

                        <Link href="/content/README.md" target="_blank">
                            <button className="w-full px-4 py-3 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors">
                                View Full Guide
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-[#2D1B33]/10">
                    <h3 className="text-2xl font-serif font-bold text-[#2D1B33] mb-6">Quick Actions</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#D9A15B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-[#D9A15B]" />
                            </div>
                            <h4 className="font-semibold text-[#2D1B33] mb-2">Update Course Prices</h4>
                            <p className="text-sm text-[#2D1B33]/60 mb-4">Change pricing and discounts</p>
                            <button className="px-6 py-2 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors">
                                Edit Prices
                            </button>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#D9A15B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-[#D9A15B]" />
                            </div>
                            <h4 className="font-semibold text-[#2D1B33] mb-2">Update Contact Info</h4>
                            <p className="text-sm text-[#2D1B33]/60 mb-4">Change phone, email, address</p>
                            <button className="px-6 py-2 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors">
                                Edit Contact
                            </button>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#D9A15B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-8 h-8 text-[#D9A15B]" />
                            </div>
                            <h4 className="font-semibold text-[#2D1B33] mb-2">Add New Testimonial</h4>
                            <p className="text-sm text-[#2D1B33]/60 mb-4">Add student success stories</p>
                            <button className="px-6 py-2 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors">
                                Add Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}