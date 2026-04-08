import { Link } from "react-router-dom";
import FadeSection from "../FadeSection";
import { ServiceDetail } from "@/data/serviceDetails";

const allServices = [
    { title: "Nail Services", slug: "nail-services" },
    { title: "Threading", slug: "threading" },
    { title: "Massage", slug: "massage" },
    { title: "Lash Services", slug: "lash-services" },
    { title: "Makeup Services", slug: "makeup-services" },
    { title: "Hair Services", slug: "hair-services" },
    { title: "Skin Care", slug: "skin-care" },
    { title: "Waxing Services", slug: "waxing-services" },
];

interface ServiceDetailsContentProps {
    service: ServiceDetail;
}

const ServiceDetailsContent = ({ service }: ServiceDetailsContentProps) => {
    const { content } = service;

    return (
        <section className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 xl:px-28 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 md:gap-12 lg:gap-16">

                {/* Main Content (70%) */}
                <div className="md:col-span-10 lg:col-span-7 space-y-8 md:space-y-12 order-2 lg:order-1">
                    <FadeSection>
                        <h2 className="font-heading font-normal text-[28px] sm:text-[32px] md:text-[40px] leading-[1.2] text-[rgb(10,4,4)] mb-4 md:mb-6">
                            {content.heading1}
                        </h2>
                        <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[rgb(80,80,80)] mb-6 md:mb-8">
                            {content.desc1}
                        </p>

                        <div className="bg-[#FDFBF7] p-6 md:p-10 rounded-2xl mb-8 md:mb-12">
                            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[31px] text-[rgb(10,4,4)] text-center">
                                "{content.quote}"
                            </p>
                        </div>

                        <div className="rounded-[20px] overflow-hidden mb-8 md:mb-12 h-[250px] sm:h-[350px] md:h-auto">
                            <img src={content.contentImage} alt={content.heading1} className="w-full h-full md:h-auto object-cover" />
                        </div>

                        <h3 className="font-heading font-normal text-[24px] md:text-[26px] leading-[32px] md:leading-[36px] text-[rgb(10,4,4)] mb-4">
                            {content.heading2}
                        </h3>
                        <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[rgb(80,80,80)] mb-6">
                            {content.desc2}
                        </p>

                        <h4 className="font-heading font-normal text-[16px] md:text-[18px] uppercase tracking-[1px] text-[rgb(10,4,4)] mb-4">
                            {content.featuresTitle}
                        </h4>
                        <ul className="space-y-3 md:space-y-4 mb-8">
                            {content.features.map((item, i) => (
                                <li key={i} className="flex items-start md:items-center gap-3 font-body text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[rgb(80,80,80)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(159,43,43)] mt-2 md:mt-0 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[rgb(80,80,80)] mb-8 md:mb-12">
                            {content.midDesc}
                        </p>

                        <h3 className="font-heading font-normal text-[24px] md:text-[26px] leading-[32px] md:leading-[36px] text-[rgb(10,4,4)] mb-4">
                            {content.heading3}
                        </h3>
                        <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[rgb(80,80,80)] mb-6">
                            {content.desc3}
                        </p>

                        <h4 className="font-heading font-normal text-[16px] md:text-[18px] uppercase tracking-[1px] text-[rgb(10,4,4)] mb-4">
                            {content.tipsTitle}
                        </h4>
                        <ul className="space-y-3 md:space-y-4 mb-8">
                            {content.tips.map((item, i) => (
                                <li key={i} className="flex items-start md:items-center gap-3 font-body text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[rgb(80,80,80)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(159,43,43)] mt-2 md:mt-0 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[rgb(80,80,80)]">
                            {content.finalDesc}
                        </p>
                    </FadeSection>
                </div>

                {/* Sidebar (30%) */}
                <div className="md:col-span-10 lg:col-span-3 order-1 lg:order-2">
                    <FadeSection delay={0.2} className=" top-24">
                        <div className="border border-[rgb(159,43,43)] rounded-[20px] p-6 md:p-8 bg-transparent">
                            <h4 className="font-heading font-normal text-[20px] md:text-[24px] leading-[30px] md:leading-[34px] text-[rgb(159,43,43)] mb-4">
                                Available services
                            </h4>
                            <div className="w-full h-[1px] bg-[rgb(159,43,43)] mb-5 md:mb-6 opacity-40"></div>

                            <div className="space-y-3">
                                {allServices.map((s, i) => (
                                    <Link
                                        key={i}
                                        to={`/services/${s.slug}`}
                                        className={`block font-body text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] transition-colors ${s.slug === service.slug
                                            ? "text-[rgb(159,43,43)] font-medium"
                                            : "text-[rgb(80,80,80)] hover:text-[rgb(159,43,43)]"
                                            }`}
                                    >
                                        {s.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </FadeSection>
                </div>

            </div>
        </section>
    );
};

export default ServiceDetailsContent;

