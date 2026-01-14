import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Clock, Users, Award, CheckCircle, ArrowRight,
    Target, TrendingUp, Star, Calendar, FileText, Brain,
    Shield, Heart, Zap
} from "lucide-react";

export const metadata: Metadata = {
    title: "UPSC Civil Services (IAS/IPS) Course | Rajshree IAS Portal",
    description: "Comprehensive UPSC Civil Services preparation for IAS/IPS aspirants. Complete GS coverage, test series, mentorship, and interview guidance. Join our flagship program.",
    keywords: "UPSC CSE, IAS preparation, IPS coaching, civil services exam, UPSC foundation course, IAS Portal Latur",
};

const courseHighlights = [
    {
        icon: BookOpen,
        title: "Complete GS Syllabus",
        description: "Comprehensive coverage of General Studies papers I, II, III, IV with focus on conceptual clarity"
    },
    {
        icon: Target,
        title: "Prelims + Mains + Interview",
        description: "Integrated preparation covering all three stages of UPSC Civil Services Examination"
    },
    {
        icon: TrendingUp,
        title: "Regular Assessment",
        description: "Weekly tests, monthly mock exams, and personalized performance analysis"
    },
    {
        icon: Users,
        title: "Small Batch Size",
        description: "Limited to 30-40 students for personalized attention and doubt clearing"
    },
    {
        icon: Brain,
        title: "Answer Writing Practice",
        description: "Daily answer writing sessions with expert evaluation and feedback"
    },
    {
        icon: Shield,
        title: "Current Affairs Integration",
        description: "Daily current affairs analysis with prelims-mains linkage"
    }
];

const courseStructure = [
    {
        phase: "Foundation Phase (Months 1-4)",
        duration: "4 Months",
        topics: ["Ancient, Medieval & Modern History", "Geography (Physical & Human)", "Polity & Governance", "Economy Basics", "Environment & Ecology"],
        focus: "Building strong conceptual foundation"
    },
    {
        phase: "Intensive Phase (Months 5-8)",
        duration: "4 Months",
        topics: ["International Relations", "Science & Technology", "Internal Security", "Ethics & Integrity", "Disaster Management"],
        focus: "Advanced topics and integration"
    },
    {
        phase: "Revision & Practice (Months 9-12)",
        duration: "4 Months",
        topics: ["Comprehensive Revision", "Mock Tests", "Answer Writing", "Current Affairs", "Interview Preparation"],
        focus: "Consolidation and exam readiness"
    }
];

const faculty = [
    {
        name: "Dr. Rajesh Sharma",
        qualification: "PhD in Political Science, Former UPSC Mentor",
        experience: "15+ years",
        specialization: "Polity, Governance & International Relations"
    },
    {
        name: "Prof. Meera Patel",
        qualification: "MPhil History, Published Author",
        experience: "12+ years",
        specialization: "Ancient & Modern History, Art & Culture"
    },
    {
        name: "CA Vikram Singh",
        qualification: "Chartered Accountant, Economics Expert",
        experience: "10+ years",
        specialization: "Economy, Budget & Financial Systems"
    }
];

const successStories = [
    {
        name: "Priya Sharma",
        rank: "AIR 45",
        year: "2024",
        quote: "The structured approach and regular feedback helped me stay focused throughout the preparation journey."
    },
    {
        name: "Rahul Desai",
        rank: "AIR 89",
        year: "2023",
        quote: "Small batch size ensured personalized attention, which was crucial for my success."
    },
    {
        name: "Ananya Gupta",
        rank: "AIR 156",
        year: "2024",
        quote: "The current affairs integration and answer writing practice gave me the edge I needed."
    }
];

export default function UPSCCSEPage() {
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
                        <span className="text-[#2D1B33]">UPSC Civil Services</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Flagship Program
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            UPSC Civil Services (IAS/IPS)
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Comprehensive preparation for India's most prestigious examination. Join thousands of successful candidates
                            who started their journey with Rajshree IAS Portal.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">12</div>
                                <div className="text-sm text-[#2D1B33]/60">Months Duration</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">30-40</div>
                                <div className="text-sm text-[#2D1B33]/60">Students/Batch</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">85%</div>
                                <div className="text-sm text-[#2D1B33]/60">Success Rate</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">500+</div>
                                <div className="text-sm text-[#2D1B33]/60">Selections</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center justify-center gap-2">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-20 container mx-auto px-4">
                {/* Course Highlights */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Why Choose Our UPSC CSE Program?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Our comprehensive approach covers every aspect of UPSC preparation with proven results
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
                            Systematic progression through all stages of preparation
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
                            Learn from experienced educators and former UPSC mentors
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

                {/* Success Stories */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Success Stories
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Hear from our successful candidates
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

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Ready to Start Your IAS Journey?
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Join our next batch and take the first step towards becoming an IAS officer.
                            Limited seats available for February 2026 batch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <a href="tel:+918668275251" className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Call: +91 98765 43210
                            </a>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Next batch starts: February 15, 2026 • Admission closes: February 10, 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}