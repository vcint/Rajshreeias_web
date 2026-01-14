import Link from "next/link";
import { Metadata } from "next";
import {
    FileQuestion, Download, Calendar, Target, BookOpen,
    CheckCircle, TrendingUp, Clock, Star, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
    title: "Previous Year Questions (PYQ) | Rajshree IAS Portal",
    description: "Comprehensive PYQ analysis for UPSC CSE prelims and mains. Topic-wise questions, answer keys, and detailed explanations.",
    keywords: "UPSC PYQ, previous year questions, UPSC prelims PYQ, UPSC mains PYQ, PYQ analysis",
};

const examYears = [
    {
        year: "2025",
        prelims: { questions: 100, solved: true },
        mains: { questions: 1750, solved: true },
        special: "First paper with new pattern"
    },
    {
        year: "2024",
        prelims: { questions: 100, solved: true },
        mains: { questions: 1750, solved: true },
        special: "Record highest cutoff"
    },
    {
        year: "2023",
        prelims: { questions: 100, solved: true },
        mains: { questions: 1750, solved: true },
        special: "Major syllabus revision"
    },
    {
        year: "2022",
        prelims: { questions: 100, solved: true },
        mains: { questions: 1750, solved: true },
        special: "COVID-19 affected schedule"
    },
    {
        year: "2021",
        prelims: { questions: 100, solved: true },
        mains: { questions: 1750, solved: true },
        special: "Digital transformation focus"
    }
];

const subjectWisePYQ = [
    {
        subject: "History",
        prelimsQuestions: 450,
        mainsQuestions: 320,
        topics: ["Ancient India", "Medieval India", "Modern India", "World History"],
        difficulty: "Medium"
    },
    {
        subject: "Geography",
        prelimsQuestions: 380,
        mainsQuestions: 290,
        topics: ["Physical Geography", "Human Geography", "Indian Geography", "Geomorphology"],
        difficulty: "Medium-High"
    },
    {
        subject: "Polity",
        prelimsQuestions: 520,
        mainsQuestions: 350,
        topics: ["Constitution", "Governance", "Rights", "Federalism"],
        difficulty: "High"
    },
    {
        subject: "Economy",
        prelimsQuestions: 340,
        mainsQuestions: 280,
        topics: ["Macroeconomics", "Microeconomics", "Planning", "International Trade"],
        difficulty: "High"
    },
    {
        subject: "Environment",
        prelimsQuestions: 280,
        mainsQuestions: 220,
        topics: ["Biodiversity", "Climate Change", "Conservation", "Pollution"],
        difficulty: "Medium"
    },
    {
        subject: "Science & Technology",
        prelimsQuestions: 320,
        mainsQuestions: 240,
        topics: ["Space Technology", "Biotechnology", "Defence Technology", "IT"],
        difficulty: "Medium-High"
    }
];

const features = [
    {
        icon: FileQuestion,
        title: "Complete Question Bank",
        description: "Access to all previous year questions from 2013 onwards with detailed solutions"
    },
    {
        icon: Target,
        title: "Topic-wise Organization",
        description: "Questions organized by topics and sub-topics for systematic preparation"
    },
    {
        icon: TrendingUp,
        title: "Trend Analysis",
        description: "Year-wise analysis of question patterns and frequently asked topics"
    },
    {
        icon: BookOpen,
        title: "Detailed Explanations",
        description: "Comprehensive explanations with diagrams, flowcharts, and references"
    }
];

const pyqStats = [
    { label: "Total Questions", value: "15,000+", icon: FileQuestion },
    { label: "Years Covered", value: "2013-2025", icon: Calendar },
    { label: "Subjects", value: "25+", icon: BookOpen },
    { label: "Success Rate", value: "95%", icon: TrendingUp }
];

