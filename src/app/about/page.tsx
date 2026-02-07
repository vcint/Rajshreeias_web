import { BookOpen, Users, Target, Award, GraduationCap, FileText, MessageSquare, Clock, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Rajashree's IAS - Best IAS Coaching Institute in Latur | UPSC & MPSC Preparation",
    description: "Discover Rajashree's IAS coaching institute in Latur - Maharashtra's leading IAS coaching center. Expert faculty, proven results, personalized mentorship. Quality UPSC coaching in Latur with dedicated support.",
    keywords: "IAS coaching Latur, UPSC coaching Latur, best IAS institute Latur, MPSC coaching Latur, civil services coaching Maharashtra, Rajashree's IAS about",
    openGraph: {
        title: "About Rajashree's IAS - Best IAS Coaching Institute in Latur",
        description: "Leading IAS coaching institute in Latur, Maharashtra. Expert faculty, personalized mentorship, proven success rate. Join Maharashtra's best UPSC preparation center.",
        url: "https://rajshreeias.com/about",
        siteName: "Rajashree's IAS Portal",
        images: [
            {
                url: "/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "Rajashree's IAS Coaching Institute Latur"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "About Rajashree's IAS - Best IAS Coaching Institute in Latur",
        description: "Leading IAS coaching institute in Latur, Maharashtra. Expert faculty, personalized mentorship, proven success rate.",
        images: ["/og-about.jpg"]
    },
    alternates: {
        canonical: "https://rajshreeias.com/about"
    }
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
                                About Rajashree's IAS Portal
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-6 leading-tight">
                                Best IAS Coaching Institute in Latur - 
                                <span className="text-[#D9A15B]"> Your Success Partner </span>
                            </h1>
                            <p className="text-lg text-[#2D1B33]/70 leading-relaxed mb-6">
                                Rajashree's IAS is Latur's leading coaching institute for UPSC Civil Services and MPSC preparation. 
                                We're Maharashtra's most trusted 
                                IAS coaching center. Join the best UPSC coaching in Latur for comprehensive exam preparation.
                            </p>
                            <p className="text-[#2D1B33]/70 leading-relaxed mb-8">
                                Our expert faculty with 10+ years experience, personalized mentorship, and proven teaching methodology 
                                have helped hundreds of students achieve their IAS dreams. We focus on conceptual clarity, regular 
                                assessments, and interview preparation to ensure your success in civil services examinations.
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
                                    To be Latur's premier IAS coaching institute, providing world-class UPSC and MPSC preparation 
                                    that makes civil services success accessible to every deserving aspirant in Maharashtra.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    We're committed to nurturing not just successful IAS candidates, but future leaders with 
                                    strong ethical foundation, comprehensive knowledge, and commitment to public service.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="p-8 bg-[#FAF9F6] rounded-2xl border border-[#2D1B33]/10">
                                <div className="w-14 h-14 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-6">
                                    <Award className="w-7 h-7 text-[#D9A15B]" />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-[#2D1B33] mb-4">Our Vision</h2>
                                <p className="text-[#2D1B33]/70 leading-relaxed mb-4">
                                    To be recognized as Maharashtra's best IAS coaching institute in Latur, setting the 
                                    gold standard for UPSC Civil Services Exam preparation with innovative teaching methods 
                                    and consistent success rates.
                                </p>
                                <p className="text-[#2D1B33]/70 leading-relaxed">
                                    We envision building a legacy of IAS toppers from Latur who will bring positive change 
                                    to Maharashtra and contribute significantly to India's development as ethical, capable administrators.
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

            {/* Faculty Section */}
            <section id="faculty" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Our Faculty
                        </p>
                        <h2 className="text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Meet Our Expert Faculty Team
                        </h2>
                        <p className="text-[#2D1B33]/60 text-lg">
                            Experienced educators with 10+ years in UPSC & MPSC coaching who have guided hundreds of successful candidates
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Faculty Card 1 - Rajashree */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#2D1B33]/10 hover:shadow-xl hover:border-[#D9A15B]/30 transition-all group">
                            <Image
                                src="/faculties/Rajashree.jpg"
                                alt="Prof. Rajashree Faculty Card"
                                width={400}
                                height={500}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Faculty Card 2 - Falguni */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#2D1B33]/10 hover:shadow-xl hover:border-[#D9A15B]/30 transition-all group">
                            <Image
                                src="/faculties/Falguni.jpg"
                                alt="Prof. Falguni Faculty Card"
                                width={400}
                                height={500}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Faculty Card 3 - Sameer */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#2D1B33]/10 hover:shadow-xl hover:border-[#D9A15B]/30 transition-all group">
                            <Image
                                src="/faculties/Sameer.jpg"
                                alt="Prof. Sameer Faculty Card"
                                width={400}
                                height={500}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Faculty Stats */}
                    <div className="mt-16 bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-serif font-bold text-center mb-8">Our Faculty Excellence</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-[#D9A15B] mb-2">15+</div>
                                <div className="text-white/70">Years Average Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#D9A15B] mb-2">500+</div>
                                <div className="text-white/70">Successful Students</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#D9A15B] mb-2">100%</div>
                                <div className="text-white/70">Updated Curriculum</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#D9A15B] mb-2">24/7</div>
                                <div className="text-white/70">Doubt Support</div>
                            </div>
                        </div>
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
                        Join Rajashree's IAS Portal and take the first step towards your dream of becoming 
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
