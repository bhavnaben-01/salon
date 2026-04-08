import { useState } from "react";
import { Star } from "lucide-react";
import FadeSection from "../FadeSection";

const testimonials = [
    { text: "Solaro transformed my look completely. The team is incredibly skilled and made me feel so comfortable. I couldn't be happier with the results!", author: "Sarah Johnson", role: "Regular Client", avatar: "/images/salon/review-02.jpg" },
    { text: "The best salon experience I've ever had. From the moment I walked in, every detail was perfect. Highly recommend their hair treatments!", author: "Emily Davis", role: "New Client", avatar: "/images/salon/review-03.jpg" },
    { text: "Amazing service and atmosphere. The stylists are true artists who really listen to what you want. I'll definitely be coming back!", author: "Jessica Williams", role: "VIP Member", avatar: "/images/salon/review-04.jpg" },
];

const HomeTestimonials = () => {
    const [testimonialIdx, setTestimonialIdx] = useState(0);

    return (
        <section className="pb-20 md:pb-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="font-body text-sm font-medium uppercase tracking-[2px] text-primary">TESTIMONIALS</span>
                        <h2 className="font-heading text-3xl md:text-[50px] md:leading-[1.2] mt-3 text-foreground">What Our Client Say</h2>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <button onClick={() => setTestimonialIdx(Math.max(0, testimonialIdx - 1))} className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                            <img src="/images/salon/left-arrow.jpg" alt="Prev" className="w-4 h-4 brightness-0 invert" />
                        </button>
                        <button onClick={() => setTestimonialIdx(Math.min(testimonials.length - 1, testimonialIdx + 1))} className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                            <img src="/images/salon/right-arrow.jpg" alt="Next" className="w-4 h-4 brightness-0 invert" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <FadeSection key={i}>
                            <div className="bg-card rounded-[20px] p-8 md:p-10 shadow-sm border border-border/50">
                                <div className="flex gap-1 mb-5">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-primary text-primary" />)}
                                </div>
                                <p className="font-body text-base leading-[1.6] text-muted-foreground mb-8">{t.text}</p>
                                <div className="flex items-center gap-3">
                                    <img src={t.avatar} alt={t.author} className="w-11 h-11 rounded-full object-cover" />
                                    <div>
                                        <p className="font-heading text-base text-foreground">{t.author}</p>
                                        <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonials;
