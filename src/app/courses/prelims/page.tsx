import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Clock, Users, Award, CheckCircle, ArrowRight,
    Target, TrendingUp, Star, Calendar, FileText, Brain,
    Shield, Heart, Zap, TestTube
} from "lucide-react";

export const metadata: Metadata = {
    title: "UPSC Prelims Intensive Course | Rajashree's IAS Portal",
    description: "Focused crash course for UPSC Prelims with extensive test practice and revision. 60+ mock tests, PYQ analysis, and CSAT preparation.",
    keywords: "UPSC prelims, prelims coaching, UPSC CSAT, prelims test series, UPSC mock tests, prelims preparation",
};

const courseHighlights = [
    {
        icon: TestTube,
        title: "60+ Mock Tests",
        description: "Extensive test series covering all topics with detailed analysis and solutions"
    },
    {
        icon: FileText,
        title: "PYQ Analysis",
        description: "In-depth analysis of previous year questions with trend identification"
    },
    {
        icon: Brain,
        title: "CSAT Preparation",
        description: "Complete coverage of CSAT paper including quantitative aptitude and reasoning"
    },
    {
        icon: Target,
        title: "Topic-wise Tests",
        description: "Subject-specific mock tests to identify strengths and weaknesses"
    },
    {
        icon: TrendingUp,
        title: "Performance Tracking",
        description: "Detailed performance analysis with improvement suggestions"
    },
    {
        icon: Shield,
        title: "Revision Sessions",
        description: "Quick revision of important topics and current affairs"
    }
];

const testSeries = [
    {
        name: "Foundation Test Series",
        tests: "20 Tests",
        duration: "Weeks 1-4",
        focus: "Basic concepts and fundamentals"
    },
    {
        name: "Subject-wise Tests",
        tests: "15 Tests",
        duration: "Weeks 5-8",
        focus: "Topic-specific preparation"
    },
    {
        name: "Full Length Mock Tests",
        tests: "25 Tests",
        duration: "Weeks 9-12",
        focus: "Exam simulation and time management"
    }
];

const studyMaterial = [
    "Comprehensive Study Notes",
    "Topic-wise Question Bank",
    "Current Affairs Monthly Magazine",
    "CSAT Practice Workbook",
    "Previous Year Papers (2015-2024)",
    "Quick Revision Notes",
    "Formula Sheets & Mnemonics"
];

const programFeatures = [
    {
        feature: "Comprehensive Coverage",
        description: "Complete syllabus coverage with regular assessments"
    },
    {
        feature: "Mock Test Series",
        description: "Regular practice tests following UPSC pattern"
    },
    {
        feature: "Expert Guidance",
        description: "Experienced faculty with proven teaching methodology"
    }
];

export default function PrelimsPage() {
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
                        <span className="text-[#2D1B33]">UPSC Prelims Intensive</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Crash Course Program
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            UPSC Prelims Intensive
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Focused preparation for UPSC Preliminary examination with extensive mock test practice.
                            Clear prelims in your first attempt with our proven methodology.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">3</div>
                                <div className="text-sm text-[#2D1B33]/60">Months Duration</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">50</div>
                                <div className="text-sm text-[#2D1B33]/60">Students/Batch</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">60+</div>
                                <div className="text-sm text-[#2D1B33]/60">Mock Tests</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">Expert</div>
                                <div className="text-sm text-[#2D1B33]/60">Faculty</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://razorpay.me/@rajshreeias/prelims" target="_blank" rel="noopener noreferrer">
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
                            Why Choose Our Prelims Program?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Intensive preparation designed specifically for prelims success
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

                {/* Test Series Structure */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Test Series Structure
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Systematic test practice throughout the course
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testSeries.map((series, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10 text-center">
                                <div className="w-12 h-12 rounded-xl bg-[#2D1B33] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    {series.name}
                                </h3>
                                <p className="text-sm text-[#D9A15B] font-medium mb-2">
                                    {series.tests} • {series.duration}
                                </p>
                                <p className="text-sm text-[#2D1B33]/60">
                                    {series.focus}
                                </p>
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
                            Comprehensive resources designed for prelims success
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {studyMaterial.map((material, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-[#2D1B33]/70">{material}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Program Features */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Program Features
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Key aspects of our comprehensive UPSC Prelims preparation program
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {programFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10 text-center">
                                <div className="w-12 h-12 rounded-full bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-6 h-6 text-[#D9A15B]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    {feature.feature}
                                </h3>
                                <p className="text-sm text-[#2D1B33]/70">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Faculty */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Expert Faculty Team
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Learn from experienced UPSC mentors with 15+ years of teaching expertise
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D1B33] to-[#4a2d4f] flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    CSAT Experts
                                </h3>
                                <p className="text-sm text-[#2D1B33]/70">
                                    Specialized faculty for quantitative aptitude, reasoning, and comprehension skills
                                </p>
                            </div>
                            <div>
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D1B33] to-[#4a2d4f] flex items-center justify-center mx-auto mb-4">
                                    <FileText className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    GS Specialists
                                </h3>
                                <p className="text-sm text-[#2D1B33]/70">
                                    Subject matter experts covering all areas of General Studies for Prelims
                                </p>
                            </div>
                            <div>
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D1B33] to-[#4a2d4f] flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    Test Series Experts
                                </h3>
                                <p className="text-sm text-[#2D1B33]/70">
                                    Experienced faculty for mock tests, performance analysis, and strategy guidance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Ready to Clear Prelims?
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Join our intensive prelims program and clear UPSC Prelims in your first attempt.
                            Contact us for course details and admission.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <a href="tel:+918668275251" className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Call: +91 86682 75251
                            </a>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Next batch starts: April 15, 2026 • Admission closes: April 10, 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}