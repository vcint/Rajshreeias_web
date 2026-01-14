import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Download, FileText, Brain, Target,
    CheckCircle, Clock, Star, ArrowRight, PenTool
} from "lucide-react";

export const metadata: Metadata = {
    title: "Study Notes | Rajshree IAS Portal",
    description: "Comprehensive study notes for UPSC CSE preparation. Topic-wise notes, mind maps, flowcharts, and revision materials.",
    keywords: "UPSC study notes, UPSC notes, revision notes, mind maps, UPSC preparation notes",
};

const subjects = [
    {
        name: "Ancient Indian History",
        chapters: 12,
        pages: 180,
        features: ["Timeline Charts", "Dynasty Maps", "Archaeological Sites"],
        difficulty: "Medium",
        completion: 95
    },
    {
        name: "Modern Indian History",
        chapters: 15,
        pages: 220,
        features: ["Freedom Struggle", "Constitutional Development", "Social Reforms"],
        difficulty: "High",
        completion: 92
    },
    {
        name: "Geography",
        chapters: 18,
        pages: 250,
        features: ["World Maps", "Climate Diagrams", "Economic Geography"],
        difficulty: "Medium-High",
        completion: 88
    },
    {
        name: "Indian Polity",
        chapters: 14,
        pages: 200,
        features: ["Constitution Flowcharts", "Amendment Analysis", "Case Studies"],
        difficulty: "High",
        completion: 96
    },
    {
        name: "Economy",
        chapters: 16,
        pages: 240,
        features: ["Budget Analysis", "Economic Surveys", "Policy Frameworks"],
        difficulty: "High",
        completion: 90
    },
    {
        name: "Environment & Ecology",
        chapters: 10,
        pages: 160,
        features: ["Biodiversity Maps", "Climate Change Data", "Conservation Strategies"],
        difficulty: "Medium",
        completion: 93
    }
];

const noteTypes = [
    {
        type: "Comprehensive Notes",
        description: "Detailed chapter-wise notes covering entire syllabus",
        format: "PDF + Editable",
        pages: "2000+",
        icon: BookOpen
    },
    {
        type: "Mind Maps",
        description: "Visual learning tools for quick revision",
        format: "PDF + PNG",
        pages: "150+",
        icon: Brain
    },
    {
        type: "Flowcharts",
        description: "Process and relationship diagrams",
        format: "PDF + Editable",
        pages: "100+",
        icon: Target
    },
    {
        type: "Quick Revision Notes",
        description: "Condensed notes for last-minute revision",
        format: "PDF + Word",
        pages: "500+",
        icon: Clock
    }
];

const features = [
    {
        icon: BookOpen,
        title: "Comprehensive Coverage",
        description: "Complete syllabus coverage with detailed explanations and examples"
    },
    {
        icon: Brain,
        title: "Visual Learning",
        description: "Mind maps, flowcharts, and diagrams for better understanding"
    },
    {
        icon: Target,
        title: "Exam-Oriented",
        description: "Focused on UPSC pattern with important topics highlighted"
    },
    {
        icon: PenTool,
        title: "Regular Updates",
        description: "Updated regularly with latest developments and current affairs"
    }
];

const stats = [
    { label: "Total Pages", value: "3500+", icon: FileText },
    { label: "Subjects", value: "25+", icon: BookOpen },
    { label: "Mind Maps", value: "150+", icon: Brain },
    { label: "Downloads", value: "50K+", icon: Download }
];

export default function NotesResourcePage() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-white to-[#FAF9F6] pt-8 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60 mb-8">
                        <Link href="/" className="hover:text-[#D9A15B]">Home</Link>
                        <span>/</span>
                        <Link href="/resources" className="hover:text-[#D9A15B]">Resources</Link>
                        <span>/</span>
                        <span className="text-[#2D1B33]">Study Notes</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Comprehensive Study Material
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Study Notes
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Comprehensive study notes designed for UPSC CSE preparation. Topic-wise notes,
                            mind maps, flowcharts, and revision materials to accelerate your learning.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                    <div className="w-8 h-8 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-2">
                                        <stat.icon className="w-4 h-4 text-[#D9A15B]" />
                                    </div>
                                    <div className="text-2xl font-bold text-[#2D1B33]">{stat.value}</div>
                                    <div className="text-sm text-[#2D1B33]/60">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center justify-center gap-2">
                                    Access All Notes
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Free Sample Notes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-20 container mx-auto px-4">
                {/* Features */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            What You Get
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive study materials designed for effective UPSC preparation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10 text-center">
                                <div className="w-12 h-12 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-[#D9A15B]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#2D1B33]/60">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note Types */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Types of Study Materials
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Different formats to cater to various learning styles
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {noteTypes.map((noteType, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center flex-shrink-0">
                                        <noteType.icon className="w-6 h-6 text-[#D9A15B]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                            {noteType.type}
                                        </h3>
                                        <p className="text-sm text-[#2D1B33]/60 mb-3">
                                            {noteType.description}
                                        </p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[#2D1B33]/70">
                                                <strong>Format:</strong> {noteType.format}
                                            </span>
                                            <span className="text-[#2D1B33]/70">
                                                <strong>Pages:</strong> {noteType.pages}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subject-wise Notes */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Subject-wise Study Notes
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Detailed notes for each subject with comprehensive coverage
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-[#2D1B33] font-serif">{subject.name}</h3>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                        subject.difficulty === 'High' ? 'bg-red-100 text-red-700' :
                                        subject.difficulty === 'Medium-High' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-green-100 text-green-700'
                                    }`}>
                                        {subject.difficulty}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">Chapters:</span>
                                        <span className="font-medium text-[#2D1B33]">{subject.chapters}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">Pages:</span>
                                        <span className="font-medium text-[#2D1B33]">{subject.pages}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">Completion:</span>
                                        <span className="font-medium text-[#2D1B33]">{subject.completion}%</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs font-medium text-[#2D1B33]/70 mb-2">Key Features:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {subject.features.map((feature, i) => (
                                            <span key={i} className="text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-2 py-1 rounded">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 bg-[#2D1B33] text-white text-sm font-medium rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                                        Download
                                    </button>
                                    <button className="px-3 py-2 border border-[#2D1B33]/20 text-[#2D1B33] text-sm font-medium rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Study Plan */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            How to Use These Notes Effectively
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Systematic approach to maximize your learning from study notes
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-[#D9A15B]">1</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">Read & Understand</h3>
                                <p className="text-sm text-[#2D1B33]/60">
                                    Go through comprehensive notes thoroughly, highlighting important points
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-[#D9A15B]">2</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">Mind Map Creation</h3>
                                <p className="text-sm text-[#2D1B33]/60">
                                    Create your own mind maps and flowcharts for better retention
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-[#D9A15B]">3</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">Regular Revision</h3>
                                <p className="text-sm text-[#2D1B33]/60">
                                    Use quick revision notes for regular revision and answer writing practice
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Start Learning with Quality Notes
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Access our comprehensive study notes collection and accelerate your UPSC preparation
                            with structured, exam-oriented materials.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Get All Notes
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Free Notes Sample
                            </button>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            3500+ pages • Regular updates • Multiple formats • Lifetime access
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}