import { Link } from "react-router-dom";
import FadeSection from "../FadeSection";

const allServices = [
    { icon: "/images/salon/service-icon-1.svg", title: "Nail Services", desc: "We offer everything from classic manicures and pedicures to creative nail art", slug: "nail-services" },
    { icon: "/images/salon/service-icon-2.svg", title: "Threading", desc: "Our threading services are designed to transform your look and boost your confidence.", slug: "threading" },
    { icon: "/images/salon/service-icon-3.svg", title: "Massage", desc: "Relax with our aromatherapy massage, using personalized essential oils for a soothing experience.", slug: "massage" },
    { icon: "/images/salon/service-icon-4.svg", title: "Lash Services", desc: "Enhance your natural lashes with a lift and tint, creating a beautiful, curled appearance.", slug: "lash-services" },
    { icon: "/images/salon/service-icon-5.svg", title: "Makeup Services", desc: "Our makeup services are designed to transform your look and boost your confidence.", slug: "makeup-services" },
    { icon: "/images/salon/service-icon-6.svg", title: "Hair Services", desc: "Our hair services are designed to transform your look and boost your confidence.", slug: "hair-services" },
    { icon: "/images/salon/service-icon-7.svg", title: "Skin Care", desc: "Rejuvenating facials and advanced skincare solutions for glowing, healthy skin.", slug: "skin-care" },
    { icon: "/images/salon/service-icon-8.svg", title: "Waxing Services", desc: "We use high-quality wax to minimize discomfort and ensure long-lasting results .", slug: "waxing-services" },
];

const ServicesList = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pb-20 md:pb-28">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-12">
                    {allServices.map((s, i) => (
                        <FadeSection key={i}>
                            <div className="space-y-4">
                                                        <Link to={`/services/${s.slug}`} className="group block cursor-pointer">
                                
                                <div className="w-[70px] h-[70px] mb-6">
                                    <img src={s.icon} alt={s.title} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="font-heading font-normal text-[24px] leading-[30px] text-[rgb(10,4,4)] mb-2">{s.title}</h3>
                                <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)] mb-2">{s.desc}</p>
                                <span
                                    
                                className="inline-block font-body text-[14px] leading-[26px] font-semibold uppercase tracking-[2px] text-[rgb(159,43,43)] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-[rgb(159,43,43)] after:transition-all after:duration-300 group-hover:after:w-full"
                                >
                                    VIEW MORE
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

export default ServicesList;
