import { Link } from "react-router-dom";
import FadeSection from "../FadeSection";

const openPositions = [
    { title: "Hair Color Specialist", type: "Full - Time", slug: "hair-color-specialist" },
    { title: "Salon Manager", type: "Full - Time", slug: "salon-manager" },
    { title: "Junior Stylist", type: "Full - Time", slug: "junior-stylist" },
    { title: "Nail Technician", type: "Full - Time", slug: "nail-technician" },
    { title: "Assistant Stylist", type: "Full - Time", slug: "assistant-stylist" },
    { title: "Senior Hair Stylist", type: "Full - Time", slug: "senior-hair-stylist" },
];

const CareerPositions = () => {
    return (
        <section className="px-5 md:px-8 lg:px-16 xl:px-28 pb-20 md:pb-28 py-20">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 mb-12">
                    <div className="flex-1">
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-2 md:mb-4 block">JOIN OUR TEAM</span>
                        <h1 className="font-heading font-normal text-4xl md:text-[36px] lg:text-[50px] lg:leading-[50px] xl:text-[64px] leading-[1.1] md:leading-[40px] xl:leading-[63px] text-[rgb(10,4,4)]">Open positions</h1>
                    </div>
                    <div className="flex-1 md:max-w-xl pt-2 md:pt-4">
                        <p className="font-body font-normal text-[16px] md:text-[14px] lg:text-[16px] leading-[26px] md:leading-[22px] lg:leading-[26px] text-[rgb(80,80,80)]">
                            At Solano , we’re always on the lookout for passionate and talented individuals to join our growing team. If you have a love for beauty, a commitment to excellence, and a desire to work in a vibrant and supportive environment, we’d love to hear from you.                        </p>
                    </div>
                </FadeSection>

                <div className="space-y-4">
                    {openPositions.map((p, i) => (
                        <FadeSection key={i}>
                            <div className="bg-white rounded-[20px] p-6 md:px-10 md:py-8 flex flex-col items-start gap-4 md:grid md:grid-cols-12 md:items-center lg:flex lg:flex-row lg:justify-between md:gap-4">
                                <div className="w-full md:col-span-5 lg:col-span-6">
                                    <h3 className="font-heading font-normal text-[24px] leading-[34px] text-[rgb(10,4,4)]">{p.title}</h3>
                                </div>
                                <div className="w-full md:col-span-3 lg:col-span-3 text-left md:text-center">
                                    <span className="font-body font-normal text-[18px] leading-[31px] text-[rgb(10,4,4)]">{p.type}</span>
                                </div>
                                <div className="w-full md:col-span-4 lg:col-span-3 text-left md:text-right">
                                    <Link
                                        to={`/career/${p.slug}`}
                                        className="inline-block font-body font-semibold text-[14px] leading-[14px] uppercase tracking-[1px] bg-[rgb(159,43,43)] text-white px-8 py-3 rounded-t-md rounded-bl-md hover:bg-[rgb(159,43,43)]/90 transition-colors"
                                    >
                                        APPLY
                                    </Link>
                                </div>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerPositions;