export default function PYQResourcePage() {
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
                        <span className="text-[#2D1B33]">Previous Year Questions</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Master the Pattern
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Previous Year Questions
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Comprehensive PYQ analysis for UPSC CSE prelims and mains. Understand patterns,
                            practice questions, and boost your preparation with detailed solutions.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {pyqStats.map((stat, index) => (
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
                                    Access PYQ Bank
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Free Sample Papers
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
                            Comprehensive PYQ resources designed for serious UPSC preparation
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

                {/* Year-wise PYQ */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Year-wise Question Papers
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Complete collection of previous year question papers with solutions
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-[#2D1B33]/10 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#FAF9F6]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#2D1B33]">Year</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#2D1B33]">Prelims</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#2D1B33]">Mains</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#2D1B33]">Special Notes</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-[#2D1B33]">Download</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#2D1B33]/10">
                                    {examYears.map((exam, index) => (
                                        <tr key={index} className="hover:bg-[#FAF9F6]/50">
                                            <td className="px-6 py-4 text-sm font-medium text-[#2D1B33]">{exam.year}</td>
                                            <td className="px-6 py-4 text-sm text-[#2D1B33]/70">
                                                {exam.prelims.questions} Questions
                                                {exam.prelims.solved && <CheckCircle className="w-4 h-4 text-green-500 inline ml-1" />}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-[#2D1B33]/70">
                                                {exam.mains.questions} Questions
                                                {exam.mains.solved && <CheckCircle className="w-4 h-4 text-green-500 inline ml-1" />}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-[#2D1B33]/70">{exam.special}</td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="px-3 py-1 bg-[#D9A15B] text-white text-xs font-medium rounded hover:bg-[#c4923f] transition-colors">
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Subject-wise Analysis */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Subject-wise PYQ Analysis
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Detailed breakdown of questions by subject and topic
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjectWisePYQ.map((subject, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-[#2D1B33] font-serif">{subject.subject}</h3>
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
                                        <span className="text-[#2D1B33]/60">Prelims:</span>
                                        <span className="font-medium text-[#2D1B33]">{subject.prelimsQuestions} Qs</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">Mains:</span>
                                        <span className="font-medium text-[#2D1B33]">{subject.mainsQuestions} Qs</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs font-medium text-[#2D1B33]/70 mb-2">Key Topics:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {subject.topics.slice(0, 2).map((topic, i) => (
                                            <span key={i} className="text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-2 py-1 rounded">
                                                {topic}
                                            </span>
                                        ))}
                                        {subject.topics.length > 2 && (
                                            <span className="text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-2 py-1 rounded">
                                                +{subject.topics.length - 2} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button className="w-full py-2 bg-[#2D1B33] text-white text-sm font-medium rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                                    View Questions
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PYQ Strategy */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            PYQ Preparation Strategy
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Systematic approach to using previous year questions effectively
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                            <h3 className="text-xl font-bold text-[#2D1B33] font-serif mb-6">For Prelims</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#D9A15B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                                    <div>
                                        <h4 className="font-semibold text-[#2D1B33] mb-1">Topic-wise Practice</h4>
                                        <p className="text-sm text-[#2D1B33]/60">Solve questions topic by topic to identify weak areas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#D9A15B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                                    <div>
                                        <h4 className="font-semibold text-[#2D1B33] mb-1">Time-bound Tests</h4>
                                        <p className="text-sm text-[#2D1B33]/60">Practice full-length papers under exam conditions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#D9A15B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                                    <div>
                                        <h4 className="font-semibold text-[#2D1B33] mb-1">Error Analysis</h4>
                                        <p className="text-sm text-[#2D1B33]/60">Review mistakes and understand correct approaches</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                            <h3 className="text-xl font-bold text-[#2D1B33] font-serif mb-6">For Mains</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#D9A15B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                                    <div>
                                        <h4 className="font-semibold text-[#2D1B33] mb-1">Answer Writing Practice</h4>
                                        <p className="text-sm text-[#2D1B33]/60">Write answers for previous questions regularly</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#D9A15B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                                    <div>
                                        <h4 className="font-semibold text-[#2D1B33] mb-1">Model Answers Study</h4>
                                        <p className="text-sm text-[#2D1B33]/60">Compare with toppers' answers and official solutions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#D9A15B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                                    <div>
                                        <h4 className="font-semibold text-[#2D1B33] mb-1">Value Addition</h4>
                                        <p className="text-sm text-[#2D1B33]/60">Learn to add current affairs and examples to answers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Start Your PYQ Journey Today
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Access our comprehensive PYQ database and accelerate your UPSC preparation
                            with proven strategies and detailed solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Get Full Access
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Free PYQ Sample
                            </button>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            15,000+ questions • Detailed solutions • Regular updates
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}