import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoursesOverview from "@/components/sections/CoursesOverview";
import FAQ from "@/components/sections/FAQ";
// import Testimonials from "@/components/sections/Testimonials";
import StudentReviews from "@/components/sections/StudentReviews";
import UPSCInfo from "@/components/sections/UPSCInfo";
import CTASection from "@/components/sections/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best IAS Coaching in Latur | Rajashree's IAS Portal - UPSC & MPSC Classes",
    description: "🏆 #1 IAS Coaching Institute in Latur. Join Rajashree's IAS Portal for expert UPSC & MPSC coaching. Small batches, personalized mentorship, complete study material. 95% success rate. Enroll now!",
    keywords: "IAS coaching Latur, UPSC coaching Latur, MPSC coaching Latur, best IAS institute Latur, civil services coaching Latur, UPSC classes Latur, IAS preparation Latur, Rajashree's IAS Portal, top IAS coaching Maharashtra",
    authors: [{ name: "Rajashree's IAS Portal" }],
    creator: "Rajashree's IAS Portal",
    publisher: "Rajashree IAS Portal",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Best IAS Coaching in Latur | Rajashree IAS Portal - UPSC & MPSC Classes",
        description: "🏆 #1 IAS Coaching Institute in Latur. Expert faculty, small batches, personalized mentorship. Join 1000+ successful students. Enroll for UPSC & MPSC preparation today!",
        url: "https://rajashreeiasPortal.com",
        siteName: "Rajashree IAS Portal",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Rajashree IAS Portal - Best IAS Coaching in Latur"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Best IAS Coaching in Latur | Rajashree IAS Portal",
        description: "🏆 #1 IAS Coaching Institute in Latur. Expert UPSC & MPSC coaching with 95% success rate. Small batches, personalized mentorship. Enroll now!",
        images: ["/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://rajashreeiasPortal.com",
    },
};

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <WhyChooseUs />
            <CoursesOverview />
            <UPSCInfo />
            <StudentReviews />
            {/* <Testimonials /> */}
            <FAQ />
            <CTASection />
        </div>
    );
}
