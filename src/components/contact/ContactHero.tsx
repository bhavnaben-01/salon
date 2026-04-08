import FadeSection from "@/components/FadeSection";

const ContactHero = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-0 pb-16">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
                    <div>
                        <span className="font-body font-medium text-[12px] md:text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] block">CONTACT</span>
                        <h1 className="font-heading font-normal text-[40px] md:text-[42px] lg:text-[50px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">Get In touch!</h1>
                    </div>
                    <p className="font-body font-normal text-[14px] md:text-[16px] leading-[26px] text-[rgb(80,80,80)] max-w-sm md:max-w-xs lg:max-w-md xl:max-w-xl md:text-left">
                        We would love hearing from you and moreover meeting you in person. Below you can find all contact details. See you soon!
                    </p>
                </FadeSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-20">
                    <FadeSection className="h-[300px] md:h-[500px] rounded-[20px] overflow-hidden relative">
                        <img
                            src="/images/salon/contact.png"
                            alt="Salon Interior"
                            className="w-full h-full object-cover"
                        />
                        {/* Fallback styling if image missing */}
                        <div className="absolute inset-0 bg-gray-200 -z-10"></div>
                    </FadeSection>

                    <FadeSection className="h-[300px] md:h-[500px] rounded-[20px] overflow-hidden relative border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111550.9329777935!2d-95.32620719873047!3d28.95679803126301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640316d267327ef%3A0x62bad702afc2a792!2sFreeport%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1707471243574!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Salon Location Map"
                        ></iframe>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
