import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Clock, Users, Award, CheckCircle, ArrowRight,
    Target, TrendingUp, Star, Calendar, FileText, Brain,
    Shield, Heart, Zap, Newspaper
} from "lucide-react";

export const metadata: Metadata = {
    title: "Current Affairs Yearly Program | Rajshree IAS Portal",
    description: "Daily current affairs analysis with monthly compilations and prelims-mains integration. Stay updated with The Hindu, Indian Express, and PIB.",
    keywords: "current affairs UPSC, daily current affairs, UPSC current affairs, current affairs analysis, UPSC preparation",
};

const courseHighlights = [
    {
        icon: Newspaper,
        title: "Daily The Hindu Analysis",
        description: "Comprehensive analysis of The Hindu newspaper with prelims-mains linkages and key pointers"
    },
    {
        icon: FileText,
        title: "Monthly Magazine",
        description: "Consolidated monthly current affairs magazine with topic-wise organization"
    },
    {
        icon: Target,
        title: "Weekly Quiz",
        description: "Weekly current affairs quiz with detailed explanations and performance tracking"
    },
    {
        icon: Brain,
        title: "Prelims MCQs",
        description: "Topic-wise MCQs for prelims practice with detailed explanations"
    },
    {
        icon: TrendingUp,
        title: "Mains Integration",
        description: "Current affairs linkage with static syllabus for comprehensive mains preparation"
    },
    {
        icon: Shield,
        title: "Year-round Access",
        description: "Complete access to current affairs content throughout the year"
    }
];

const programStructure = [
    {
        month: "January - March",
        focus: "Budget, Economic Survey, and Union Budget analysis",
        deliverables: ["Daily News Analysis", "Weekly Quiz", "Monthly Magazine", "Budget Special Issue"]
    },
    {
        month: "April - June",
        focus: "Pre-monsoon session and international developments",
        deliverables: ["Daily Analysis", "Weekly Quiz", "Monthly Magazine", "International Relations Focus"]
    },
    {
        month: "July - September",
        focus: "Monsoon session and contemporary issues",
        deliverables: ["Daily Analysis", "Weekly Quiz", "Monthly Magazine", "Policy Analysis"]
    },
    {
        month: "October - December",
        focus: "Winter session and year-end review",
        deliverables: ["Daily Analysis", "Weekly Quiz", "Monthly Magazine", "Yearly Compilation"]
    }
];

const studyMaterial = [
    "Daily Current Affairs Digest",
    "Weekly Current Affairs Quiz",
    "Monthly Current Affairs Magazine",
    "Topic-wise MCQ Bank",
    "Budget & Economic Survey Analysis",
    "International Relations Updates",
    "Government Schemes & Policies",
    "Important Committees & Commissions",
    "Person in News",
    "State Current Affairs",
    "Maps & Diagrams",
    "Infographics & Flowcharts"
];

const faculty = [
    {
        name: "Dr. Meera Kapoor",
        qualification: "PhD International Relations, Current Affairs Expert",
        experience: "12+ years",
        specialization: "International Relations & Foreign Policy"
    },
    {
        name: "Shri Rajan Verma",
        qualification: "MA Economics, Budget Analyst",
        experience: "10+ years",
        specialization: "Economy & Budget Analysis"
    },
    {
        name: "Ms. Priya Jain",
        qualification: "MA Political Science, Polity Expert",
        experience: "8+ years",
        specialization: "Governance & Polity Updates"
    }
];

const successMetrics = [
    {
        metric: "Content Coverage",
        value: "98%",
        description: "98% coverage of UPSC relevant current affairs"
    },
    {
        metric: "Student Satisfaction",
        value: "4.8/5",
        description: "Average rating from enrolled students"
    },
    {
        metric: "Prelims Success Rate",
        value: "89%",
        description: "Students who cleared prelims using our current affairs"
    }
];

export default function CurrentAffairsPage() {
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
                        <span className="text-[#2D1B33]">Current Affairs Program</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Year-round Current Affairs Program
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Current Affairs Yearly Program
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Stay ahead in your UPSC preparation with comprehensive current affairs coverage.
                            Daily analysis, monthly magazines, and integrated prelims-mains preparation.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">12</div>
                                <div className="text-sm text-[#2D1B33]/60">Months Duration</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">365</div>
                                <div className="text-sm text-[#2D1B33]/60">Daily Updates</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">52</div>
                                <div className="text-sm text-[#2D1B33]/60">Weekly Quizzes</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">89%</div>
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
                                Free Trial (7 Days)
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
                            Why Choose Our Current Affairs Program?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive coverage with integrated prelims-mains approach
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

                {/* Program Structure */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Quarterly Program Structure
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Thematic coverage aligned with parliamentary sessions
                        </p>
                    </div>

                    <div className="space-y-6">
                        {programStructure.map((quarter, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="lg:w-1/3">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-[#2D1B33] text-white flex items-center justify-center font-bold text-sm">
                                                Q{index + 1}
                                            </div>
                                            <h3 className="text-lg font-bold text-[#2D1B33] font-serif">
                                                {quarter.month}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-[#D9A15B] font-medium">{quarter.focus}</p>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <div className="flex flex-wrap gap-2">
                                            {quarter.deliverables.map((deliverable, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-3 py-1 rounded-full">
                                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                                    {deliverable}
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
                            Comprehensive Study Material
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Everything you need for current affairs preparation
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

                {/* Success Metrics */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Success Metrics
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Proven results from our current affairs program
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {successMetrics.map((metric, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10 text-center">
                                <div className="text-3xl font-bold text-[#2D1B33] mb-2">
                                    {metric.value}
                                </div>
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                    {metric.metric}
                                </h3>
                                <p className="text-sm text-[#2D1B33]/60">
                                    {metric.description}
                                </p>
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
                            Learn from current affairs experts and analysts
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

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Stay Updated, Stay Ahead
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Join our current affairs program and never miss important developments.
                            Year-round access with lifetime validity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Free 7-Day Trial
                            </button>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Ongoing admissions • Lifetime access to content
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}