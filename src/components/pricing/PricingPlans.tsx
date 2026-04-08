import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import FadeSection from "../FadeSection";

const plans = [
    {
        name: "STANDARD PACKAGE",
        price: "299.00",
        period: "For 4 month Membership",
        features: ["Dermaplaning facial", "Acne facial treatment", "Massage", "Hydrating mask packs", "Microneedling"],
        highlighted: false
    },
    {
        name: "LUX PACKAGE",
        price: "799.00",
        period: "For 4 month Membership",
        features: ["Full Hair Service", "Deluxe Skin Treatment", "Lash Extensions & Lift", "Brow Lamination", "Lactic acid peels"],
        highlighted: true
    },
    {
        name: "PREMIUM PACKAGE",
        price: "499.00",
        period: "For 4 month Membership",
        features: ["Haircut & Styling", "Advanced Skin Treatment", "Lash Extensions", "Brow Tint & Shape", "Glycolic acid facial"],
        highlighted: false
    },
];

const PricingPlans = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pb-10 md:pb-0">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <FadeSection key={i} className="h-full">
                            <div className={`rounded-[20px] p-8 md:p-10 h-full flex flex-col ${plan.highlighted ? "bg-[rgb(159,43,43)] text-white" : "bg-white"}`}>
                                <h3 className={`font-body font-medium text-[14px] leading-[18px] uppercase tracking-[2px] mb-4 ${plan.highlighted ? "text-white/80" : "text-[rgb(80,80,80)]"}`}>{plan.name}</h3>
                                <div className="mb-8">
                                    <div className="flex items-start">
                                        <span className={`font-heading font-normal text-[36px] md:text-[50px] mt-2 mr-1 ${plan.highlighted ? "text-white" : "text-[rgb(10,4,4)]"}`}>$</span>
                                        <span className={`font-heading font-normal text-[48px] md:text-[64px] leading-[1] ${plan.highlighted ? "text-white" : "text-[rgb(10,4,4)]"}`}>{plan.price}</span>
                                    </div>
                                    <p className={`font-body text-[14px] mt-2 ${plan.highlighted ? "text-white/80" : "text-[rgb(80,80,80)]"}`}>{plan.period}</p>
                                </div>

                                <div className={`h-px w-full mb-8 ${plan.highlighted ? "bg-white/20" : "bg-[rgb(159,43,43)]/20"}`} />

                                <ul className="space-y-4 mb-10 flex-1">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} strokeWidth={1.5} className={plan.highlighted ? "text-white" : "text-[#B0B0B0]"} />
                                            <span className={`font-body text-[16px] leading-[26px] ${plan.highlighted ? "text-white" : "text-[rgb(80,80,80)]"}`}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/pricing/${plan.name.toLowerCase().replace(" ", "-")}`}
                                    className={`inline-block font-body text-[12px] font-semibold uppercase tracking-[2px] px-8 py-3.5 rounded-t-md rounded-bl-md text-center transition-colors w-max ${plan.highlighted ? "bg-white text-[rgb(159,43,43)] hover:bg-white/90" : "bg-[rgb(159,43,43)] text-white hover:bg-[rgb(159,43,43)]/90"}`}
                                >
                                    PURCHASE
                                </Link>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
