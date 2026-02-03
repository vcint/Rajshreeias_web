"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageSquare, Instagram, Star, Play, Pause } from "lucide-react";

// Sample data structure - you can add your actual review images here
const studentReviews = [
    {
        id: 1,
        studentName: "Asawari Mamadge",
        course: "UPSC CSE",
        platform: "WhatsApp",
        imageUrl: "/reviews/AsawariM.jpeg", // Add your actual image path
        rating: 5,
        preview: " ",
        isVideo: false,
    },
    {
        id: 2,
        studentName: "Pallavi Navgire",
        course: "MPSC",
        platform: "WhatsApp",
        imageUrl: "/reviews/PallaviN.jpeg",
        rating: 5,
        preview: " ",
        isVideo: false,
    },
    {
        id: 3,
        studentName: "Almas Bagwan",
        course: "History Optional",
        platform: "WhatsApp",
        imageUrl: "/reviews/AlmasB.jpeg",
        rating: 5,
        preview: " ",
        isVideo: false,
    },
    {
        id: 4,
        studentName: "Bhairavi",
        course: "Foundation Course",
        platform: "WhatsApp",
        imageUrl: "/reviews/Bhairavi.jpeg",
        rating: 5,
        preview: " ",
        isVideo: false,
    },
    {
        id: 5,
        studentName: "Meraj Khanapure",
        course: "UPSC CSE",
        platform: "Notepad",
        imageUrl: "/reviews/MerajK.jpeg",
        rating: 5,
        preview: " ",
        isVideo: false,
    },
    {
        id: 6,
        studentName: "Priya Sangle",
        course: "Answer Writing",
        platform: "WhatsApp",
        imageUrl: "/reviews/PriyaS.jpeg",
        rating: 5,
        preview: " ",
        isVideo: false,
    },
    {
        id: 7,
        studentName: "Pranav Lohiya",
        course: "Answer Writing",
        platform: "WhatsApp",
        imageUrl: "/reviews/PranavL.jpeg",
        rating: 5,
        preview: " ",
        isVideo: false,
    },
];

const platformIcons = {
    WhatsApp: <MessageSquare className="w-4 h-4 text-green-500" />,
    Instagram: <Instagram className="w-4 h-4 text-pink-500" />,
};

