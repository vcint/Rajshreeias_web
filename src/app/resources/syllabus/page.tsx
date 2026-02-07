import Link from "next/link";
import { Metadata } from "next";
import {
    FileText, Download, Target, BookOpen, Calendar,
    CheckCircle, Clock, Star, ArrowRight, MapPin
} from "lucide-react";

export const metadata: Metadata = {
    title: "UPSC Syllabus | Rajashree IAS Portal",
    description: "Complete UPSC & MPSC syllabus breakdown. Detailed topic-wise syllabus for prelims and mains with preparation strategy for both exams.",
    keywords: "UPSC syllabus, MPSC syllabus, UPSC CSE syllabus, MPSC prelims syllabus, mains syllabus, UPSC exam pattern, MPSC exam pattern",
};

const prelimsSyllabus = [
    {
        paper: "General Studies Paper I",
        topics: [
            "Current events of national and international importance",
            "History of India and Indian National Movement",
            "Indian and World Geography - Physical, Social, Economic",
            "Indian Polity and Governance - Constitution, Political System",
            "Economic and Social Development - Sustainable Development",
            "General issues on Environmental Ecology, Bio-diversity",
            "General Science"
        ],
        marks: 200,
        questions: 100,
        duration: "2 hours"
    },
    {
        paper: "CSAT Paper II",
        topics: [
            "Comprehension",
            "Interpersonal skills including communication skills",
            "Logical reasoning and analytical ability",
            "Decision-making and problem-solving",
            "General mental ability",
            "Basic numeracy",
            "Data interpretation"
        ],
        marks: 200,
        questions: 80,
        duration: "2 hours"
    }
];

const mainsSyllabus = [
    {
        paper: "General Studies I",
        topics: [
            "Indian Heritage and Culture, History and Geography of the World and Society",
            "Modern Indian History from about the middle of the eighteenth century",
            "Post-independence consolidation and reorganization",
            "World History, Indian Society, Role of women, population and associated issues",
            "Effects of globalization on Indian society"
        ],
        marks: 250,
        questions: 20,
        wordLimit: "150-200 words"
    },
    {
        paper: "General Studies II",
        topics: [
            "Governance, Constitution, Polity, Social Justice and International relations",
            "Indian Constitution—historical underpinnings, evolution, features",
            "Functions and responsibilities of the Union and the States",
            "Separation of powers, dispute redressal mechanisms",
            "Comparison of the Indian constitutional scheme with other countries"
        ],
        marks: 250,
        questions: 20,
        wordLimit: "150-200 words"
    },
    {
        paper: "General Studies III",
        topics: [
            "Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management",
            "Indian Economy and issues relating to planning, mobilization of resources",
            "Inclusive growth and issues arising from it",
            "Government Budgeting, Major crops-cropping patterns, irrigation",
            "Issues related to direct and indirect farm subsidies"
        ],
        marks: 250,
        questions: 20,
        wordLimit: "150-200 words"
    },
    {
        paper: "General Studies IV",
        topics: [
            "Ethics, Integrity and Aptitude",
            "Ethics and Human Interface: Essence, determinants and consequences",
            "Dimensions of ethics, Ethics in private and public relationships",
            "Human Values - lessons from the lives and teachings of great leaders",
            "Role of family, society and educational institutions in inculcating values"
        ],
        marks: 250,
        questions: 20,
        wordLimit: "150-200 words"
    }
];

const optionalSubjects = [
    "History", "Geography", "Political Science", "Sociology", "Psychology",
    "Public Administration", "Anthropology", "Philosophy", "Agriculture",
    "Animal Husbandry", "Botany", "Chemistry", "Civil Engineering",
    "Commerce", "Economics", "Electrical Engineering", "Geology",
    "Law", "Management", "Mathematics", "Mechanical Engineering",
    "Medical Science", "Physics", "Statistics", "Zoology"
];

const preparationStrategy = [
    {
        phase: "Foundation Building",
        duration: "6-8 months",
        focus: "Basic concepts and NCERT books",
        activities: ["NCERT reading", "Basic note-making", "Current affairs start"]
    },
    {
        phase: "Subject-wise Study",
        duration: "8-10 months",
        focus: "Standard reference books and deep understanding",
        activities: ["Subject specialization", "Answer writing practice", "Mock tests"]
    },
    {
        phase: "Revision & Practice",
        duration: "3-4 months",
        focus: "Consolidation and exam practice",
        activities: ["Full syllabus revision", "Intensive mock tests", "Weak area improvement"]
    },
    {
        phase: "Final Preparation",
        duration: "1 month",
        focus: "Last-minute revision and confidence building",
        activities: ["Quick revision", "Previous year questions", "Exam strategy finalization"]
    }
];

