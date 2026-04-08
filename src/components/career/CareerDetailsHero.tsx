import FadeSection from "../FadeSection";

interface CareerDetailsHeroProps {
    title: string;
}

const CareerDetailsHero = ({ title }: CareerDetailsHeroProps) => {
    return (
        <section className="px-5 md:px-8 lg:px-16 xl:px-28 pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection>
                    <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-4 block">OPEN POSITION</span>
                    <h1 className="font-heading font-normal text-[30px] md:text-[50px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">{title}</h1>
                </FadeSection>
            </div>
        </section>
    );
};

export default CareerDetailsHero;
