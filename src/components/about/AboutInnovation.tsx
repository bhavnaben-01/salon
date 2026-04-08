import { Award, Heart, Sparkles, Shield, User } from "lucide-react";
import FadeSection from "../FadeSection";
import { Link } from "react-router-dom";

const features = [
    { img: "/images/salon/AboutInnovation-icon-5.svg", label: "Non-Toxic Formula" },
    { img: "/images/salon/AboutInnovation-icon-4.svg", label: "Personalized Experience" },
    { img: "/images/salon/AboutInnovation-icon-3.svg", label: "Professional Care" },
    { img: "/images/salon/AboutInnovation-icon-2.svg", label: "We Love What We Do" },
    { img: "/images/salon/AboutInnovation-icon-1.svg", label: "Green Beauty" },
];

const AboutInnovation = () => {
    return (
        <section className="bg-[rgb(159,43,43)] py-20 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
                    <div className="max-w-xl">
                        <span className="font-body text-[14px] font-medium leading-[18px] uppercase tracking-[2px] text-[rgb(255,255,255)] mb-4 block">OUR PHILOSOPHY</span>
                        <h2 className="font-heading text-[30px] md:text-[50px] font-normal leading-[1.2] md:leading-[60px] text-[rgb(255,255,255)]">Innovative Solutions with a Personal Touch</h2>
                    </div>
                    <div className="flex flex-col items-start lg:items-start gap-6">
                        <p className="font-body text-[16px] font-normal leading-[26px] text-[rgba(255,255,255,0.6)] max-w-xl lg:text-left">
                            We believe beauty reflects inner confidence and individuality. Our approach blends personalized care with sustainability and innovation, empowering you to embrace your unique beauty with grace.
                        </p>
                        <Link
                            to="/book-appointment"
                            className="font-body text-[14px] font-medium leading-[18px] uppercase tracking-[1px] text-white pb-1 relative group w-fit"
                        >
                            BOOK A APPOINTMENT
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
                        </Link>
                    </div>
                </FadeSection>

                <FadeSection delay={0.2}>
                    <div className="rounded-[30px] overflow-hidden mb-16 h-[300px] md:h-[500px]">
                        <img src="/images/salon/about-images-6.png" alt="Innovative Solutions" className="w-full h-full object-cover" />
                    </div>
                </FadeSection>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {features.map((f, i) => (
                        <FadeSection key={i} delay={0.1 * i}>
                            <div className="text-left space-y-4 group flex flex-col items-start">
                                <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-start transition-transform">
                                    <img
                                        src={f.img}
                                        alt={f.label}
                                        className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert"
                                    />
                                </div>
                                <h4 className="font-heading text-[20px] md:text-[24px] font-normal leading-[34px] text-white">{f.label}</h4>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutInnovation;
