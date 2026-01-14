import Link from "next/link";
import { Metadata } from "next";
import {
    Trophy, Award, Target, BookOpen, TrendingUp,
    Star, Users, Calendar, ArrowRight, Quote
} from "lucide-react";

export const metadata: Metadata = {
    title: "Toppers' Copies & Strategies | Rajshree IAS Portal",
    description: "Learn from UPSC toppers. Access toppers' answer copies, strategies, and success stories from previous years.",
    keywords: "UPSC toppers, toppers copies, toppers strategy, UPSC success stories, toppers interview",
};

const toppers2025 = [
    {
        rank: 1,
        name: "Ananya Sharma",
        marks: 1125,
        optional: "Geography",
        background: "Engineer",
        attempts: 2,
        keyStrategy: "Integrated preparation with current affairs",
        photo: "/api/placeholder/150/150"
    },
    {
        rank: 2,
        name: "Rahul Verma",
        marks: 1108,
        optional: "Public Administration",
        background: "MBA Graduate",
        attempts: 3,
        keyStrategy: "Consistent answer writing practice",
        photo: "/api/placeholder/150/150"
    },
    {
        rank: 3,
        name: "Priya Patel",
        marks: 1095,
        optional: "Sociology",
        background: "Doctor",
        attempts: 1,
        keyStrategy: "Strong foundation with NCERTs",
        photo: "/api/placeholder/150/150"
    }
];

const toppersByOptional = [
    {
        subject: "Geography",
        toppers: ["Ananya Sharma (Rank 1)", "Vikram Singh (Rank 5)", "Meera Joshi (Rank 12)"],
        averageMarks: 1080,
        successRate: "85%"
    },
    {
        subject: "Public Administration",
        toppers: ["Rahul Verma (Rank 2)", "Karan Gupta (Rank 8)", "Sneha Reddy (Rank 15)"],
        averageMarks: 1065,
        successRate: "78%"
    },
    {
        subject: "History",
        toppers: ["Arjun Kumar (Rank 4)", "Divya Mehta (Rank 9)", "Rohan Shah (Rank 18)"],
        averageMarks: 1050,
        successRate: "82%"
    }
];

const successStrategies = [
    {
        title: "Consistent Study Routine",
        description: "8-10 hours daily study with proper breaks and revision time",
        icon: Calendar,
        tips: [
            "Fixed study hours with buffer time",
            "Weekly off day for mental refresh",
            "Monthly revision cycles",
            "Health and exercise routine"
        ]
    },
    {
        title: "Answer Writing Practice",
        description: "Regular practice with self-evaluation and mentor feedback",
        icon: BookOpen,
        tips: [
            "Daily 2-3 answers practice",
            "Mock test series participation",
            "Answer improvement tracking",
            "Peer review and discussion"
        ]
    },
    {
        title: "Current Affairs Integration",
        description: "Linking static syllabus with current developments",
        icon: TrendingUp,
        tips: [
            "Daily newspaper reading",
            "Monthly current affairs compilation",
            "Value addition in answers",
            "Contemporary examples usage"
        ]
    },
    {
        title: "Revision Strategy",
        description: "Systematic revision with spaced repetition technique",
        icon: Target,
        tips: [
            "Weekly subject revision",
            "Monthly full syllabus revision",
            "Quick revision notes preparation",
            "Previous year questions practice"
        ]
    }
];

const commonMistakes = [
    {
        mistake: "Starting preparation late",
        solution: "Begin 18-24 months before exam with proper planning"
    },
    {
        mistake: "Ignoring NCERTs",
        solution: "Build strong foundation with NCERT books first"
    },
    {
        mistake: "Not practicing answer writing",
        solution: "Regular answer writing is crucial for mains success"
    },
    {
        mistake: "Neglecting current affairs",
        solution: "Dedicate specific time for daily current affairs"
    },
    {
        mistake: "Not taking mock tests",
        solution: "Regular mock tests help in time management and evaluation"
    }
];

const features = [
    {
        icon: Trophy,
        title: "Toppers' Copies",
        description: "Access to actual answer copies of previous toppers"
    },
    {
        icon: Users,
        title: "Success Stories",
        description: "Detailed interviews and preparation journeys"
    },
    {
        icon: Target,
        title: "Strategy Guides",
        description: "Proven strategies and techniques from toppers"
    },
    {
        icon: Star,
        title: "Mentorship",
        description: "Learn from toppers through mentorship programs"
    }
];

const stats = [
    { label: "Toppers Featured", value: "500+", icon: Trophy },
    { label: "Success Stories", value: "200+", icon: Users },
    { label: "Strategy Guides", value: "50+", icon: Target },
    { label: "Average Marks", value: "1050+", icon: Star }
];

