import Link from "next/link";
import { 
    FileText, BookOpen, Newspaper, Award, GraduationCap, 
    Calendar, Download, ArrowRight, Clock, CheckCircle, 
    HelpCircle, TrendingUp
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Resources",
    description: "Access free UPSC and MPSC preparation resources - current affairs, previous year papers, study notes, syllabus, and topper strategies.",
};

const resourceCategories = [
    {
        id: "current-affairs",
        icon: Newspaper,
        title: "Daily Current Affairs",
        description: "Stay updated with daily news analysis covering The Hindu, Indian Express, and PIB.",
        color: "bg-blue-500",
        features: ["Daily Updates", "Prelims MCQs", "Mains Links"],
        cta: "Read Today's News"
    },
    {
        id: "pyq",
        icon: FileText,
        title: "Previous Year Papers",
        description: "Access solved UPSC and MPSC papers from the last 10 years with detailed explanations.",
        color: "bg-purple-500",
        features: ["2015-2024 Papers", "Solved with Analysis", "Trend Identification"],
        cta: "Download Papers"
    },
    {
        id: "notes",
        icon: BookOpen,
        title: "Study Notes",
        description: "Comprehensive notes for all GS subjects prepared by our experienced faculty.",
        color: "bg-green-500",
        features: ["Subject-wise Notes", "NCERT Summaries", "Quick Revision"],
        cta: "Access Notes"
    },
    {
        id: "syllabus",
        icon: GraduationCap,
        title: "UPSC Syllabus",
        description: "Complete UPSC CSE syllabus with subject-wise breakdown and preparation strategy.",
        color: "bg-orange-500",
        features: ["Prelims Syllabus", "Mains Syllabus", "Optional Syllabus"],
        cta: "View Syllabus"
    },
    {
        id: "toppers",
        icon: Award,
        title: "Topper's Strategy",
        description: "Learn from successful candidates - their strategy, booklist, and preparation timeline.",
        color: "bg-yellow-500",
        features: ["Preparation Strategies", "Book Lists", "Time Management"],
        cta: "Read Strategies"
    },
    {
        id: "faqs",
        icon: HelpCircle,
        title: "FAQs",
        description: "Find answers to commonly asked questions about UPSC, MPSC, and civil services.",
        color: "bg-pink-500",
        features: ["Eligibility", "Exam Pattern", "Preparation Tips"],
        cta: "View FAQs"
    }
];

const quickLinks = [
    { title: "UPSC Official Website", url: "https://upsc.gov.in", desc: "Official notifications and results" },
    { title: "MPSC Official Website", url: "https://mpsc.gov.in", desc: "Maharashtra PSC updates" },
    { title: "PIB India", url: "https://pib.gov.in", desc: "Government press releases" },
    { title: "Rajya Sabha TV", url: "https://rstv.nic.in", desc: "Debates and discussions" },
];

const upcomingContent = [
    { title: "Budget 2026 Analysis", date: "February 2026" },
    { title: "Economic Survey Summary", date: "February 2026" },
    { title: "Prelims 2026 Mock Test Series", date: "March 2026" },
    { title: "Current Affairs Yearly Compilation 2025", date: "January 2026" },
];

export default function ResourcesPage() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-white to-[#FAF9F6] pt-8 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60 mb-8">
                        <Link href="/" className="hover:text-[#D9A15B]">Home</Link>
                        <span>/</span>
                        <span className="text-[#2D1B33]">Free Resources</span>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Free Study Materials
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Resources for UPSC & MPSC Preparation
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg">
                            Access quality study materials, current affairs, previous year papers, and more - 
                            all curated to help you succeed in civil services examinations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-20 container mx-auto px-4">
                {/* Resources Grid */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resourceCategories.map((resource) => (
                            <div 
                                key={resource.id}
                                id={resource.id}
                                className="bg-white border border-[#2D1B33]/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#D9A15B]/30 transition-all group scroll-mt-24"
                            >
                                <div className={`${resource.color} h-2`} />
                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${resource.color}/10 flex items-center justify-center flex-shrink-0`}>
                                            <resource.icon className={`w-6 h-6 text-[#2D1B33]/70`} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#2D1B33] font-serif group-hover:text-[#D9A15B] transition-colors">
                                                {resource.title}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-[#2D1B33]/60 mb-4 leading-relaxed">
                                        {resource.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {resource.features.map((feature, i) => (
                                            <span 
                                                key={i} 
                                                className="inline-flex items-center gap-1 text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-2.5 py-1 rounded-full"
                                            >
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <Link 
                                        href={`#${resource.id}`}
                                        className="flex items-center gap-2 text-sm font-semibold text-[#2D1B33] hover:text-[#D9A15B] transition-colors"
                                    >
                                        {resource.cta}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Two Column Section */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Quick Links */}
                    <div className="bg-white rounded-2xl border border-[#2D1B33]/10 overflow-hidden">
                        <div className="bg-[#2D1B33] px-6 py-4">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#D9A15B]" />
                                Important Links
                            </h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {quickLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#FAF9F6] transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#D9A15B]/10 flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="w-5 h-5 text-[#D9A15B] group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2D1B33] group-hover:text-[#D9A15B] transition-colors">
                                            {link.title}
                                        </h4>
                                        <p className="text-sm text-[#2D1B33]/60">{link.desc}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Content */}
                    <div className="bg-white rounded-2xl border border-[#2D1B33]/10 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#D9A15B] to-[#c4923f] px-6 py-4">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Upcoming Content
                            </h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {upcomingContent.map((content, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center justify-between p-3 rounded-lg bg-[#FAF9F6]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D9A15B]" />
                                        <span className="font-medium text-[#2D1B33]">{content.title}</span>
                                    </div>
                                    <span className="text-sm text-[#2D1B33]/50 flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {content.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="px-6 pb-6">
                            <p className="text-sm text-[#2D1B33]/50 text-center">
                                Subscribe to get notified when new content is released
                            </p>
                        </div>
                    </div>
                </div>

                {/* Download Section */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-gradient-to-br from-[#FAF9F6] to-white rounded-2xl border border-[#2D1B33]/10 p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-[#D9A15B]/10 flex items-center justify-center">
                                    <Download className="w-8 h-8 text-[#D9A15B]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#2D1B33] font-serif">
                                        UPSC Prelims 2025 - Complete Question Paper
                                    </h3>
                                    <p className="text-[#2D1B33]/60">
                                        Download solved paper with detailed explanations
                                    </p>
                                </div>
                            </div>
                            <button className="px-6 py-3 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center gap-2 cursor-pointer">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#2D1B33] rounded-2xl p-8 md:p-12 text-center">
                        <BookOpen className="w-14 h-14 text-[#D9A15B] mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                            Want Access to Premium Study Material?
                        </h2>
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                            Join our courses to get comprehensive study material, daily current affairs, 
                            test series, and personal mentorship from experienced faculty.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/courses">
                                <button className="px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors cursor-pointer">
                                    Explore Courses
                                </button>
                            </Link>
                            <Link href="/enroll">
                                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 cursor-pointer">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
