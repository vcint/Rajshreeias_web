"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";

export default function ScrollCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setShowOptions(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const phoneNumber = "+918668275251";
    const whatsappUrl = `https://wa.me/918668275251?text=${encodeURIComponent("Hi! I'm interested in joining Rajashree's IAS Portal. Please share more details about your courses.")}`;

    if (!isVisible) return null;

    return (
        <>
            {/* Mobile Bottom Sheet CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
                {/* Main CTA Bar */}
                <button
                    onClick={() => setShowOptions(!showOptions)}
                    className="bg-[#D9A15B] text-white px-2 py-2 flex items-center justify-between min-h-[44px] w-full hover:bg-[#c9994d] transition-colors active:scale-[0.98] cursor-pointer"
                    aria-label={showOptions ? "Hide contact options" : "Show contact options"}
                    aria-expanded={showOptions}
                >
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <Phone className="w-3 h-3 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                            <div className="font-semibold text-xs truncate">Need Help?</div>
                            <div className="text-xs opacity-90 truncate">Get guidance</div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ml-1">
                        <ChevronUp className={`w-3 h-3 transition-transform ${showOptions ? 'rotate-180' : ''}`} />
                    </div>
                </button>

                {/* Expandable Options */}
                {showOptions && (
                    <div className="bg-white border-t border-gray-200 px-2 py-2 shadow-lg w-full">
                        <div className="grid grid-cols-2 gap-1 w-full">
                            <a
                                href={`tel:${phoneNumber}`}
                                className="flex flex-col items-center gap-0.5 p-1.5 bg-[#2D1B33] text-white rounded-md hover:bg-[#3d2a43] transition-colors active:scale-95 min-h-[44px]"
                            >
                                <Phone className="w-3 h-3" />
                                <span className="text-xs font-medium text-center leading-tight">Call Now</span>
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-0.5 p-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors active:scale-95 min-h-[44px]"
                            >
                                <MessageCircle className="w-3 h-3" />
                                <span className="text-xs font-medium text-center leading-tight">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Floating CTA */}
            <div className="hidden md:block fixed bottom-6 right-6 z-50">
                <div className="relative group">
                    {/* Call Option (Desktop) */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="absolute bottom-full right-0 mb-4 flex items-center gap-3 bg-[#2D1B33] hover:bg-[#3d2a43] text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    >
                        <div className="p-2 bg-[#D9A15B] rounded-full">
                            <Phone className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-sm">Call Now</div>
                            <div className="text-xs opacity-80">+91 86682 75251</div>
                        </div>
                    </a>

                    {/* WhatsApp Option (Desktop) */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-full right-0 mb-20 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                        style={{ transitionDelay: '0.1s' }}
                    >
                        <div className="p-2 bg-white rounded-full">
                            <MessageCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-sm">WhatsApp</div>
                            <div className="text-xs opacity-80">Quick Chat</div>
                        </div>
                    </a>

                    {/* Main Floating Button */}
                    <button className="relative bg-[#D9A15B] hover:bg-[#c4923f] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 p-4 group">
                        {/* Pulse Animation */}
                        <span className="absolute inset-0 rounded-full bg-[#D9A15B] animate-ping opacity-25" />

                        {/* Button Content */}
                        <div className="relative">
                            <Phone className="w-6 h-6" />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Get in Touch
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}