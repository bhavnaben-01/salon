import FadeSection from "../FadeSection";

const CareerHero = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-20 pb-16">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
                    <div className="flex-1">
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-2 md:mb-4 block">JOIN OUR TEAM</span>
                        <h1 className="font-heading font-normal text-4xl md:text-[36px] lg:text-[50px] lg:leading-[50px] xl:text-[64px] leading-[1.1] md:leading-[40px] xl:leading-[63px] text-[rgb(10,4,4)]">Be a Part our team</h1>
                    </div>
                    <div className="flex-1 md:max-w-xl pt-2 md:pt-4">
                        <p className="font-body font-normal text-[16px] md:text-[14px] lg:text-[16px] leading-[26px] md:leading-[22px] lg:leading-[26px] text-[rgb(80,80,80)]">
                            At Solano , we’re always on the lookout for passionate and talented individuals to join our growing team. If you have a love for beauty, a commitment to excellence, and a desire to work in a vibrant and supportive environment, we’d love to hear from you.
                        </p>
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default CareerHero;
