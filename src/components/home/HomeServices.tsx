import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import FadeSection from "../FadeSection";

const services = [
    { icon: "/images/salon/service-icon-1.svg", title: "Nail Services", desc: "Professional nail care and art designs for elegant hands.", slug: "nail-services" },
    { icon: "/images/salon/service-icon-2.svg", title: "Threading", desc: "Precise eyebrow and facial threading for clean looks.", slug: "threading" },
    { icon: "/images/salon/service-icon-3.svg", title: "Massage", desc: "Relaxing body massage treatments to relieve stress.", slug: "massage" },
    { icon: "/images/salon/service-icon-4.svg", title: "Lash Services", desc: "Stunning lash extensions and lifts for beautiful eyes.", slug: "lash-services" },
];

const HomeServices = () => {
    return (
        <section className="bg-primary py-20 md:py-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader label="WE OFFER" heading="Luxury Beauty Services Tailored to You" paragraph="We offer a wide range of beauty services designed to help you look and feel your best. Our expert team is dedicated to providing exceptional care and personalized treatments tailored to your unique needs." viewAllLink="/services" light />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <FadeSection key={i}>
                            <div className="space-y-5 group">
                                <Link to={`/services/${s.slug}`} className="block">
                                    <div className="w-20 h-20  flex items-center justify-center overflow-hidden mb-5">
                                        <img src={s.icon} alt={s.title} className="w-20 h-20 object-contain brightness-0 invert" />
                                    </div>
                                    <h3 className="font-heading font-normal text-[24px] leading-[34px] text-[#faf5f1] mb-5">{s.title}</h3>
                                    <p className="font-body font-normal text-[16px] leading-[26px] text-white/60 mb-5">{s.desc}</p>
                                    <span className="inline-block font-body font-medium text-[14px] leading-[14px] uppercase tracking-[1px] text-[#faf5f1] pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#faf5f1] after:transition-all after:duration-300 group-hover:after:w-full">
                                        View More
                                    </span>
                                </Link>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
