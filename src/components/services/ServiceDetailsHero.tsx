import FadeSection from "../FadeSection";
import { ServiceDetail } from "@/data/serviceDetails";

interface ServiceDetailsHeroProps {
    service: ServiceDetail;
}

const ServiceDetailsHero = ({ service }: ServiceDetailsHeroProps) => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-10 md:pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
                    <div>
                        <span className="font-body font-medium text-[12px] md:text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-2 block">
                            {service.category}
                        </span>
                        <h2 className="font-heading text-[30px] md:text-[36px] lg:text-[40px] xl:text-[50px] font-normal leading-[1.2] md:leading-[60px] text-[rgb(10,4,4)]">
                            {service.title}
                        </h2>
                    </div>
                    <p className="font-body font-normal text-[16px] md:text-[14px] lg:text-[16px] leading-[26px] md:leading-[22px] lg:leading-[26px] text-[rgb(80,80,80)] max-w-sm lg:max-w-lg xl:max-w-xl lg:text-left">
                        {service.heroDesc}
                    </p>
                </FadeSection>

                <FadeSection delay={0.2}>
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden">
                        <img
                            src={service.heroImage}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default ServiceDetailsHero;

