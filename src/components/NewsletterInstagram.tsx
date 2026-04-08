import { useState } from "react";
import { Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const instagramImages = [
    "/images/salon/Signup Image.jpg",
    "/images/salon/Signup Image-001.jpg",
    "/images/salon/Signup Image-002.jpg",
    "/images/salon/Signup Image-003.jpg",
    "/images/salon/Signup Image-004.jpg",
];

const NewsletterInstagram = () => {
    const [email, setEmail] = useState("");
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`py-20 md:py-28 px-5 md:px-8 lg:px-16 xl:px-28 bg-white fade-in-section ${isVisible ? "is-visible" : ""}`}>
            <div className="max-w-[1400px] mx-auto">
                {/* Newsletter */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                    <div>
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px]">JOIN US</span>
                        <h2 className="font-heading font-normal text-3xl md:text-4xl lg:text-[50px] leading-[1.2] md:leading-[60px] mt-3 text-[rgb(10,4,4)]">Newsletter Signup</h2>
                    </div>
                    <div className="md:w-1/2 max-w-md w-full">
                        <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] block mb-4">Email Address</label>
                        <div className="flex items-center border-b border-border pb-2 gap-4 md:gap-0">
                            <Mail size={18} className="text-primary mr-3 hidden md:block" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                                className="flex-1 font-body font-normal text-[16px] leading-[26px] text-[rgb(10,4,4)] bg-transparent border-none outline-none placeholder:text-muted-foreground/60 min-w-0"
                            />
                            <div className="w-px h-5 bg-border mx-4 hidden md:block"></div>
                            <button className="font-body font-normal text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[1px] hover:text-[rgb(159,43,43)]/80 transition-colors whitespace-nowrap">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Instagram gallery */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {instagramImages.map((img, i) => (
                        <a
                            key={i}
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group overflow-hidden rounded-2xl aspect-square cursor-pointer block ${i === 4 ? "col-span-2 md:col-span-1" : ""
                                }`}
                        >
                            <img src={img} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                <img src="/images/salon/instagram.svg" alt="Instagram" className="w-12 h-12 -mb-4 brightness-0 invert" />
                                <span className="font-heading text-white text-lg">Follow us</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsletterInstagram;
