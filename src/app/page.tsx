import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoursesOverview from "@/components/sections/CoursesOverview";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import UPSCInfo from "@/components/sections/UPSCInfo";
import CTASection from "@/components/sections/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rajshree IAS Portal | Best UPSC & MPSC Coaching in Latur",
    description: "Join Rajshree IAS Portal for comprehensive UPSC Civil Services and MPSC coaching in Latur. Expert faculty, small batches, complete study material, test series, and personalized mentorship. Start your IAS preparation today!",
    keywords: "UPSC coaching Latur, MPSC coaching Latur, IAS coaching, civil services preparation, best UPSC institute Latur, UPSC classes, IAS Portal Latur, Rajshree IAS",
};

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <WhyChooseUs />
            <CoursesOverview />
            <UPSCInfo />
            <Testimonials />
            <FAQ />
            <CTASection />
        </div>
    );
}
