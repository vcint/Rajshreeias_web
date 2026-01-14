import Link from "next/link";
import { Metadata } from "next";
import {
    BookOpen, Clock, Users, Award, CheckCircle, ArrowRight,
    Target, TrendingUp, Star, Calendar, FileText, Brain,
    Shield, Heart, Zap, GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
    title: "UPSC Foundation Course (1 Year) | Rajshree IAS Portal",
    description: "Complete GS coverage from basics to advanced for serious aspirants. Ideal for beginners and those seeking a strong foundation in civil services preparation.",
    keywords: "UPSC foundation course, IAS foundation, civil services foundation, UPSC beginners course, IAS preparation foundation",
};

const courseHighlights = [
    {
        icon: GraduationCap,
        title: "Complete GS Syllabus",
        description: "Comprehensive coverage of General Studies papers I, II, III, IV from basics to advanced"
    },
    {
        icon: Clock,
        title: "1 Year Program",
        description: "Structured 12-month program with systematic progression through all topics"
    },
    {
        icon: Brain,
        title: "Conceptual Learning",
        description: "Focus on building strong conceptual foundation rather than rote memorization"
    },
    {
        icon: Users,
        title: "Small Batch Size",
        description: "Limited to 30-40 students for personalized attention and doubt clearing"
    },
    {
        icon: FileText,
        title: "Daily Answer Writing",
        description: "Regular answer writing practice with expert evaluation and feedback"
    },
    {
        icon: TrendingUp,
        title: "Weekly Assessments",
        description: "Regular tests and assessments to track progress and identify improvement areas"
    }
];

const courseStructure = [
    {
        phase: "Foundation Building (Months 1-4)",
        focus: "Basic concepts in History, Geography, Polity, Economy, and Environment",
        activities: ["Classroom lectures", "Daily assignments", "Weekly tests", "Doubt clearing sessions"]
    },
    {
        phase: "Intensive Learning (Months 5-8)",
        focus: "Advanced topics, current affairs integration, and prelims preparation",
        activities: ["In-depth analysis", "Mock tests", "Current affairs classes", "Revision sessions"]
    },
    {
        phase: "Mains Preparation (Months 9-12)",
        focus: "Answer writing, essay practice, and comprehensive revision",
        activities: ["Mains test series", "Essay writing", "Interview preparation", "Final revision"]
    }
];

const includedServices = [
    "Comprehensive Study Material",
    "Daily Current Affairs Classes",
    "Weekly Mock Tests",
    "Answer Writing Evaluation",
    "Personal Mentorship",
    "Doubt Clearing Sessions",
    "Study Group Discussions",
    "Performance Analysis Reports"
];

const faculty = [
    {
        name: "Dr. Amit Sharma",
        qualification: "PhD Political Science, Former UPSC Mentor",
        experience: "18+ years",
        specialization: "Polity & Governance"
    },
    {
        name: "Prof. Priya Desai",
        qualification: "MA Economics, Published Author",
        experience: "15+ years",
        specialization: "Economy & Current Affairs"
    },
    {
        name: "Shri Rajesh Kumar",
        qualification: "MA History, UPSC Topper",
        experience: "12+ years",
        specialization: "History & Culture"
    }
];

const batchInfo = {
    startDate: "February 15, 2026",
    duration: "12 Months",
    classSchedule: "Monday to Saturday (6 days/week)",
    classTimings: "9:00 AM - 1:00 PM",
    fee: "₹1,25,000 (including GST)",
    earlyBirdDiscount: "₹10,000 off if paid before Jan 31, 2026"
};

export default function FoundationPage() {
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
                        <span className="text-[#2D1B33]">Foundation Course</span>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                            1 Year Comprehensive Program
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2D1B33] mb-4">
                            UPSC Foundation Course
                        </h1>
                        <p className="text-[#2D1B33]/60 text-lg mb-8">
                            Build a strong foundation for UPSC Civil Services Examination. Complete GS coverage
                            from basics to advanced level, designed for serious aspirants starting their journey.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">12</div>
                                <div className="text-sm text-[#2D1B33]/60">Months Duration</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">30-40</div>
                                <div className="text-sm text-[#2D1B33]/60">Students/Batch</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">500+</div>
                                <div className="text-sm text-[#2D1B33]/60">Class Hours</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2D1B33]/10">
                                <div className="text-2xl font-bold text-[#2D1B33]">82%</div>
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
                                Download Brochure
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
                            Why Choose Our Foundation Course?
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Comprehensive preparation designed for beginners and serious aspirants
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

                {/* Course Structure */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Course Structure
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Systematic progression through 12 months of comprehensive preparation
                        </p>
                    </div>

                    <div className="space-y-6">
                        {courseStructure.map((phase, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D1B33]/10">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                    <div className="lg:w-1/3">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-[#2D1B33] text-white flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-lg font-bold text-[#2D1B33] font-serif">
                                                {phase.phase}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-[#2D1B33]/60">{phase.focus}</p>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <div className="flex flex-wrap gap-2">
                                            {phase.activities.map((activity, i) => (
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

                {/* What's Included */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            What's Included
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Complete learning ecosystem for your UPSC preparation
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {includedServices.map((service, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span className="text-sm font-medium text-[#2D1B33]/80">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Faculty */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                            Meet Your Faculty
                        </h2>
                        <p className="text-[#2D1B33]/60 max-w-2xl mx-auto">
                            Learn from experienced educators and UPSC mentors
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

                {/* Batch Information */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2D1B33]/10">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B33] mb-4">
                                Batch Information
                            </h2>
                            <p className="text-[#2D1B33]/60">Next batch starting soon - Limited seats available</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-[#2D1B33]/10">
                                    <span className="text-sm text-[#2D1B33]/70">Start Date</span>
                                    <span className="text-sm font-medium text-[#2D1B33]">{batchInfo.startDate}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-[#2D1B33]/10">
                                    <span className="text-sm text-[#2D1B33]/70">Duration</span>
                                    <span className="text-sm font-medium text-[#2D1B33]">{batchInfo.duration}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-[#2D1B33]/10">
                                    <span className="text-sm text-[#2D1B33]/70">Class Schedule</span>
                                    <span className="text-sm font-medium text-[#2D1B33]">{batchInfo.classSchedule}</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-[#2D1B33]/70">Class Timings</span>
                                    <span className="text-sm font-medium text-[#2D1B33]">{batchInfo.classTimings}</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-[#D9A15B]/10 rounded-lg p-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#2D1B33] mb-1">{batchInfo.fee}</div>
                                        <div className="text-sm text-[#2D1B33]/60">Course Fee</div>
                                    </div>
                                </div>
                                <div className="bg-green-50 rounded-lg p-4">
                                    <div className="text-center">
                                        <div className="text-sm font-medium text-green-700 mb-1">{batchInfo.earlyBirdDiscount}</div>
                                        <div className="text-xs text-green-600">Early Bird Offer</div>
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
                            Start Your UPSC Journey Today
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Join our foundation course and build a strong base for your civil services preparation.
                            Next batch starts on February 15, 2026.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enroll">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center justify-center gap-2">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <a href="tel:+918668275251" className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                Call: +91 98765 43210
                            </a>
                        </div>
                        <p className="text-xs text-white/60 mt-4">
                            Limited seats available • Early bird discount ends January 31, 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}