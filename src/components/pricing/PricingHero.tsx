import FadeSection from "../FadeSection";

const PricingHero = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-10 md:pt-20 pb-16">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                    <div>
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-2 md:mb-4 block">SERVICE PACKAGES</span>
                        <h1 className="font-heading font-normal text-[30px] md:text-[50px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">Pricing Plan</h1>
                    </div>
                    <p className="font-body font-normal text-[16px] md:text-[14px] lg:text-[16px] leading-[26px] md:leading-[22px] lg:leading-[26px] text-[rgb(80,80,80)] max-w-xl lg:text-right">
                        Find the perfect package that suits your needs and budget. We offer a range of services designed to provide you with exceptional value and quality.
                    </p>
                </FadeSection>
            </div>
        </section>
    );
};

export default PricingHero;
