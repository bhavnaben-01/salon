import SectionHeader from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeSection from "../FadeSection";

const faqs = [
    { q: "What should I do if I'm running late for my appointment?", a: "Please give us a call as soon as possible. We offer a 15-minute grace period, but after that, we may need to reschedule your appointment or shorten your service time to accommodate other clients." },
    { q: "What types of services do you offer at your salon?", a: "We offer a comprehensive range of services including hair cutting, styling, coloring, treatments, extensions, texturing, and bridal services. We also offer select beauty services." },
    { q: "Do I need to book an appointment in advance?", a: "While we do accept walk-ins based on availability, we highly recommend booking in advance to ensure you get your preferred date, time, and stylist." },
    { q: "What is your cancellation policy?", a: "We require at least 24 hours notice for cancellations or rescheduling. Cancellations made within 24 hours may be subject to a cancellation fee of 50% of the service cost." },
    { q: "What products do you use in your salon?", a: "We use premium, professional-grade products including Oribe, Kerastase, and eco-friendly options. We can recommend specific products based on your hair type and needs." },
    { q: "Do you offer hair extensions or other specialized services?", a: "Yes, we specialize in various extension methods including tape-ins, hand-tied wefts, and keratin bonds. We also offer keratin treatments and balayage." },
    { q: "How do I know which stylist is right for me?", a: "Our stylists have different specialties and experience levels. You can view their profiles on our team page or call us for a recommendation based on your hair type and desired look." },
    { q: "Are your services suitable for all hair types?", a: "Absolutely! Our team is trained to work with all hair textures and types, from straight to coily. We customize every service to maintain the health and integrity of your hair." },
    { q: "Do you offer gift cards or packages?", a: "Yes, we offer gift cards in any denomination which can be purchased online or in-salon. We also have special packages for bridal parties and regular maintenance." },
    { q: "Is there parking available at the salon?", a: "Yes, we have designated customer parking spots directly in front of the salon, as well as ample street parking in the surrounding neighborhood." },
];

const PricingFAQ = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pb-20 pt-10 md:pt-28 md:pb-28">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="FAQ'S"
                    heading="Frequently Asked Questions"
                    paragraph="We want to ensure you have all the information you need for a seamless and enjoyable experience. Below are some of the most frequently asked questions by our clients."
                    viewAllLink="/contact"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {faqs.map((faq, i) => (
                        <FadeSection key={i}>
                            <Accordion type="single" collapsible>
                                <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden">
                                    <AccordionTrigger className="font-heading font-normal text-[20px] leading-[32px] text-[rgb(10,4,4)] hover:no-underline py-5 text-left">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)] pb-5">{faq.a}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingFAQ;
