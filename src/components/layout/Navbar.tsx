"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
    Menu, X, Phone, ChevronDown, BookOpen, FileText, 
    GraduationCap, Users, Award, Newspaper, HelpCircle,
    MapPin, Clock
} from "lucide-react";
import siteSettings from "@/content/site-settings.json";

const coursesMenu = [
    {
        title: "By Program Type",
        items: [
            { name: "Foundation Course (1 Year)", href: "/courses#foundation", icon: GraduationCap },
            { name: "Mains Answer Writing", href: "/courses#mains", icon: FileText },
            { name: "Interview Guidance", href: "/courses#interview", icon: Users },
            { name: "Current Affairs Program", href: "/courses#current-affairs", icon: Newspaper },
        ]
    }
];

const resourcesMenu = [
    { name: "Daily Current Affairs", href: "/resources/current-affairs", icon: Newspaper },
    { name: "Previous Year Papers", href: "/resources/pyq", icon: FileText },
    { name: "Study Notes", href: "/resources/notes", icon: BookOpen },
    { name: "UPSC Syllabus", href: "/resources/syllabus", icon: GraduationCap },
    { name: "Topper's Strategy", href: "/resources/toppers", icon: Award },
    { name: "FAQs", href: "/resources/faqs", icon: HelpCircle },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-[#2D1B33] text-white py-2 px-3 sm:px-4 text-center text-xs sm:text-sm">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1.5 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#D9A15B]" />
                        <span>New Batch Starting Soon!</span>
                    </span>
                    <span className="hidden sm:inline text-white/60">|</span>
                    <span className="flex items-center gap-1.5 sm:gap-2">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#D9A15B]" />
                        <a href={`tel:+91${siteSettings.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#D9A15B] transition-colors text-xs sm:text-sm">
                            +91 {siteSettings.contact.phone}
                        </a>
                    </span>
                    <span className="hidden sm:inline text-white/60">|</span>
                    <Link href="/enroll" className="text-[#D9A15B] hover:underline font-medium text-xs sm:text-sm">
                        Register Now →
                    </Link>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-sm",
                scrolled 
                    ? "bg-white/95 shadow-lg border-b border-gray-200" 
                    : "bg-white/90 border-b border-gray-100"
            )}>
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative">
                                <Image
                                    src="/logo.png"
                                    alt="Rajashree's IAS Portal Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base sm:text-lg lg:text-xl font-bold text-[#2D1B33] font-serif leading-tight">
                                    Rajashree's IAS Portal
                                </span>
                                <span className="text-[10px] sm:text-xs lg:text-xs text-[#D9A15B] font-medium tracking-wide">
                                    The digital Gurukul
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:gap-1">
                            {/* Courses Dropdown */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setActiveMenu('courses')}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button className={cn(
                                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                    pathname.startsWith('/courses')
                                        ? "text-[#2D1B33] bg-[#2D1B33]/10"
                                        : "text-[#2D1B33]/80 hover:text-[#2D1B33] hover:bg-[#2D1B33]/5"
                                )}>
                                    Courses
                                    <ChevronDown className={cn(
                                        "w-4 h-4 transition-transform",
                                        activeMenu === 'courses' && "rotate-180"
                                    )} />
                                </button>

                                {/* Mega Menu */}
                                {activeMenu === 'courses' && (
                                    <div className="absolute top-full left-0 pt-2">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 p-6 w-[500px] grid grid-cols-2 gap-6">
                                            {coursesMenu.map((section) => (
                                                <div key={section.title}>
                                                    <h4 className="text-xs font-semibold text-[#D9A15B] uppercase tracking-wider mb-3">
                                                        {section.title}
                                                    </h4>
                                                    <div className="space-y-1">
                                                        {section.items.map((item) => (
                                                            <Link
                                                                key={item.href}
                                                                href={item.href}
                                                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FAF9F6] transition-colors group"
                                                            >
                                                                <item.icon className="w-4 h-4 text-[#2D1B33]/40 group-hover:text-[#D9A15B]" />
                                                                <span className="text-sm text-[#2D1B33]/80 group-hover:text-[#2D1B33]">
                                                                    {item.name}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="col-span-2 pt-4 border-t border-gray-100">
                                                <Link 
                                                    href="/courses"
                                                    className="flex items-center justify-center gap-2 text-sm font-medium text-[#2D1B33] hover:text-[#D9A15B]"
                                                >
                                                    View All Courses →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Resources Dropdown */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setActiveMenu('resources')}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button className={cn(
                                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                    pathname.startsWith('/resources')
                                        ? "text-[#2D1B33] bg-[#2D1B33]/10"
                                        : "text-[#2D1B33]/80 hover:text-[#2D1B33] hover:bg-[#2D1B33]/5"
                                )}>
                                    Free Resources
                                    <ChevronDown className={cn(
                                        "w-4 h-4 transition-transform",
                                        activeMenu === 'resources' && "rotate-180"
                                    )} />
                                </button>

                                {activeMenu === 'resources' && (
                                    <div className="absolute top-full left-0 pt-2">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 p-4 w-[280px]">
                                            <div className="space-y-1">
                                                {resourcesMenu.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] transition-colors group"
                                                    >
                                                        <item.icon className="w-4 h-4 text-[#2D1B33]/40 group-hover:text-[#D9A15B]" />
                                                        <span className="text-sm text-[#2D1B33]/80 group-hover:text-[#2D1B33]">
                                                            {item.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* About Link */}
                            <Link
                                href="/about"
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                    pathname === '/about'
                                        ? "text-[#2D1B33] bg-[#2D1B33]/10"
                                        : "text-[#2D1B33]/80 hover:text-[#2D1B33] hover:bg-[#2D1B33]/5"
                                )}
                            >
                                About Us
                            </Link>

                            {/* Contact Link */}
                            <Link
                                href="/enroll"
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                    pathname === '/enroll'
                                        ? "text-[#2D1B33] bg-[#2D1B33]/10"
                                        : "text-[#2D1B33]/80 hover:text-[#2D1B33] hover:bg-[#2D1B33]/5"
                                )}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Right Side - CTA & Location */}
                        <div className="hidden lg:flex lg:items-center lg:gap-4">
                            <div className="flex items-center gap-2 text-sm text-[#2D1B33]/60">
                                <MapPin className="w-4 h-4 text-[#D9A15B]" />
                                <span>Latur, Maharashtra</span>
                            </div>
                            <Link href="/enroll">
                                <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#D9A15B] to-[#c4923f] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#D9A15B]/25 transition-all cursor-pointer">
                                    Enroll Now
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2D1B33]/5 flex items-center justify-center text-[#2D1B33] hover:bg-[#2D1B33]/10 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg max-h-[70vh] sm:max-h-[80vh] overflow-y-auto">
                        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                            {/* Courses Section */}
                            <div>
                                <p className="text-xs font-semibold text-[#D9A15B] uppercase tracking-wider mb-2 px-2">
                                    Courses
                                </p>
                                <div className="space-y-1">
                                    {coursesMenu.flatMap(section => section.items).map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] active:bg-[#FAF9F6] transition-colors min-h-[44px]"
                                        >
                                            <item.icon className="w-4 h-4 text-[#2D1B33]/40" />
                                            <span className="text-sm text-[#2D1B33]/80">{item.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Resources Section */}
                            <div>
                                <p className="text-xs font-semibold text-[#D9A15B] uppercase tracking-wider mb-2 px-2">
                                    Free Resources
                                </p>
                                <div className="space-y-1">
                                    {resourcesMenu.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] active:bg-[#FAF9F6] transition-colors min-h-[44px]"
                                        >
                                            <item.icon className="w-4 h-4 text-[#2D1B33]/40" />
                                            <span className="text-sm text-[#2D1B33]/80">{item.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Other Links */}
                            <div className="space-y-1">
                                <Link
                                    href="/about"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] active:bg-[#FAF9F6] text-sm text-[#2D1B33]/80 min-h-[44px]"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/enroll"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] active:bg-[#FAF9F6] text-sm text-[#2D1B33]/80 min-h-[44px]"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            {/* Mobile CTA */}
                            <div className="pt-3 sm:pt-4">
                                <Link href="/enroll" onClick={() => setIsOpen(false)}>
                                    <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D9A15B] to-[#c4923f] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#D9A15B]/25 transition-all cursor-pointer min-h-[48px]">
                                        Enroll Now
                                    </button>
                                </Link>
                                <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-[#2D1B33]/60">
                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#D9A15B]" />
                                    <a href="tel:+918668275251" className="hover:text-[#D9A15B] transition-colors">+91 86682 75251</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
