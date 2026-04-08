import { useState, useEffect, useRef } from "react";
import FadeSection from "../FadeSection";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
    {
        name: "Sarah M.",
        role: "CEO of Johnson Group",
        img: "/images/salon/review-02.jpg",
        text: "My skin has never felt so smooth and refreshed. The Signature Facial was incredible, and the results were immediate."
    },
    {
        name: "Michael R.",
        role: "Marketing Manager",
        img: "/images/salon/review-03.jpg",
        text: "I had an amazing experience at the salon. The staff was professional, and my haircut is exactly what I wanted. Will definitely return!"
    },
    {
        name: "Laura P.",
        role: "Interior Designer",
        img: "/images/salon/review-04.jpg",
        text: "The atmosphere is so relaxing, and the staff are incredibly professional. My pedicure was perfect, though the wait was a bit longer."
    },
    {
        name: "Jessica K.",
        role: "Bridal Client",
        img: "/images/salon/review-02.jpg",
        text: "They made me feel like a princess on my wedding day. My hair and makeup were absolutely perfect."
    },
    {
        name: "Emily R.",
        role: "New Client",
        img: "/images/salon/review-03.jpg",
        text: "I was nervous about trying a new salon, but they put me at ease immediately. I love my new haircut!"
    },
    {
        name: "Lisa T.",
        role: "Regular",
        img: "/images/salon/review-04.jpg",
        text: "Consistently excellent service. The best facial I've ever had in the city."
    },
    {
        name: "Mark D.",
        role: "Entrepreneur",
        img: "/images/salon/review-02.jpg",
        text: "Great vibe, professional staff, and top-notch haircut. Highly recommend."
    },
    {
        name: "Anna S.",
        role: "Graphic Designer",
        img: "/images/salon/review-03.jpg",
        text: "A truly relaxing experience. The attention to detail is unmatched."
    }
];

const AboutReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(reviews.length);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Create an extended array for infinite loop effect [Clone, Original, Clone]
    const extendedReviews = [...reviews, ...reviews, ...reviews];

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    useEffect(() => {
        if (!isTransitioning) return;

        const timeout = setTimeout(() => {
            setIsTransitioning(false);

            // Loop logic
            if (currentIndex <= 0) {
                // If we went past the first clone set (index 0), jump to end of middle set
                // Middle set starts at index `reviews.length` and ends at `reviews.length * 2 - 1`
                setCurrentIndex(reviews.length * 2 - 1); // Jump to last item of middle set is NOT correct if we scrolled 1 by 1.
                // Wait, easier Logic:
                // We have 3 sets: [Set1 (0-7), Set2 (8-15), Set3 (16-23)]
                // We start at index 8 (start of Set2).
                // If we reach index 7 (last of Set1), we jump to index 15 (last of Set2).
                setCurrentIndex(reviews.length * 2 - 1); // No wait.
                setCurrentIndex(reviews.length * 2 - 1); // Not quite right if showing multiple items.
                // Let's settle on: if index < reviews.length, jump to index + reviews.length
                setCurrentIndex(currentIndex + reviews.length);
            } else if (currentIndex >= reviews.length * 2) {
                // If we reached Set3 (start index 16), jump to Set2 start (index 8)
                setCurrentIndex(currentIndex - reviews.length);
            }
        }, 500); // Duration match css

        return () => clearTimeout(timeout);
    }, [currentIndex, isTransitioning]);

    // Simple robust loop check:
    // If we scroll backwards from index 8 (start of visible set) to index 7
    // After transition, jump to index 15.
    // If we scroll forward from index 15 (end of visible set) to index 16
    // After transition, jump to index 8.

    useEffect(() => {
        if (isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                if (currentIndex < reviews.length) {
                    setCurrentIndex(currentIndex + reviews.length);
                } else if (currentIndex >= reviews.length * 2) {
                    setCurrentIndex(currentIndex - reviews.length);
                }
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isTransitioning]);


    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 py-10 bg-[#fbf4ef] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex justify-between items-center mb-12">
                    <div>
                        <span className="font-body text-[14px] font-medium leading-[18px] uppercase tracking-[2px] text-[rgb(159,43,43)] mb-4 block">TESTIMONIALS</span>
                            <h2 className="font-heading text-[30px] md:text-[50px] font-normal leading-[1.2] md:leading-[60px] text-[rgb(10,4,4)]">What Our Client Say</h2>
                    </div>
                    <div className="hidden md:flex gap-4 md:mt-6">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full bg-[rgb(159,43,43)] flex items-center justify-center text-white cursor-pointer hover:bg-[rgb(140,30,30)] transition-colors"
                            aria-label="Previous Review"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-[rgb(159,43,43)] flex items-center justify-center text-white cursor-pointer hover:bg-[rgb(140,30,30)] transition-colors"
                            aria-label="Next Review"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </FadeSection>

                <div className="overflow-hidden" ref={containerRef}>
                    <div
                        className={`flex gap-8 ${isTransitioning ? 'transition-transform duration-300 ease-out' : ''} [--items-visible:1] md:[--items-visible:2] lg:[--items-visible:3]`}
                        style={{
                            transform: `translateX(calc(-1 * ${currentIndex} * ((100% + 32px) / var(--items-visible))))`
                        }}
                    >
                        {extendedReviews.map((r, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 bg-white p-8 rounded-[20px] shadow-sm flex flex-col justify-between"
                                style={{
                                    width: `calc((100% - (var(--items-visible) - 1) * 32px) / var(--items-visible))`
                                }}
                            >
                                <div>
                                    <div className="flex gap-1 text-[rgb(159,43,43)] mb-6">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="font-body text-[16px] font-normal leading-[26px] text-[rgb(80,80,80)] mb-8">
                                        "{r.text}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-[16px] font-normal leading-[21px] text-[rgb(10,4,4)]">{r.name}</h4>
                                        <p className="font-body text-[14px] font-normal leading-[20px] text-[rgb(80,80,80)]">{r.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex md:hidden justify-center gap-4 mt-8">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full bg-[rgb(159,43,43)] flex items-center justify-center text-white cursor-pointer hover:bg-[rgb(140,30,30)] transition-colors"
                        aria-label="Previous Review"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full bg-[rgb(159,43,43)] flex items-center justify-center text-white cursor-pointer hover:bg-[rgb(140,30,30)] transition-colors"
                        aria-label="Next Review"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutReviews;
