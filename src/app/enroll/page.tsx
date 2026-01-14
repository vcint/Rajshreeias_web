"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    CheckCircle, Loader2, Phone, Mail, MapPin, Clock, 
    Instagram, Send, Youtube, MessageCircle, Calendar,
    GraduationCap, Users, BookOpen
} from "lucide-react";

const benefits = [
    { icon: GraduationCap, text: "Expert Faculty with years of experience" },
    { icon: Users, text: "Small batch sizes (30-40 students)" },
    { icon: BookOpen, text: "Comprehensive study material included" },
    { icon: Calendar, text: "Flexible batch timings available" },
];

const courses = [
    { value: "upsc-foundation", label: "UPSC CSE Foundation Course (12 Months)" },
    { value: "mpsc-complete", label: "MPSC State Services Complete (10 Months)" },
    { value: "upsc-prelims", label: "UPSC Prelims Intensive (3 Months)" },
    { value: "mains-writing", label: "Mains Answer Writing Program (4 Months)" },
    { value: "history-optional", label: "History Optional (8 Months)" },
    { value: "current-affairs", label: "Current Affairs Yearly Program" },
    { value: "interview", label: "Interview Guidance (2 Months)" },
    { value: "other", label: "Other / General Enquiry" },
];

export default function EnrollPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        educationLevel: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4">
                <div className="text-center space-y-4 max-w-md">
                    <div className="mx-auto h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-[#2D1B33]">Thank You!</h2>
                    <p className="text-[#2D1B33]/60">
                        We have received your enquiry. Our team will contact you within 24 hours.
                    </p>
                    <p className="text-sm text-[#2D1B33]/50">
                        You can also reach us directly at <a href="tel:+918668275251" className="text-[#D9A15B]">+91 86682 75251</a>
                    </p>
                    <Link 
                        href="/"
                        className="inline-block mt-8 px-6 py-3 bg-[#2D1B33] text-white rounded-lg font-semibold hover:bg-[#2D1B33]/90 transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-white to-[#FAF9F6] pt-8 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60 mb-8">
                        <Link href="/" className="hover:text-[#D9A15B]">Home</Link>
                        <span>/</span>
                        <span className="text-[#2D1B33]">Contact & Enroll</span>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Get Started Today
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Enroll Now & Begin Your Preparation
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg">
                            Fill out the form below or contact us directly. Our team will guide you 
                            in choosing the right course for your UPSC/MPSC preparation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-20 container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Info & Benefits */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Card */}
                            <div className="bg-gradient-to-br from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-6 md:p-8 text-white">
                                <h3 className="text-xl font-bold mb-6 font-serif">Contact Information</h3>
                                
                                <div className="space-y-5">
                                    <a href="tel:+918668275251" className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D9A15B]/30 transition-colors">
                                            <Phone className="w-5 h-5 text-[#D9A15B]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60 mb-1">Call us</p>
                                            <p className="font-semibold text-lg group-hover:text-[#D9A15B] transition-colors">
                                                +91 8668275251
                                            </p>
                                        </div>
                                    </a>

                                    <a href="mailto:info@rajshreeias.com" className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D9A15B]/30 transition-colors">
                                            <Mail className="w-5 h-5 text-[#D9A15B]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60 mb-1">Email us</p>
                                            <p className="font-medium group-hover:text-[#D9A15B] transition-colors">
                                                info@rajshreeias.com
                                            </p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-[#D9A15B]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60 mb-1">Visit us</p>
                                            <p className="font-medium">Latur, Maharashtra, India</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-[#D9A15B]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60 mb-1">Office Hours</p>
                                            <p className="font-medium">Mon - Sat: 9 AM - 8 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-sm text-white/60 mb-4">Connect with us</p>
                                    <div className="flex gap-3">
                                        <a 
                                            href="https://www.instagram.com/rajashreesias" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E4405F] transition-colors"
                                        >
                                            <Instagram className="w-5 h-5 text-white" />
                                        </a>
                                        <a 
                                            href="https://t.me/rajashreesiasportal" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0088cc] transition-colors"
                                        >
                                            <Send className="w-5 h-5 text-white" />
                                        </a>
                                        <a 
                                            href="https://youtube.com/@rajashreesiasportal" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-colors"
                                        >
                                            <Youtube className="w-5 h-5 text-white" />
                                        </a>
                                        <a 
                                            href="https://wa.me/918668275251" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                                        >
                                            <MessageCircle className="w-5 h-5 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits Card */}
                            <div className="bg-white rounded-2xl p-6 border border-[#2D1B33]/10">
                                <h4 className="font-bold text-[#2D1B33] mb-4">Why Join Rajshree IAS?</h4>
                                <div className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center flex-shrink-0">
                                                <benefit.icon className="w-4 h-4 text-[#D9A15B]" />
                                            </div>
                                            <span className="text-sm text-[#2D1B33]/70">{benefit.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Free Demo CTA */}
                            <div className="bg-[#D9A15B]/10 rounded-2xl p-6 border border-[#D9A15B]/20 text-center">
                                <Calendar className="w-10 h-10 text-[#D9A15B] mx-auto mb-3" />
                                <h4 className="font-bold text-[#2D1B33] mb-2">Book a Free Demo Class</h4>
                                <p className="text-sm text-[#2D1B33]/60 mb-4">
                                    Experience our teaching methodology before enrolling
                                </p>
                                <a 
                                    href="tel:+918668275251"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call to Book
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#2D1B33]/10 shadow-sm">
                                <h3 className="text-xl font-bold text-[#2D1B33] mb-6 font-serif">
                                    Enquiry Form
                                </h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-[#2D1B33] mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-[#2D1B33]/10 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent transition-all"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#2D1B33] mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-[#2D1B33]/10 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent transition-all"
                                                placeholder="9876543210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#2D1B33] mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full px-4 py-3 rounded-xl border border-[#2D1B33]/10 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-[#2D1B33] mb-2">
                                                Interested Course <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                required
                                                value={formData.course}
                                                onChange={(e) => setFormData({...formData, course: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-[#2D1B33]/10 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent transition-all"
                                            >
                                                <option value="">Select a course</option>
                                                {courses.map((course) => (
                                                    <option key={course.value} value={course.value}>
                                                        {course.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#2D1B33] mb-2">
                                                Education Level
                                            </label>
                                            <select
                                                value={formData.educationLevel}
                                                onChange={(e) => setFormData({...formData, educationLevel: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-[#2D1B33]/10 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent transition-all"
                                            >
                                                <option value="">Select education level</option>
                                                <option value="graduate">Graduate</option>
                                                <option value="post-graduate">Post Graduate</option>
                                                <option value="final-year">Final Year Student</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#2D1B33] mb-2">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            className="w-full px-4 py-3 rounded-xl border border-[#2D1B33]/10 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent resize-none transition-all"
                                            placeholder="Any specific questions, your background, or preferred batch timing?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] text-white font-semibold hover:shadow-lg hover:shadow-[#2D1B33]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin h-5 w-5" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Enquiry"
                                        )}
                                    </button>

                                    <p className="text-xs text-center text-[#2D1B33]/50">
                                        By submitting, you agree to be contacted by our team regarding courses and updates.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
