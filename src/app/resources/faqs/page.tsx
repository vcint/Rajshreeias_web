import Link from "next/link";
import { Metadata } from "next";
import {
    HelpCircle, ChevronDown, BookOpen, Calendar, Target,
    Users, Award, Clock, ArrowRight, Search
} from "lucide-react";

export const metadata: Metadata = {
    title: "UPSC FAQs | Rajashree IAS Portal",
    description: "Comprehensive FAQs for UPSC CSE preparation. Get answers to common questions about syllabus, strategy, books, and exam pattern.",
    keywords: "UPSC FAQs, UPSC questions, UPSC preparation FAQs, civil services exam FAQs",
};

const faqCategories = [
    {
        category: "Exam Pattern & Syllabus",
        icon: BookOpen,
        questions: [
            {
                question: "What is the UPSC CSE exam pattern?",
                answer: "UPSC CSE consists of three stages: Preliminary (objective), Mains (descriptive), and Interview. Prelims has two papers (GS + CSAT), Mains has 9 papers (4 GS + 2 optional + essay + language), and interview is personality test."
            },
            {
                question: "How many attempts are allowed for UPSC CSE?",
                answer: "General category: 6 attempts, OBC: 9 attempts, SC/ST: unlimited attempts. Attempts are counted from the first prelims appearance. Age limit: 21-32 years (general), relaxations for reserved categories."
            },
            {
                question: "What is the syllabus for UPSC prelims?",
                answer: "GS Paper I covers current affairs, history, geography, polity, economy, environment, and science. CSAT Paper II tests comprehension, reasoning, and basic numeracy. Focus on NCERTs for basics and current affairs."
            }
        ]
    },
    {
        category: "Preparation Strategy",
        icon: Target,
        questions: [
            {
                question: "How long does it take to prepare for UPSC?",
                answer: "Typically 18-24 months for serious preparation. Foundation building (6-8 months), subject specialization (8-10 months), and revision/testing (3-4 months). Quality matters more than duration."
            },
            {
                question: "Should I join coaching for UPSC preparation?",
                answer: "Coaching is helpful but not mandatory. Self-study with right guidance works too. Join coaching for structured learning, peer interaction, and expert mentorship. Focus on quality study materials."
            },
            {
                question: "How to balance UPSC preparation with job/studies?",
                answer: "Working professionals can prepare with 4-6 hours daily study. Take leaves for intensive preparation. Weekend full-time study with weekday 2-3 hours. Consistency is key over intensity."
            }
        ]
    },
    {
        category: "Study Materials & Books",
        icon: BookOpen,
        questions: [
            {
                question: "Which books should I read for UPSC preparation?",
                answer: "Start with NCERTs (6th-12th) for basics. Standard books: Laxmikanth (Polity), Spectrum (History), Shankar IAS (Environment), Ramesh Singh (Economy). Follow coaching materials for current affairs."
            },
            {
                question: "Are NCERT books sufficient for UPSC?",
                answer: "NCERTs provide strong foundation but not sufficient alone. Use them for conceptual clarity, then move to advanced books. Cover all NCERTs from class 6-12 for prelims and mains foundation."
            },
            {
                question: "How to study current affairs for UPSC?",
                answer: "Read one newspaper daily (The Hindu/Indian Express). Follow monthly magazines. Make notes linking static and current topics. Focus on last 18-24 months current affairs for prelims."
            }
        ]
    },
    {
        category: "Optional Subjects",
        icon: Award,
        questions: [
            {
                question: "How to choose the right optional subject?",
                answer: "Choose based on interest, background, availability of study materials, and scoring potential. Consider past performance, coaching availability, and overlap with GS syllabus. Don't choose based on trends alone."
            },
            {
                question: "Which optional subjects have highest success rate?",
                answer: "Geography, Public Administration, Sociology, and History have higher success rates due to availability of study materials and coaching. Success depends more on your preparation than the subject choice."
            },
            {
                question: "Can I change my optional subject after prelims?",
                answer: "Yes, you can change optional subject after clearing prelims. But it's not recommended as it requires additional preparation time. Choose wisely during prelims preparation itself."
            }
        ]
    },
    {
        category: "Mock Tests & Revision",
        icon: Clock,
        questions: [
            {
                question: "How important are mock tests for UPSC?",
                answer: "Very important! Mock tests help in time management, identify weak areas, and build exam temperament. Take full-length mocks regularly. Analyze performance and improve consistently."
            },
            {
                question: "How to revise effectively for UPSC?",
                answer: "Follow spaced repetition. Weekly subject revision, monthly full syllabus revision. Make concise notes. Focus on understanding over memorization. Regular self-testing is crucial."
            },
            {
                question: "What is the ideal study timetable for UPSC?",
                answer: "8-10 hours daily study. Include time for newspaper reading, subject study, answer writing, revision, and mock tests. Take regular breaks. Maintain work-life balance to avoid burnout."
            }
        ]
    },
    {
        category: "Interview & Final Stage",
        icon: Users,
        questions: [
            {
                question: "How to prepare for UPSC interview?",
                answer: "Focus on DAF (Detailed Application Form) preparation. Stay updated with current affairs. Practice mock interviews. Work on communication skills, body language, and confidence. Be honest and genuine."
            },
            {
                question: "What qualities do UPSC look for in candidates?",
                answer: "Leadership, integrity, analytical ability, decision-making, communication skills, and commitment to public service. They look for well-rounded personality with clear thinking and value-based approach."
            },
            {
                question: "How much weightage does interview have?",
                answer: "Interview carries 275 marks out of total 2025 marks (13.5%). But it can make or break your final rank. Good interview can compensate for lower mains marks, poor interview can pull down high mains score."
            }
        ]
    }
];

