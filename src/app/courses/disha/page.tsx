import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Users, BookOpen, Award, CheckCircle, Star } from "lucide-react";
import coursesData from "@/content/courses.json";

export const metadata: Metadata = {
    title: "Disha (दिशा) – Mentorship Programme | Rajashree's IAS Portal",
    description: "Personalized mentorship program providing one-on-one guidance throughout your UPSC preparation journey for UPSC & MPSC exams.",
};

export default function DishaCoursePage() {
    const course = coursesData.courses.find(c => c.id === "disha");
    
    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="bg-[#FAF9F6]">
            {/* Header */}
            <section className="pt-8 pb-16 bg-gradient-to-b from-white to-[#FAF9F6]">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60 mb-8">
                        <Link href="/" className="hover:text-[#D9A15B]">Home</Link>
                        <span>/</span>
                        <Link href="/courses" className="hover:text-[#D9A15B]">Courses</Link>
                        <span>/</span>
                        <span className="text-[#2D1B33]">{course.title}</span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1B33] mb-4">
                                    {course.title}
                                </h1>
                                <p className="text-lg text-[#2D1B33]/70 mb-6">
                                    {course.shortDescription}
                                </p>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-[#2D1B33]/60 mb-8">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>Duration: {course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        <span>Mode: {course.mode}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" />
                                        <span>Category: {course.category}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Course Features */}
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#2D1B33]/10 mb-8">
                                <h2 className="text-2xl font-serif font-bold text-[#2D1B33] mb-6">Course Features</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {course.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-[#2D1B33]/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Course Structure */}
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#2D1B33]/10 mb-8">
                                <h2 className="text-2xl font-serif font-bold text-[#2D1B33] mb-6">Course Structure</h2>
                                <div className="space-y-6">
                                    {course.courseStructure.map((phase, index) => (
                                        <div key={index} className="border-l-4 border-[#D9A15B] pl-6">
                                            <h3 className="text-lg font-semibold text-[#2D1B33] mb-3">{phase.phase}</h3>
                                            <div className="grid md:grid-cols-2 gap-2">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <div key={topicIndex} className="flex items-center gap-2 text-sm text-[#2D1B33]/70">
                                                        <div className="w-2 h-2 bg-[#D9A15B] rounded-full flex-shrink-0"></div>
                                                        <span>{topic}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Faculty */}
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#2D1B33]/10">
                                <h2 className="text-2xl font-serif font-bold text-[#2D1B33] mb-6">Expert Faculty</h2>
                                <div className="p-6 bg-[#FAF9F6] rounded-lg">
                                    <p className="text-[#2D1B33]/70 leading-relaxed">
                                        Our experienced faculty team brings 15+ years of UPSC teaching expertise. The course is taught by 
                                        subject matter experts who have guided hundreds of successful candidates. All instructors are 
                                        well-versed with the latest exam patterns and provide comprehensive coverage of the syllabus.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-sm text-[#2D1B33]/60">
                                        <Award className="w-4 h-4 text-[#D9A15B]" />
                                        <span>Experienced UPSC Faculty • Proven Track Record • Updated Teaching Methods</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#2D1B33]/10 sticky top-8">
                                <div className="text-center mb-6">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className="text-3xl font-bold text-[#2D1B33]">{course.price}</span>
                                        {course.originalPrice !== course.price && (
                                            <span className="text-lg text-[#2D1B33]/60 line-through">{course.originalPrice}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-center gap-1 text-yellow-500 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <h3 className="font-semibold text-[#2D1B33]">Course Highlights:</h3>
                                    {course.courseHighlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#2D1B33]/70">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href={course.razorpayUrl} target="_blank">
                                    <button className="w-full py-4 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors">
                                        Enroll Now
                                    </button>
                                </Link>

                                <Link href="/enroll">
                                    <button className="w-full mt-3 py-3 border border-[#2D1B33]/20 text-[#2D1B33] font-semibold rounded-lg hover:bg-[#2D1B33] hover:text-white transition-colors">
                                        Free Demo Class
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}