import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Clock, Users, Award, CheckCircle, ArrowRight,
    Target, TrendingUp, Star, Calendar, FileText, Brain,
    Shield, Heart, Zap, Map, ScrollText
} from "lucide-react";

export const metadata: Metadata = {
    title: "History Optional Complete Course | Rajshree IAS Portal",
    description: "In-depth coverage of History optional with focus on answer writing and map work. Ancient, Medieval & Modern History with PYQ discussion.",
    keywords: "History optional, UPSC History optional, History optional coaching, UPSC optional subject, History preparation",
};

const courseHighlights = [
    {
        icon: ScrollText,
        title: "Complete Syllabus Coverage",
        description: "Ancient, Medieval & Modern History with comprehensive coverage of all topics"
    },
    {
        icon: FileText,
        title: "Answer Writing Practice",
        description: "Regular answer writing sessions with personalized feedback and evaluation"
    },
    {
        icon: Map,
        title: "Map Practice Sessions",
        description: "Dedicated map marking and location identification practice"
    },
    {
        icon: Target,
        title: "PYQ Discussion",
        description: "Detailed discussion of previous year questions with model answers"
    },
    {
        icon: Brain,
        title: "Conceptual Clarity",
        description: "Focus on understanding concepts rather than rote learning"
    },
    {
        icon: TrendingUp,
        title: "Performance Tracking",
        description: "Regular assessments and progress monitoring"
    }
];

const syllabusStructure = [
    {
        paper: "Paper I: Ancient & Medieval History",
        topics: ["Prehistoric Cultures", "Indus Valley Civilization", "Vedic Period", "Mauryan Empire", "Delhi Sultanate", "Mughal Empire"],
        duration: "4 Months"
    },
    {
        paper: "Paper II: Modern History",
        topics: ["British Expansion", "1857 Revolt", "National Movement", "Constitutional Development", "World Wars", "Post-Independence"],
        duration: "4 Months"
    }
];

const studyMaterial = [
    "Comprehensive Notes (Ancient History)",
    "Comprehensive Notes (Medieval History)",
    "Comprehensive Notes (Modern History)",
    "Map Work Manual",
    "Previous Year Questions (2015-2024)",
    "Model Answers Booklet",
    "Timeline Charts & Flowcharts",
    "Practice Question Bank"
];

const faculty = [
    {
        name: "Dr. Meera Sharma",
        qualification: "PhD Ancient History, Published Author",
        experience: "15+ years",
        specialization: "Ancient & Medieval History"
    },
    {
        name: "Prof. Rajesh Kumar",
        qualification: "MA Modern History, UPSC Mentor",
        experience: "12+ years",
        specialization: "Modern Indian History"
    },
    {
        name: "Ms. Priya Singh",
        qualification: "MA History, Map Work Expert",
        experience: "8+ years",
        specialization: "Map Practice & Answer Writing"
    }
];

const successStories = [
    {
        name: "Arun Kumar",
        marks: "315/500",
        rank: "AIR 23",
        year: "2024",
        quote: "The conceptual clarity and answer writing practice helped me score high in History optional."
    },
    {
        name: "Sneha Patel",
        marks: "298/500",
        rank: "AIR 67",
        year: "2023",
        quote: "Regular map practice and PYQ discussion were crucial for my preparation."
    },
    {
        name: "Rahul Singh",
        marks: "285/500",
        rank: "AIR 89",
        year: "2024",
        quote: "The structured approach made complex historical events easy to understand."
    }
];

export default function HistoryOptionalPage() {
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
                        <span className="text-[#2D1B33]">History Optional</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Optional Subject Program
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            History Optional Complete
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Comprehensive preparation for History optional with focus on answer writing, map work,
                            and conceptual understanding. Join aspirants who secured top ranks with History optional.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">8</div>
                                <div className="text-sm text-[#2D1B33]/60">Months Duration</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">25</div>
                                <div className="text-sm text-[#2D1B33]/60">Students/Batch</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">300+</div>
                                <div className="text-sm text-[#2D1B33]/60">Avg Optional Marks</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">85%</div>
                                <div className="text-sm text-[#2D1B33]/60">Success Rate</div>
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
                                Download Syllabus
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
                            Why Choose History Optional?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive preparation with focus on scoring high marks
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

                {/* Syllabus Structure */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Syllabus Structure
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Complete coverage of UPSC History optional syllabus
                        </p>
                    </div>

                    <div className="space-y-8">
                        {syllabusStructure.map((paper, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="lg:w-1/3">
                                        <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                            {paper.paper}
                                        </h3>
                                        <p className="text-sm text-[#D9A15B] font-medium">{paper.duration}</p>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <div className="flex flex-wrap gap-2">
                                            {paper.topics.map((topic, i) => (
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

                {/* Study Material */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Study Material Included
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive resources designed for History optional success
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {studyMaterial.map((material, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-[#2D1B33]/70">{material}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Faculty */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Meet Your Faculty
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Learn from History experts and toppers
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
                            Hear from our History optional toppers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Star className="w-5 h-5 text-[#D9A15B] fill-[#D9A15B]" />
                                    <span className="text-sm font-bold text-[#D9A15B]">{story.marks}</span>
                                    <span className="text-xs text-[#2D1B33]/60">({story.rank})</span>
                                </div>
                                <p className="text-sm text-[#2D1B33]/70 italic mb-4 leading-relaxed">
                                    "{story.quote}"
                                </p>
                                <p className="text-sm font-semibold text-[#2D1B33]">
                                    {story.name} • {story.year}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Ready to Choose History Optional?
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Join our comprehensive History optional program and score 300+ marks.
                            Next batch starts in February 2026.
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