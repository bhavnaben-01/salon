import FadeSection from "../FadeSection";

const ServicesHero = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-12 md:pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start md:items-end md:mb-6 gap-6">
                    <div>
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-2 block">WHO WE ARE</span>
                        <h1 className="font-heading font-normal text-[30px] md:text-[50px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">Our Services</h1>
                    </div>
                    <p className="font-body font-normal text-[16px] md:text-[14px] lg:text-[16px] leading-[26px] md:leading-[22px] lg:leading-[26px] text-[rgb(80,80,80)] max-w-sm lg:max-w-lg xl:max-w-xl lg:text-left">
                        We offer a wide range of beauty services designed to help you look and feel your best. Our expert team is dedicated to providing exceptional care and personalized treatments tailored to your unique needs.
                    </p>
                </FadeSection>
            </div>
        </section>
    );
};

export default ServicesHero;
