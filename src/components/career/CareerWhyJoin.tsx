import { CheckCircle } from "lucide-react";
import FadeSection from "../FadeSection";



const CareerWhyJoin = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pb-20 md:py-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-20 items-center">
                    <FadeSection className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-2 md:mb-4 block">OUR JOURNEY</span>
                            <h1 className="font-heading font-normal text-4xl md:text-[36px] lg:text-[50px] lg:leading-[50px] xl:text-[64px] leading-[1.1] md:leading-[40px] xl:leading-[63px] text-[rgb(10,4,4)]">Why Work With Us?</h1>
                        </div>
                        <p className="font-body font-normal text-[16px] md:text-[14px] lg:text-[16px] leading-[26px] md:leading-[22px] lg:leading-[26px] text-[rgb(80,80,80)]">
                            At Solano , we pride ourselves on fostering a positive and collaborative work environment. We believe in continuous learning, creativity, and supporting each other to achieve our best.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Competitive salary and benefits package",
                                "Opportunities for professional development",
                                "Employee discounts on services and products",
                                "Flexible working hours"
                            ].map((b, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-[rgb(80,80,80)] shrink-0" strokeWidth={1} />
                                    <span className="font-body font-normal text-[16px] md:text-[14px] lg:text-[16px] leading-[26px] md:leading-[22px] lg:leading-[26px] text-[rgb(80,80,80)]">{b}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeSection>
                    <FadeSection className="lg:w-1/2">
                    <div className="rounded-[20px] overflow-hidden">
                            <img src="/images/salon/journy.png" alt="Why work with us" className="w-full h-[300px] md:w-[800px] md:h-[400px] lg:h-[400px] object-cover" />
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default CareerWhyJoin;
