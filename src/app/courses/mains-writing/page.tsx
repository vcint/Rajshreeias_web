import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Clock, Users, Award, CheckCircle, ArrowRight,
    Target, TrendingUp, Star, Calendar, FileText, Brain,
    Shield, Heart, Zap, PenTool
} from "lucide-react";

export const metadata: Metadata = {
    title: "Mains Answer Writing Program | Rajashree IAS Portal",
    description: "Master the art of answer writing with personalized feedback from experienced evaluators. 200+ answer evaluations, model answers, and essay writing practice.",
    keywords: "UPSC mains answer writing, UPSC essay writing, mains preparation, answer writing practice, UPSC mains coaching",
};

const courseHighlights = [
    {
        icon: PenTool,
        title: "200+ Answer Evaluations",
        description: "Personalized feedback on each answer from experienced evaluators with detailed suggestions"
    },
    {
        icon: FileText,
        title: "Model Answers",
        description: "Learn from high-scoring model answers with structure analysis and content breakdown"
    },
    {
        icon: Brain,
        title: "Essay Writing Practice",
        description: "Comprehensive essay writing training with topic selection and structuring techniques"
    },
    {
        icon: Target,
        title: "Ethics Case Studies",
        description: "Practice ethics, integrity, and aptitude questions with real-world case studies"
    },
    {
        icon: Users,
        title: "Small Batch Size",
        description: "Limited to 25 students for detailed individual attention and feedback"
    },
    {
        icon: TrendingUp,
        title: "Performance Tracking",
        description: "Regular assessment of improvement with detailed performance analytics"
    }
];

const programStructure = [
    {
        module: "Foundation Module",
        duration: "Month 1",
        focus: "Understanding question types, basic structure, and evaluation criteria",
        activities: ["Question analysis", "Basic structure practice", "Evaluation parameters"]
    },
    {
        module: "Intensive Practice",
        duration: "Months 2-3",
        focus: "Regular answer writing with feedback and improvement",
        activities: ["Daily answer writing", "Weekly evaluations", "Improvement sessions"]
    },
    {
        module: "Advanced Practice",
        duration: "Month 4",
        focus: "Complex questions, essay writing, and final preparation",
        activities: ["Essay writing", "Case studies", "Mock tests", "Final evaluation"]
    }
];

const evaluationProcess = [
    "Detailed marking scheme explanation",
    "Content quality assessment (40%)",
    "Structure and presentation (30%)",
    "Language and expression (20%)",
    "Originality and analysis (10%)",
    "Personalized improvement suggestions",
    "Model answers for reference",
    "One-on-one doubt clearing sessions"
];

const faculty = [
    {
        name: "Dr. Meera Singh",
        qualification: "PhD Public Administration, Former UPSC Board Member",
        experience: "20+ years",
        specialization: "Answer Evaluation & Essay Writing"
    },
    {
        name: "Shri Arvind Kumar",
        qualification: "MA Philosophy, Ethics Expert",
        experience: "15+ years",
        specialization: "Ethics & Case Studies"
    },
    {
        name: "Ms. Priya Sharma",
        qualification: "MA English Literature, UPSC Topper",
        experience: "10+ years",
        specialization: "Essay Writing & Language"
    }
];

const successMetrics = [
    {
        metric: "Average Score Improvement",
        value: "120 marks",
        description: "Students improve their mains scores by average 120 marks"
    },
    {
        metric: "Essay Writing Success",
        value: "85%",
        description: "85% students score above 120 in essay paper"
    },
    {
        metric: "Answer Quality Rating",
        value: "4.2/5",
        description: "Average rating for answer quality improvement"
    }
];

export default function MainsWritingPage() {
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
                        <span className="text-[#2D1B33]">Mains Answer Writing</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Answer Writing Mastery Program
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            Mains Answer Writing Program
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Master the art of answer writing for UPSC Mains. Get personalized feedback from experienced evaluators,
                            learn from model answers, and improve your scores significantly.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">4</div>
                                <div className="text-sm text-[#2D1B33]/60">Months Duration</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">25</div>
                                <div className="text-sm text-[#2D1B33]/60">Students/Batch</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">200+</div>
                                <div className="text-sm text-[#2D1B33]/60">Evaluations</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">120</div>
                                <div className="text-sm text-[#2D1B33]/60">Avg Score Increase</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://razorpay.me/@rajshreeias/mains-writing" target="_blank" rel="noopener noreferrer">
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
                            Why Choose Our Mains Program?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Intensive training focused on improving your mains scores
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
                            Program Structure
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Systematic approach to mastering answer writing
                        </p>
                    </div>

                    <div className="space-y-6">
                        {programStructure.map((module, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="lg:w-1/3">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-[#2D1B33] text-white flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-lg font-bold text-[#2D1B33] font-serif">
                                                {module.module}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-[#D9A15B] font-medium">{module.duration}</p>
                                        <p className="text-sm text-[#2D1B33]/60 mt-1">{module.focus}</p>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <div className="flex flex-wrap gap-2">
                                            {module.activities.map((activity, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 text-xs bg-[#FAF9F6] text-[#2D1B33]/70 px-3 py-1 rounded-full">
                                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Evaluation Process */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Evaluation Process
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Detailed feedback system to help you improve continuously
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-2 gap-6">
                            {evaluationProcess.map((process, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#2D1B33]/70">{process}</span>
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
                            Proven results from our mains answer writing program
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
                            Meet Your Evaluators
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Learn from former UPSC board members and toppers
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
                            Transform Your Mains Scores
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Join our intensive mains answer writing program and significantly improve your UPSC scores.
                            Next batch starts in July 2026.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://razorpay.me/@rajshreeias/mains-writing" target="_blank" rel="noopener noreferrer">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Buy Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </a>
                            <a href="tel:+918668275251" className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Call: +91 86682 75251
                            </a>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Next batch starts: July 15, 2026 • Admission closes: July 10, 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}