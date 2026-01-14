import { BookOpen, Users, Target, Award, GraduationCap, FileText, MessageSquare, Clock, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Rajshree IAS Portal - Best UPSC and MPSC coaching institute in Latur. Expert faculty, small batches, and personalized mentorship for civil services aspirants.",
};

const values = [
    {
        icon: BookOpen,
        title: "Conceptual Clarity",
        description: "We focus on building strong fundamentals rather than rote memorization. Our teaching methodology ensures deep understanding of concepts."
    },
    {
        icon: Users,
        title: "Personal Attention",
        description: "Small batch sizes of 30-40 students ensure every student gets individual guidance and their doubts are addressed promptly."
    },
    {
        icon: Target,
        title: "Goal-Oriented Approach",
        description: "Structured preparation aligned with exam patterns, current trends, and UPSC/MPSC requirements for maximum effectiveness."
    },
    {
        icon: Award,
        title: "Quality Education",
        description: "Experienced faculty with deep subject expertise committed to your success in civil services examinations."
    }
];

const features = [
    { icon: GraduationCap, title: "Expert Faculty", desc: "Experienced teachers with proven track record" },
    { icon: FileText, title: "Comprehensive Material", desc: "Updated study notes and current affairs compilations" },
    { icon: MessageSquare, title: "Doubt Sessions", desc: "Regular one-on-one doubt clearing sessions" },
    { icon: Clock, title: "Flexible Batches", desc: "Morning, evening, and weekend batch options" },
];

export default function AboutPage() {
    return (
        <div className="bg-[#FAF9F6]">
            {/* Hero Section */}
            <section className="pt-8 pb-16 bg-gradient-to-b from-white to-[#FAF9F6]">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60 mb-8">
                        <Link href="/" className="hover:text-[#D9A15B]">Home</Link>
                        <span>/</span>
                        <span className="text-[#2D1B33]">About Us</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                                About Rajshree IAS Portal
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-6 leading-tight">
                                Your Partner in 
                                <span className="text-[#D9A15B]"> Civil Services </span>
                                Success
                            </h1>
                            <p className="text-lg text-[#2D1B33]/70 leading-relaxed mb-6">
                                Rajshree IAS Portal is a premier coaching institute in Latur dedicated to preparing 
                                aspirants for UPSC Civil Services, MPSC, and other competitive examinations. 
                                We believe in quality over quantity, focusing on building a strong foundation 
                                for every student.
                            </p>
                            <p className="text-[#2D1B33]/70 leading-relaxed mb-8">
                                Our experienced faculty, comprehensive study material, and personalized mentorship 
                                approach sets us apart. We don't just teach - we mentor, guide, and support 
                                our students throughout their preparation journey.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link href="/enroll">
                                    <button className="px-6 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors cursor-pointer">
                                        Join Us Today
                                    </button>
                                </Link>
                                <Link href="/courses">
                                    <button className="px-6 py-3 border-2 border-[#2D1B33]/20 text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors cursor-pointer">
                                        View Courses
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="p-5 bg-white rounded-xl border border-[#2D1B33]/10 hover:shadow-lg hover:border-[#D9A15B]/30 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-[#D9A15B]" />
                                    </div>
                                    <h3 className="font-semibold text-[#2D1B33] mb-1">{feature.title}</h3>
                                    <p className="text-sm text-[#2D1B33]/60">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="p-8 bg-gradient-to-br from-[#2D1B33] to-[#4a2d4f] rounded-2xl text-white">
                                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-[#D9A15B]" />
                                </div>
                                <h2 className="text-2xl font-serif font-bold mb-4">Our Mission</h2>
                                <p className="text-white/80 leading-relaxed mb-4">
                                    To provide accessible, high-quality civil services coaching that empowers 
                                    aspirants from all backgrounds to achieve their dream of serving the nation.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    We are committed to nurturing not just successful candidates, but responsible 
                                    future administrators with strong ethical values and comprehensive knowledge.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="p-8 bg-[#FAF9F6] rounded-2xl border border-[#2D1B33]/10">
                                <div className="w-14 h-14 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-6">
                                    <Award className="w-7 h-7 text-[#D9A15B]" />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-[#2D1B33] mb-4">Our Vision</h2>
                                <p className="text-[#2D1B33]/70 leading-relaxed mb-4">
                                    To become a leading institution for civil services preparation in Maharashtra, 
                                    known for our student-centric approach and consistent results.
                                </p>
                                <p className="text-[#2D1B33]/70 leading-relaxed">
                                    We envision creating a community of well-prepared, ethically grounded civil 
                                    servants who will contribute meaningfully to the nation's progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16 bg-[#FAF9F6]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            What We Offer
                        </p>
                        <h2 className="text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Comprehensive Coaching for Civil Services
                        </h2>
                        <p className="text-[#2D1B33]/60 text-lg">
                            Everything you need to succeed in UPSC and MPSC examinations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {values.map((value) => (
                            <div 
                                key={value.title}
                                className="p-6 rounded-xl bg-white border border-[#2D1B33]/10 hover:shadow-lg hover:border-[#D9A15B]/30 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-5 group-hover:bg-[#D9A15B]/20 transition-colors">
                                    <value.icon className="w-7 h-7 text-[#D9A15B]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#2D1B33] mb-3 font-serif">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-[#2D1B33]/60 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                                    Our Approach
                                </p>
                                <h2 className="text-3xl font-serif font-bold text-[#2D1B33] mb-6">
                                    How We Help You Succeed
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        "Structured curriculum designed as per latest UPSC/MPSC syllabus",
                                        "Regular tests and mock exams with detailed performance analysis",
                                        "Daily current affairs sessions with newspaper analysis",
                                        "Answer writing practice with personalized feedback",
                                        "One-on-one mentorship sessions for individual guidance",
                                        "Small batch sizes ensuring personal attention",
                                        "Comprehensive study material and notes",
                                        "Doubt clearing sessions after every class"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-[#2D1B33]/70">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-[#2D1B33] rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-serif font-bold mb-6">Visit Our Center</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-[#D9A15B] flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium">Our Location</p>
                                            <p className="text-white/70 text-sm">Latur, Maharashtra, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-5 h-5 text-[#D9A15B] flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium">Call Us</p>
                                            <a href="tel:+918668275251" className="text-white/70 text-sm hover:text-[#D9A15B]">
                                                +91 8668275251
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-5 h-5 text-[#D9A15B] flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium">Email Us</p>
                                            <a href="mailto:info@rajshreeias.com" className="text-white/70 text-sm hover:text-[#D9A15B]">
                                                info@rajshreeias.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-5 h-5 text-[#D9A15B] flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium">Timings</p>
                                            <p className="text-white/70 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/enroll">
                                    <button className="w-full py-3 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors cursor-pointer">
                                        Book a Free Demo Class
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                        Ready to Start Your Civil Services Journey?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
                        Join Rajshree IAS Portal and take the first step towards your dream of becoming 
                        an IAS/IPS officer. Our experienced faculty and proven methodology will guide you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/enroll">
                            <button className="px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors cursor-pointer">
                                Enroll Now
                            </button>
                        </Link>
                        <Link href="/courses">
                            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 cursor-pointer">
                                Explore Courses
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
