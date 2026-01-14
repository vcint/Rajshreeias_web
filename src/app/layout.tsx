import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

// Initial placeholder simple imports to avoid errors before components exist
// In a real flow I'd create components first, but layout is central.
// I will create empty placeholder components inline or just comment them out then uncomment.
// Actually, I'll assume I'll create them shortly and just structure the imports.

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Rajshree IAS Portal | Best UPSC & MPSC Coaching in Latur",
        template: "%s | Rajshree IAS Portal",
    },
    description: "Join Rajshree IAS Portal for comprehensive UPSC Civil Services and MPSC coaching in Latur. Expert faculty, personalized mentorship, complete study material and test series.",
    keywords: ["UPSC coaching Latur", "MPSC coaching Latur", "IAS coaching", "civil services preparation", "best UPSC institute Latur", "IAS Portal", "Rajshree IAS", "UPSC classes Latur", "IAS preparation"],
    authors: [{ name: "Rajshree IAS Portal" }],
    creator: "Rajshree IAS Portal",
    publisher: "Rajshree IAS Portal",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Rajshree IAS Portal | Best UPSC & MPSC Coaching in Latur",
        description: "Join Rajshree IAS Portal for comprehensive UPSC Civil Services and MPSC coaching. Expert faculty, personalized mentorship, complete study material.",
        url: "https://rajashreeiasPortal.com",
        siteName: "Rajshree IAS Portal",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rajshree IAS Portal | Best UPSC & MPSC Coaching",
        description: "Join Rajshree IAS Portal for comprehensive UPSC Civil Services and MPSC coaching in Latur.",
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
            >
                <Navbar />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
