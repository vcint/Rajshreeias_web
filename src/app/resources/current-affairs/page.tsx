import Link from "next/link";
import { Metadata } from "next";
import {
    Newspaper, Calendar, Download, ArrowRight, CheckCircle,
    TrendingUp, Clock, FileText, Star
} from "lucide-react";

export const metadata: Metadata = {
    title: "Daily Current Affairs | Rajashree IAS Portal",
    description: "Stay updated with daily current affairs covering The Hindu, Indian Express, and PIB. Daily news analysis with prelims MCQs and mains links.",
    keywords: "current affairs UPSC, daily current affairs, UPSC current affairs, current affairs analysis, daily news analysis",
};

const dailyContent = [
    {
        date: "January 14, 2026",
        title: "Union Budget 2026-27: Key Highlights",
        summary: "Finance Minister presents budget with focus on infrastructure, digital economy, and employment generation.",
        topics: ["Budget Analysis", "Economic Survey", "Policy Changes"],
        mcqs: 15,
        mainsLinks: 8
    },
    {
        date: "January 13, 2026",
        title: "NITI Aayog Releases Sustainable Development Report",
        summary: "India ranks 109th out of 166 countries in sustainable development goals index.",
        topics: ["Sustainable Development", "NITI Aayog", "SDG India Index"],
        mcqs: 12,
        mainsLinks: 6
    },
    {
        date: "January 12, 2026",
        title: "Supreme Court Verdict on Electoral Bonds",
        summary: "Constitutional bench delivers judgment on electoral bonds scheme validity.",
        topics: ["Electoral Reforms", "Supreme Court", "Election Funding"],
        mcqs: 18,
        mainsLinks: 10
    }
];

const monthlyThemes = [
    {
        month: "January 2026",
        theme: "Union Budget & Economic Survey",
        articles: 45,
        mcqs: 180,
        specialReports: ["Budget Analysis", "Economic Survey Summary", "Tax Reforms"]
    },
    {
        month: "December 2025",
        theme: "Year-end Review & International Relations",
        articles: 52,
        mcqs: 210,
        specialReports: ["Foreign Policy Review", "India-China Relations", "Climate Diplomacy"]
    },
    {
        month: "November 2025",
        theme: "COP29 & Climate Action",
        articles: 38,
        mcqs: 165,
        specialReports: ["Climate Agreements", "India's Climate Goals", "Green Energy Transition"]
    }
];

const sources = [
    { name: "The Hindu", articles: "Daily", priority: "High" },
    { name: "Indian Express", articles: "Daily", priority: "High" },
    { name: "PIB", articles: "Daily", priority: "Medium" },
    { name: "PRS India", articles: "Weekly", priority: "High" },
    { name: "Ministry Releases", articles: "As released", priority: "Medium" },
    { name: "International News", articles: "Daily", priority: "Low" }
];

const features = [
    {
        icon: Newspaper,
        title: "Daily News Analysis",
        description: "Comprehensive analysis of important news with key points and implications"
    },
    {
        icon: FileText,
        title: "Prelims MCQs",
        description: "Topic-wise multiple choice questions for prelims practice"
    },
    {
        icon: TrendingUp,
        title: "Mains Links",
        description: "Current affairs linkage with static syllabus topics for mains preparation"
    },
    {
        icon: Calendar,
        title: "Monthly Compilation",
        description: "Consolidated monthly current affairs magazine with topic organization"
    }
];

export default function CurrentAffairsResourcePage() {
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
                        <span className="text-[#2D1B33]">Daily Current Affairs</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Stay Updated Daily
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Daily Current Affairs
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Comprehensive daily current affairs analysis covering The Hindu, Indian Express, and PIB.
                            Stay ahead with daily updates, MCQs, and mains linkages.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">365</div>
                                <div className="text-sm text-[#2D1B33]/60">Daily Updates</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">5000+</div>
                                <div className="text-sm text-[#2D1B33]/60">MCQs</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">12</div>
                                <div className="text-sm text-[#2D1B33]/60">Monthly Magazines</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">98%</div>
                                <div className="text-sm text-[#2D1B33]/60">Coverage</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center justify-center gap-2">
                                    Subscribe Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Free 7-Day Trial
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
                            Comprehensive current affairs coverage designed for UPSC preparation
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

                {/* Recent Daily Content */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Recent Daily Content
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Latest current affairs analysis and study material
                        </p>
                    </div>

                    <div className="space-y-6">
                        {dailyContent.map((content, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="lg:w-1/4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar className="w-4 h-4 text-[#D9A15B]" />
                                            <span className="text-sm font-medium text-[#D9A15B]">{content.date}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-[#2D1B33]/60">
                                            <span className="flex items-center gap-1">
                                                <FileText className="w-3 h-3" />
                                                {content.mcqs} MCQs
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <TrendingUp className="w-3 h-3" />
                                                {content.mainsLinks} Links
                                            </span>
                                        </div>
                                    </div>
                                    <div className="lg:w-3/4">
                                        <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-2">
                                            {content.title}
                                        </h3>
                                        <p className="text-sm text-[#2D1B33]/60 mb-4">
                                            {content.summary}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {content.topics.map((topic, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-2 py-1 rounded-full">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="px-4 py-2 bg-[#2D1B33] text-white text-sm font-medium rounded-lg hover:bg-[#2D1B33]/90 transition-colors">
                                                Read Analysis
                                            </button>
                                            <button className="px-4 py-2 border border-[#2D1B33]/20 text-[#2D1B33] text-sm font-medium rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Monthly Themes */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Monthly Themes & Compilations
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Thematic organization of current affairs for better retention
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {monthlyThemes.map((theme, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-center mb-4">
                                    <h3 className="text-lg font-bold text-[#2D1B33] font-serif mb-1">
                                        {theme.month}
                                    </h3>
                                    <p className="text-sm text-[#D9A15B] font-medium">{theme.theme}</p>
                                </div>
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">Articles:</span>
                                        <span className="font-medium text-[#2D1B33]">{theme.articles}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2D1B33]/60">MCQs:</span>
                                        <span className="font-medium text-[#2D1B33]">{theme.mcqs}</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="text-xs font-medium text-[#2D1B33]/70 mb-2">Special Reports:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {theme.specialReports.map((report, i) => (
                                            <span key={i} className="text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-2 py-1 rounded">
                                                {report}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-[#D9A15B] text-white text-sm font-medium rounded-lg hover:bg-[#c4923f] transition-colors">
                                    Download Magazine
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sources Covered */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Sources We Cover
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive coverage from all important sources
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sources.map((source, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-[#FAF9F6] rounded-lg">
                                    <div>
                                        <h4 className="font-medium text-[#2D1B33]">{source.name}</h4>
                                        <p className="text-sm text-[#2D1B33]/60">{source.articles}</p>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                        source.priority === 'High' ? 'bg-green-100 text-green-700' :
                                        source.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-gray-100 text-gray-700'
                                    }`}>
                                        {source.priority}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Never Miss Important News
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Subscribe to our daily current affairs service and get comprehensive analysis
                            delivered to your inbox every morning.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Subscribe Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Free 7-Day Trial
                            </button>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Cancel anytime • Daily delivery at 6:00 AM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}