const quickLinks = [
    { title: "Syllabus", href: "/resources/syllabus", icon: BookOpen },
    { title: "Study Notes", href: "/resources/notes", icon: BookOpen },
    { title: "PYQ Analysis", href: "/resources/pyq", icon: Target },
    { title: "Toppers' Strategies", href: "/resources/toppers", icon: Award },
    { title: "Current Affairs", href: "/resources/current-affairs", icon: Calendar }
];

const features = [
    {
        icon: HelpCircle,
        title: "Comprehensive Q&A",
        description: "Answers to 200+ frequently asked questions"
    },
    {
        icon: Search,
        title: "Easy Search",
        description: "Find answers quickly with search functionality"
    },
    {
        icon: Users,
        title: "Expert Answers",
        description: "Guidance from experienced faculty and toppers"
    },
    {
        icon: Clock,
        title: "Regular Updates",
        description: "Updated with latest exam patterns and trends"
    }
];

const stats = [
    { label: "Questions Answered", value: "200+", icon: HelpCircle },
    { label: "Categories", value: "6", icon: BookOpen },
    { label: "Students Helped", value: "10K+", icon: Users },
    { label: "Success Rate", value: "95%", icon: Award }
];

export default function FAQsResourcePage() {
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
                        <span className="text-[#2D1B33]">FAQs</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Get Your Doubts Cleared
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Comprehensive answers to all your UPSC CSE preparation questions.
                            From exam pattern to preparation strategy, we have you covered.
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

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto mb-8">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2D1B33]/40 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search FAQs..."
                                    className="w-full pl-10 pr-4 py-3 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9A15B] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center justify-center gap-2">
                                    Get Personalized Guidance
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Download FAQ PDF
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
                            Why Our FAQs?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive, reliable answers from UPSC experts and toppers
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

                {/* FAQ Categories */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Browse by Category
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Find answers to your specific questions organized by topics
                        </p>
                    </div>

                    <div className="space-y-8">
                        {faqCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm border border-[#2D1B33]/10 overflow-hidden">
                                <div className="bg-[#FAF9F6] px-6 py-4 border-b border-[#2D1B33]/10">
                                    <div className="flex items-center gap-3">
                                        <category.icon className="w-6 h-6 text-[#D9A15B]" />
                                        <h3 className="text-lg font-bold text-[#2D1B33] font-serif">
                                            {category.category}
                                        </h3>
                                    </div>
                                </div>

                                <div className="divide-y divide-[#2D1B33]/10">
                                    {category.questions.map((faq, faqIndex) => (
                                        <div key={faqIndex} className="p-6">
                                            <details className="group">
                                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                                    <h4 className="text-base font-semibold text-[#2D1B33] pr-4">
                                                        {faq.question}
                                                    </h4>
                                                    <ChevronDown className="w-5 h-5 text-[#D9A15B] transition-transform group-open:rotate-180 flex-shrink-0" />
                                                </summary>
                                                <div className="mt-4 text-[#2D1B33]/70 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </details>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Explore More Resources
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive study materials to support your preparation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {quickLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10 text-center hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-[#D9A15B]/10 flex items-center justify-center mx-auto mb-3">
                                        <link.icon className="w-6 h-6 text-[#D9A15B]" />
                                    </div>
                                    <h4 className="font-semibold text-[#2D1B33] text-sm">
                                        {link.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Still Have Questions */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white text-center">
                        <HelpCircle className="w-16 h-16 text-[#D9A15B] mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Our expert mentors are here to help
                            you with personalized guidance and doubt clearing sessions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                Ask an Expert
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Join Study Group
                            </button>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Response within 24 hours • Free initial consultation
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Ready to Start Your UPSC Journey?
                        </h2>
                        <p className="text-[#2D1B33]/60 mb-6 max-w-2xl mx-auto">
                            Get comprehensive guidance, study materials, and mentorship to ace
                            the UPSC Civil Services Examination.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#2D1B33] text-white font-semibold rounded-lg hover:bg-[#2D1B33]/90 transition-colors flex items-center justify-center gap-2">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Free Trial Class
                            </button>
                        </div>
                        <p className="text-xs text-[#2D1B33]/60 mt-4">
                            Join 10,000+ successful students • Expert faculty • Comprehensive study materials
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}