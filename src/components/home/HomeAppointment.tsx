import SectionHeader from "@/components/SectionHeader";
import FadeSection from "../FadeSection";

const teamMembers = [
    { name: "Julie Brown" },
    { name: "Lilly Ross" },
    { name: "Isabella" },
    { name: "Sam Ross" },
];

const HomeAppointment = () => {
    return (
        <section className="bg-primary py-20 md:py-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader label="BOOK TODAY" heading="Book an appointment" paragraph="Schedule your visit today and let our experts take care of your beauty needs. We look forward to seeing you!" light />
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    <FadeSection className="lg:w-[45%]">
                        <div className="rounded-[20px] overflow-hidden h-full min-h-[400px]">
                            <img src="/images/salon/Contact Image.jpg" alt="Book appointment" className="w-full h-full object-cover" />
                        </div>
                    </FadeSection>
                    <FadeSection className="lg:w-[55%]">
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                { label: "Name", type: "text", placeholder: "Your name" },
                                { label: "Email", type: "email", placeholder: "Your email" },
                                { label: "Mobile", type: "tel", placeholder: "Your phone" },
                                { label: "Date & Time", type: "datetime-local", placeholder: "" },
                            ].map((f, i) => (
                                <div key={i}>
                                    <label className="font-body text-sm text-primary-foreground/80 block mb-2">{f.label}</label>
                                    <input type={f.type} placeholder={f.placeholder} className="w-full h-[50px] px-4 font-body text-sm bg-transparent border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground" />
                                </div>
                            ))}
                            <div>
                                <label className="font-body text-sm text-primary-foreground/80 block mb-2">Services</label>
                                <select className="w-full h-[50px] px-4 font-body text-sm bg-transparent border border-primary-foreground/30 rounded-lg text-primary-foreground/60 focus:outline-none focus:border-primary-foreground">
                                    <option value="">Select service</option>
                                    <option>Hair Styling</option><option>Nail Care</option><option>Massage</option><option>Skincare</option>
                                </select>
                            </div>
                            <div>
                                <label className="font-body text-sm text-primary-foreground/80 block mb-2">Expert</label>
                                <select className="w-full h-[50px] px-4 font-body text-sm bg-transparent border border-primary-foreground/30 rounded-lg text-primary-foreground/60 focus:outline-none focus:border-primary-foreground">
                                    <option value="">Select expert</option>
                                    {teamMembers.map((m, i) => <option key={i}>{m.name}</option>)}
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="font-body text-sm text-primary-foreground/80 block mb-2">Message</label>
                                <textarea rows={4} placeholder="Your message" className="w-full px-4 py-3 font-body text-sm bg-transparent border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground resize-none" />
                            </div>
                            <div className="sm:col-span-2">
                                <button type="submit" className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary-foreground text-foreground px-8 py-3.5 btn-radius hover:bg-primary-foreground/90 transition-colors">
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;