export default function ToppersResourcePage() {
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
                        <span className="text-[#2D1B33]">Toppers</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Learn from the Best
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Toppers' Copies & Strategies
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Learn from UPSC toppers! Access their answer copies, preparation strategies,
                            success stories, and proven techniques that led to their remarkable achievements.
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
                                    Access Toppers' Copies
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Watch Success Stories
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
                            Comprehensive resources from UPSC toppers to guide your preparation
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

                {/* Top 3 of 2025 */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            UPSC 2025 Top 3 Rankers
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Meet the achievers who set new benchmarks this year
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {toppers2025.map((topper, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10 text-center">
                                <div className="w-20 h-20 rounded-full bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-4">
                                    <Trophy className="w-10 h-10 text-[#D9A15B]" />
                                </div>
                                <div className="mb-4">
                                    <div className="inline-flex items-center gap-1 bg-[#D9A15B] text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                                        <Award className="w-3 h-3" />
                                        Rank {topper.rank}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#2D1B33] font-serif mb-1">
                                        {topper.name}
                                    </h3>
                                    <p className="text-[#D9A15B] font-medium">{topper.marks} Marks</p>
                                </div>

                                <div className="space-y-2 text-sm mb-4">
                                    <div className="flex justify-between">
                                        <span className="text-[#2D1B33]/60">Optional:</span>
                                        <span className="font-medium text-[#2D1B33]">{topper.optional}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#2D1B33]/60">Background:</span>
                                        <span className="font-medium text-[#2D1B33]">{topper.background}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#2D1B33]/60">Attempts:</span>
                                        <span className="font-medium text-[#2D1B33]">{topper.attempts}</span>
                                    </div>
                                </div>

                                <p className="text-xs text-[#2D1B33]/70 mb-4 italic">
                                    "{topper.keyStrategy}"
                                </p>

                                <button className="w-full py-2 bg-[#2D1B33] text-white text-sm font-medium rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                                    Read Full Story
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Strategies */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Proven Success Strategies
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Time-tested strategies that toppers swear by
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {successStrategies.map((strategy, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center flex-shrink-0">
                                        <strategy.icon className="w-6 h-6 text-[#D9A15B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                            {strategy.title}
                                        </h3>
                                        <p className="text-sm text-[#2D1B33]/60">
                                            {strategy.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {strategy.tips.map((tip, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-[#2D1B33]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D9A15B] mt-2 flex-shrink-0"></div>
                                            <span>{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional-wise Toppers */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Optional Subject Performance
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Success rates and top performers by optional subjects
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {toppersByOptional.map((subject, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-4">
                                    {subject.subject}
                                </h3>

                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">Success Rate:</span>
                                        <span className="font-medium text-green-600">{subject.successRate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">Avg. Marks:</span>
                                        <span className="font-medium text-[#2D1B33]">{subject.averageMarks}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs font-medium text-[#2D1B33]/70 mb-2">Top Performers:</p>
                                    <div className="space-y-1">
                                        {subject.toppers.map((topper, i) => (
                                            <div key={i} className="text-xs text-[#2D1B33]/70 bg-[#FAF9F6] px-2 py-1 rounded">
                                                {topper}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-2 bg-[#D9A15B] text-white text-sm font-medium rounded-lg hover:bg-[#c4923f] transition-colors">
                                    View Copies
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Common Mistakes */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Common Mistakes to Avoid
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Learning from toppers' experiences - what not to do
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-2 gap-6">
                            {commonMistakes.map((item, index) => (
                                <div key={index} className="border-l-4 border-red-400 pl-4">
                                    <h4 className="font-semibold text-[#2D1B33] mb-2">
                                        ❌ {item.mistake}
                                    </h4>
                                    <p className="text-sm text-[#2D1B33]/70">
                                        <strong>Solution:</strong> {item.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Topper Testimonials */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            What Toppers Say
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Insights and advice from successful candidates
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                            <Quote className="w-8 h-8 text-[#D9A15B] mb-4" />
                            <p className="text-[#2D1B33]/70 mb-4 italic">
                                "The key to success is consistency and regular answer writing practice.
                                Don't wait for motivation, build discipline."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#D9A15B]/10 flex items-center justify-center">
                                    <span className="text-sm font-bold text-[#D9A15B]">AS</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2D1B33]">Ananya Sharma</p>
                                    <p className="text-xs text-[#2D1B33]/60">Rank 1, UPSC 2025</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                            <Quote className="w-8 h-8 text-[#D9A15B] mb-4" />
                            <p className="text-[#2D1B33]/70 mb-4 italic">
                                "Focus on understanding concepts rather than rote learning.
                                Current affairs integration is crucial for high scores."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#D9A15B]/10 flex items-center justify-center">
                                    <span className="text-sm font-bold text-[#D9A15B]">RV</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2D1B33]">Rahul Verma</p>
                                    <p className="text-xs text-[#2D1B33]/60">Rank 2, UPSC 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Learn from the Best
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Access toppers' answer copies, strategies, and mentorship to accelerate
                            your UPSC preparation journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Get Toppers' Access
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Free Strategy Session
                            </button>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            500+ toppers • Answer copies • Strategy guides • Mentorship calls
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}