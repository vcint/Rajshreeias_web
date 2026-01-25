import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Clock, Users, Award, CheckCircle, ArrowRight,
    Target, TrendingUp, Star, Calendar, FileText, Brain,
    Shield, Heart, Zap, MapPin
} from "lucide-react";

export const metadata: Metadata = {
    title: "MPSC State Services Course | Rajashree IAS Portal",
    description: "Comprehensive MPSC State Services preparation for Maharashtra PSC aspirants. Complete coverage of all papers with Maharashtra-specific content and Marathi medium support.",
    keywords: "MPSC coaching, Maharashtra PSC, state services exam, MPSC preparation, MPSC Portal Latur, state civil services",
};

const courseHighlights = [
    {
        icon: MapPin,
        title: "Maharashtra Focus",
        description: "Special emphasis on Maharashtra history, geography, polity, and current affairs"
    },
    {
        icon: BookOpen,
        title: "Bilingual Teaching",
        description: "Classes available in both English and Marathi medium for better understanding"
    },
    {
        icon: Target,
        title: "Complete Syllabus Coverage",
        description: "Comprehensive coverage of all MPSC papers with focus on exam pattern"
    },
    {
        icon: Users,
        title: "Small Batch Size",
        description: "Limited to 30-40 students for personalized attention and doubt clearing"
    },
    {
        icon: Brain,
        title: "Answer Writing Practice",
        description: "Regular answer writing sessions with evaluation and feedback"
    },
    {
        icon: Shield,
        title: "Mock Tests",
        description: "Regular mock tests and performance analysis for exam readiness"
    }
];

const courseStructure = [
    {
        phase: "Foundation Phase (Months 1-3)",
        duration: "3 Months",
        topics: ["Marathi Grammar & Comprehension", "General Knowledge", "History of Maharashtra", "Geography of Maharashtra"],
        focus: "Building strong foundation in state-specific subjects"
    },
    {
        phase: "Intensive Phase (Months 4-7)",
        duration: "4 Months",
        topics: ["General Studies I, II, III", "Current Affairs", "Marathi Essay Writing", "Interview Preparation"],
        focus: "Comprehensive exam preparation"
    },
    {
        phase: "Revision & Practice (Months 8-10)",
        duration: "3 Months",
        topics: ["Mock Tests", "Previous Year Papers", "Answer Writing", "Interview Practice"],
        focus: "Final preparation and exam readiness"
    }
];

const faculty = [
    {
        name: "Dr. Sunil Deshmukh",
        qualification: "PhD in Maharashtra History, Former MPSC Faculty",
        experience: "12+ years",
        specialization: "Maharashtra History & Polity"
    },
    {
        name: "Prof. Priya Kulkarni",
        qualification: "MA Marathi Literature, Language Expert",
        experience: "10+ years",
        specialization: "Marathi Grammar & Essay Writing"
    },
    {
        name: "Shri Rajesh Pawar",
        qualification: "MPSC Topper, Administrative Officer",
        experience: "8+ years",
        specialization: "Current Affairs & Interview Guidance"
    }
];

// const successStories = [
//     {
//         name: "Sneha Patil",
//         rank: "MPSC Rank 23",
//         year: "2024",
//         quote: "The Maharashtra-specific content and Marathi medium support were invaluable for my preparation."
//     },
//     {
//         name: "Vikram Jadhav",
//         rank: "MPSC Rank 45",
//         year: "2023",
//         quote: "Regular mock tests and personalized feedback helped me improve consistently."
//     },
//     {
//         name: "Kavita Sharma",
//         rank: "MPSC Rank 67",
//         year: "2024",
//         quote: "The bilingual approach made complex topics much easier to understand."
//     }
// ];

export default function MPSCPage() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-white to-[#FAF9F6] pt-8 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60 mb-8">
                        <Link href="/" className="hover:text-[#D9A15B]">Home</Link>
                        <span>/</span>
                        <Link href="/courses" className="hover:text-[#D9A15B]">Courses</Link>
                        <span>/</span>
                        <span className="text-[#2D1B33]">MPSC State Services</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Maharashtra PSC Program
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            MPSC State Services Complete
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Comprehensive preparation for Maharashtra Public Service Commission examinations.
                            Join aspirants who secured top ranks in MPSC with our proven methodology.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">10</div>
                                <div className="text-sm text-[#2D1B33]/60">Months Duration</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">30-40</div>
                                <div className="text-sm text-[#2D1B33]/60">Students/Batch</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">78%</div>
                                <div className="text-sm text-[#2D1B33]/60">Success Rate</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">300+</div>
                                <div className="text-sm text-[#2D1B33]/60">MPSC Selections</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://razorpay.me/@rajshreeias/mpsc" target="_blank" rel="noopener noreferrer">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Buy Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </a>
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                    Free Counseling
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-20 container mx-auto px-4">
                {/* Course Highlights */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Why Choose Our MPSC Program?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Specialized preparation for Maharashtra PSC with state-specific focus
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courseHighlights.map((highlight, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mb-4">
                                    <highlight.icon className="w-6 h-6 text-[#D9A15B]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    {highlight.title}
                                </h3>
                                <p className="text-sm text-[#2D1B33]/60 leading-relaxed">
                                    {highlight.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Course Structure */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Course Structure
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Systematic approach to MPSC preparation
                        </p>
                    </div>

                    <div className="space-y-6">
                        {courseStructure.map((phase, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                    <div className="lg:w-1/3">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-[#2D1B33] text-white flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-lg font-bold text-[#2D1B33] font-serif">
                                                {phase.phase}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-[#D9A15B] font-medium">{phase.duration}</p>
                                        <p className="text-sm text-[#2D1B33]/60 mt-1">{phase.focus}</p>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <div className="flex flex-wrap gap-2">
                                            {phase.topics.map((topic, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-3 py-1 rounded-full">
                                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Faculty */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Meet Your Faculty
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Learn from experienced MPSC educators and toppers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {faculty.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10 text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D1B33] to-[#4a2d4f] flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-[#D9A15B] font-medium mb-2">
                                    {member.qualification}
                                </p>
                                <p className="text-sm text-[#2D1B33]/60 mb-3">
                                    {member.experience} Experience
                                </p>
                                <p className="text-sm text-[#2D1B33]/70">
                                    {member.specialization}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Stories - Commented out for new institute */}
                {/*
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Success Stories
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Hear from our MPSC toppers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Star className="w-5 h-5 text-[#D9A15B] fill-[#D9A15B]" />
                                    <span className="text-sm font-bold text-[#D9A15B]">{story.rank}</span>
                                    <span className="text-xs text-[#2D1B33]/60">({story.year})</span>
                                </div>
                                <p className="text-sm text-[#2D1B33]/70 italic mb-4 leading-relaxed">
                                    "{story.quote}"
                                </p>
                                <p className="text-sm font-semibold text-[#2D1B33]">
                                    {story.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                */}

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Ready to Join MPSC Preparation?
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Start your journey towards becoming a Maharashtra government officer.
                            Limited seats available for March 2026 batch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://razorpay.me/@rajshreeias/mpsc" target="_blank" rel="noopener noreferrer">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Buy Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </a>
                            <a href="tel:+918668275251" className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Call: +91 86682 75251
                            </a>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Next batch starts: March 15, 2026 • Admission closes: March 10, 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}