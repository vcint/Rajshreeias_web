import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IAS Coaching Courses in Latur | UPSC & MPSC Preparation | Rajashree's IAS Portal",
    description: "Best IAS coaching courses in Latur, Maharashtra. Comprehensive UPSC Civil Services & MPSC preparation with expert faculty. Quality education for serious aspirants. Enroll now for dedicated support.",
    keywords: "IAS coaching courses Latur, UPSC courses Latur, MPSC coaching Latur, civil services preparation Maharashtra, best IAS institute Latur, UPSC coaching fees",
    openGraph: {
        title: "IAS Coaching Courses in Latur | UPSC & MPSC Preparation",
        description: "Leading IAS coaching institute in Latur offering comprehensive UPSC & MPSC courses. Expert faculty, personalized mentorship, quality education.",
        url: "https://rajshreeias.com/courses",
        siteName: "Rajashree's IAS Portal",
        images: [
            {
                url: "/og-courses.jpg",
                width: 1200,
                height: 630,
                alt: "Rajshree IAS Coaching Courses Latur"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "IAS Coaching Courses in Latur | UPSC & MPSC Preparation",
        description: "Best IAS coaching institute in Latur with comprehensive courses for UPSC Civil Services & MPSC preparation.",
        images: ["/og-courses.jpg"]
    },
    alternates: {
        canonical: "https://rajshreeias.com/courses"
    }
};

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}