export default function StudentReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedReview, setSelectedReview] = useState<typeof studentReviews[0] | null>(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    // Update items per slide based on screen size
    useEffect(() => {
        const updateItemsPerSlide = () => {
            const newItemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            
            if (newItemsPerSlide !== itemsPerSlide) {
                setItemsPerSlide(newItemsPerSlide);
                // Reset current index to avoid out of bounds
                setCurrentIndex(0);
            }
        };

        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);
        return () => window.removeEventListener('resize', updateItemsPerSlide);
    }, [itemsPerSlide]);

    const maxSlides = Math.ceil(studentReviews.length / itemsPerSlide);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoScrolling || isPaused || selectedReview) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % maxSlides);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoScrolling, isPaused, selectedReview, maxSlides]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % maxSlides);
        setIsAutoScrolling(false); // Pause auto-scroll when manually navigating
        setTimeout(() => setIsAutoScrolling(true), 10000); // Resume after 10 seconds
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
        setIsAutoScrolling(false); // Pause auto-scroll when manually navigating
        setTimeout(() => setIsAutoScrolling(true), 10000); // Resume after 10 seconds
    };

    const toggleAutoScroll = () => {
        setIsAutoScrolling(!isAutoScrolling);
    };

    const visibleReviews = studentReviews.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide);

    return (
        <>
            <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#FAF9F6]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-sm font-medium text-[#D9A15B] uppercase tracking-wider mb-4">
                        Real Student Feedback
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B33] font-serif mb-6">
                        What Our Students Are Saying
                    </h2>
                    <p className="text-[#2D1B33]/60 text-lg">
                        Authentic reviews from our students shared on WhatsApp and social media platforms
                    </p>
                </div>

                {/* Reviews Carousel */}
                <div 
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Auto-scroll Controls */}
                    <div className="absolute top-0 right-0 -translate-y-12 z-10 flex items-center gap-2">
                        <button
                            onClick={toggleAutoScroll}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isAutoScrolling 
                                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {isAutoScrolling ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                            {isAutoScrolling ? 'Auto-scroll ON' : 'Auto-scroll OFF'}
                        </button>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[#2D1B33]/10 flex items-center justify-center hover:bg-[#D9A15B] hover:text-white transition-all group"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[#2D1B33]/10 flex items-center justify-center hover:bg-[#D9A15B] hover:text-white transition-all group"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleReviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl shadow-lg border border-[#2D1B33]/5 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                onClick={() => setSelectedReview(review)}
                            >
                                {/* Review Image */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                    <Image
                                        src={review.imageUrl}
                                        alt={`Review from ${review.studentName}`}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/placeholder-review.svg';
                                        }}
                                        priority={false}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDSNmhX259ufIhY+MS0ZRNB/9k="
                                    />
                                    
                                    {/* Platform Badge */}
                                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full text-xs font-medium">
                                        {platformIcons[review.platform as keyof typeof platformIcons]}
                                        <span className="text-[#2D1B33]/70">{review.platform}</span>
                                    </div>

                                    {/* Video Indicator */}
                                    {review.isVideo && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                <Play className="w-6 h-6 text-[#D9A15B] ml-1" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Preview Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <div className="flex items-center gap-1 mb-1">
                                            {Array.from({ length: review.rating }).map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-white text-xs line-clamp-2">
                                            {review.preview}
                                        </p>
                                    </div>
                                </div>

                                {/* Student Info */}
                                <div className="p-4">
                                    <h4 className="font-semibold text-[#2D1B33] mb-1">
                                        {review.studentName}
                                    </h4>
                                    <p className="text-sm text-[#2D1B33]/60">
                                        {review.course}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoScrolling(false);
                                    setTimeout(() => setIsAutoScrolling(true), 10000);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${ 
                                    index === currentIndex 
                                        ? 'bg-[#D9A15B] w-6' 
                                        : 'bg-[#2D1B33]/20 hover:bg-[#2D1B33]/40'
                                }`}
                            />
                        ))}
                        
                        {/* Auto-scroll Progress Indicator */}
                        {isAutoScrolling && !isPaused && !selectedReview && (
                            <div className="ml-4 flex items-center gap-1">
                                <div className="w-16 h-2 bg-[#2D1B33]/10 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-[#D9A15B] rounded-full animate-pulse"
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>

        {/* Modal for Full Review */}
            {selectedReview && (
                <div 
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedReview(null)}
                >
                    <div 
                        className="relative w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxHeight: '90vh' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedReview(null)}
                            className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors"
                        >
                            ×
                        </button>
                        
                        {/* Image Container - Fixed aspect ratio */}
                        <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                            <Image
                                src={selectedReview.imageUrl}
                                alt={`Review from ${selectedReview.studentName}`}
                                fill
                                className="object-contain bg-gray-100"
                                sizes="400px"
                                priority
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/placeholder-review.svg';
                                }}
                            />
                            
                            {/* Platform Badge */}
                            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full text-xs font-medium">
                                {platformIcons[selectedReview.platform as keyof typeof platformIcons]}
                                <span className="text-[#2D1B33]/80">{selectedReview.platform}</span>
                            </div>
                            
                            {/* Video Play Button */}
                            {selectedReview.isVideo && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                        <Play className="w-6 h-6 text-[#D9A15B] ml-1" />
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Student Info */}
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-[#2D1B33] text-lg">
                                    {selectedReview.studentName}
                                </h3>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: selectedReview.rating }).map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            
                            <p className="text-sm text-[#2D1B33]/60 mb-3">
                                {selectedReview.course}
                            </p>
                            
                            {/* Review Preview */}
                            <div className="bg-[#FAF9F6] rounded-lg p-3 mb-3">
                                <p className="text-xs text-[#2D1B33]/80 italic">
                                    "{selectedReview.preview}"
                                </p>
                            </div>
                            
                            <div className="text-xs text-[#2D1B33]/50 text-center">
                                Tap outside to close
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}