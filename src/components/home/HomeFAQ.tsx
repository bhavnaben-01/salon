import SectionHeader from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeSection from "../FadeSection";

const faqs = [
    { q: "What services do you offer?", a: "We offer a wide range of beauty services including hair styling, coloring, nail care, facial treatments, massage, lash extensions, and bridal packages." },
    { q: "How do I book an appointment?", a: "You can book an appointment through our online booking page, by calling us, or by visiting our salon directly." },
    { q: "What are your operating hours?", a: "We are open Monday to Friday from 9 AM to 7 PM, and Saturday from 10 AM to 5 PM. We are closed on Sundays." },
    { q: "Do you offer bridal packages?", a: "Yes! We have comprehensive bridal packages that include hair styling, makeup, nail art, and skincare treatments." },
    { q: "Can I cancel or reschedule?", a: "You can cancel or reschedule your appointment up to 24 hours in advance without any charge." },
    { q: "Do you use organic products?", a: "Yes, we prioritize high-quality organic and cruelty-free products for all our treatments." },
    { q: "Is there parking available?", a: "Yes, we have free parking available for all our clients right next to the salon." },
    { q: "Do you offer gift cards?", a: "Absolutely! Gift cards are available in any denomination and make a perfect gift for loved ones." },
];

const HomeFAQ = () => {
    return (
        <section className="py-20 md:py-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader label="FAQ'S" heading="Frequently Asked Questions" paragraph="Find answers to common questions about our services, booking process, and policies." viewAllLink="#" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {faqs.map((faq, i) => (
                        <FadeSection key={i}>
                            <Accordion type="single" collapsible>
                                <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden">
                                    <AccordionTrigger className="font-heading text-lg hover:no-underline py-5">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;
