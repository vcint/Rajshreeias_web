import Link from "next/link";
import Image from "next/image";
import { Instagram, Send, Youtube, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import siteSettings from "@/content/site-settings.json";

const courses = [
    { name: "UPSC Civil Services", href: "/courses#upsc" },
    { name: "MPSC State Services", href: "/courses#mpsc" },
    { name: "UPSC Prelims", href: "/courses#prelims" },
    { name: "Mains Answer Writing", href: "/courses#mains" },
    { name: "History Optional", href: "/courses#optional" },
    { name: "Current Affairs", href: "/courses#current-affairs" },
];

const resources = [
    { name: "Daily Current Affairs", href: "/resources/current-affairs" },
    { name: "Previous Year Papers", href: "/resources/pyq" },
    { name: "Study Notes", href: "/resources/notes" },
    { name: "UPSC Syllabus", href: "/resources/syllabus" },
    { name: "Topper's Strategy", href: "/resources/toppers" },
    { name: "FAQs", href: "/resources/faqs" },
];

const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Faculty", href: "/about#faculty" },
    { name: "Contact Us", href: "/enroll" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#2D1B33]">
            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-white font-serif">
                                Stay Updated with UPSC Preparation Tips
                            </h3>
                            <p className="text-white/60 text-sm mt-1">
                                Get daily current affairs and study material directly in your inbox
                            </p>
                        </div>
                        <div className="flex gap-3 w-full lg:w-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 lg:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D9A15B] transition-colors"
                            />
                            <button className="px-6 py-3 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors flex items-center gap-2">
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/logo.png"
                                    alt="Rajashree IAS Portal Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white font-serif">Rajashree IAS Portal</h3>
                                <span className="text-xs text-[#D9A15B] font-medium tracking-wider">Excellence in Civil Services Coaching</span>
                            </div>
                        </div>
                        
                        <p className="text-sm leading-relaxed text-white/60 max-w-sm">
                            Rajashree's IAS Portal is dedicated to providing quality education for UPSC and MPSC aspirants. 
                            Our experienced faculty, comprehensive study material, and personalized mentorship help students 
                            achieve their dream of becoming civil servants.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href={`tel:+91${siteSettings.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-white/80 hover:text-[#D9A15B] transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+91 {siteSettings.contact.phone}</span>
                            </a>
                            <a href={`mailto:${siteSettings.contact.email}`} className="flex items-center gap-3 text-white/80 hover:text-[#D9A15B] transition-colors">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">{siteSettings.contact.email}</span>
                            </a>
                            <div className="flex items-start gap-3 text-white/60">
                                <MapPin className="w-4 h-4 text-[#D9A15B] flex-shrink-0 mt-0.5" />
                                <span className="text-sm">Latur, Maharashtra, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60">
                                <Clock className="w-4 h-4 text-[#D9A15B]" />
                                <span className="text-sm">Mon - Sat: 9:00 AM - 8:00 PM</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a 
                                href="https://www.instagram.com/rajashreesias" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E4405F] transition-colors group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a 
                                href="https://t.me/rajashreesiasportal" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0088cc] transition-colors group"
                                aria-label="Telegram"
                            >
                                <Send className="w-5 h-5 text-white" />
                            </a>
                            <a 
                                href="https://youtube.com/@rajashreesiasportal" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-colors group"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Our Courses</h4>
                        <ul className="space-y-3">
                            {courses.map((item) => (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href} 
                                        className="text-sm text-white/60 hover:text-[#D9A15B] transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#D9A15B] transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Free Resources</h4>
                        <ul className="space-y-3">
                            {resources.map((item) => (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href} 
                                        className="text-sm text-white/60 hover:text-[#D9A15B] transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#D9A15B] transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href} 
                                        className="text-sm text-white/60 hover:text-[#D9A15B] transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#D9A15B] transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="mt-8">
                            <Link href="/enroll">
                                <button className="w-full py-3 bg-[#D9A15B] text-white font-semibold rounded-lg hover:bg-[#c4923f] transition-colors text-sm">
                                    Enroll Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
                        <p>© 2026 Rajashree's IAS Portal. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <Link href="/about" className="hover:text-[#D9A15B] transition-colors">About Us</Link>
                            <Link href="/courses" className="hover:text-[#D9A15B] transition-colors">Courses</Link>
                            <Link href="/enroll" className="hover:text-[#D9A15B] transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