const features = [
    {
        icon: FileText,
        title: "Detailed Syllabus",
        description: "Complete topic-wise breakdown of UPSC syllabus"
    },
    {
        icon: Target,
        title: "Preparation Strategy",
        description: "Structured approach with timelines and milestones"
    },
    {
        icon: BookOpen,
        title: "Recommended Books",
        description: "Subject-wise booklist and study materials"
    },
    {
        icon: Calendar,
        title: "Study Timeline",
        description: "Month-wise preparation schedule and targets"
    }
];

const stats = [
    { label: "Total Topics", value: "150+", icon: Target },
    { label: "Optional Subjects", value: "25", icon: BookOpen },
    { label: "Study Hours", value: "3000+", icon: Clock },
    { label: "Success Rate", value: "95%", icon: Star }
];

export default function SyllabusResourcePage() {
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
                        <span className="text-[#2D1B33]">Syllabus</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            Know Your Path
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            UPSC Syllabus
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Complete UPSC CSE syllabus breakdown with detailed topics, preparation strategy,
                            and study timeline. Your roadmap to success in the civil services examination.
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
                                    Get Study Plan
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#2D1B33] text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33]/5 transition-colors">
                                Download Syllabus PDF
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
                            Comprehensive syllabus resources for systematic UPSC preparation
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

                {/* Prelims Syllabus */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Prelims Syllabus
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Detailed syllabus for UPSC Civil Services Examination Preliminary stage
                        </p>
                    </div>

                    <div className="space-y-6">
                        {prelimsSyllabus.map((paper, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="lg:w-1/3">
                                        <h3 className="text-xl font-bold text-[#2D1B33] font-serif mb-4">
                                            {paper.paper}
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-[#2D1B33]/60">Marks:</span>
                                                <span className="font-medium text-[#2D1B33]">{paper.marks}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#2D1B33]/60">Questions:</span>
                                                <span className="font-medium text-[#2D1B33]">{paper.questions}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#2D1B33]/60">Duration:</span>
                                                <span className="font-medium text-[#2D1B33]">{paper.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <h4 className="font-semibold text-[#2D1B33] mb-3">Topics Covered:</h4>
                                        <ul className="space-y-2">
                                            {paper.topics.map((topic, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-[#2D1B33]/70">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mains Syllabus */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Mains Syllabus
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Detailed syllabus for UPSC Civil Services Examination Main stage
                        </p>
                    </div>

                    <div className="space-y-6">
                        {mainsSyllabus.map((paper, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="lg:w-1/3">
                                        <h3 className="text-xl font-bold text-[#2D1B33] font-serif mb-4">
                                            {paper.paper}
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-[#2D1B33]/60">Marks:</span>
                                                <span className="font-medium text-[#2D1B33]">{paper.marks}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#2D1B33]/60">Questions:</span>
                                                <span className="font-medium text-[#2D1B33]">{paper.questions}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#2D1B33]/60">Word Limit:</span>
                                                <span className="font-medium text-[#2D1B33]">{paper.wordLimit}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <h4 className="font-semibold text-[#2D1B33] mb-3">Key Topics:</h4>
                                        <ul className="space-y-2">
                                            {paper.topics.map((topic, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-[#2D1B33]/70">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional Subjects */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Optional Subjects
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Choose from 25 optional subjects for Mains Papers VI & VII
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {optionalSubjects.map((subject, index) => (
                                <div key={index} className="text-center p-3 bg-[#FAF9F6] rounded-lg">
                                    <span className="text-sm font-medium text-[#2D1B33]">{subject}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-[#D9A15B]/10 rounded-lg">
                            <p className="text-sm text-[#2D1B33]/70">
                                <strong>Note:</strong> Each optional subject carries 500 marks (250 marks each paper).
                                Choose based on your background, interest, and availability of study materials.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Preparation Strategy */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Preparation Strategy
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Structured 18-month preparation plan for UPSC CSE
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {preparationStrategy.map((phase, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#D9A15B] text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#2D1B33] font-serif">{phase.phase}</h3>
                                        <p className="text-sm text-[#D9A15B] font-medium">{phase.duration}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-[#2D1B33]/70 mb-3">
                                    <strong>Focus:</strong> {phase.focus}
                                </p>
                                <div className="space-y-2">
                                    <p className="text-xs font-medium text-[#2D1B33]/70">Key Activities:</p>
                                    {phase.activities.map((activity, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span>{activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#2D1B33] to-[#4a2d4f] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                            Start Your UPSC Journey
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Get detailed syllabus breakdown, study plan, and preparation strategy
                            tailored for UPSC CSE success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Get Complete Study Plan
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Download Syllabus
                            </button>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Detailed syllabus • Study timeline • Book recommendations • Success tips
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}