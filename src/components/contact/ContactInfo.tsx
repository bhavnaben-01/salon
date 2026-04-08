import FadeSection from "@/components/FadeSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 py-12 md:py-20 bg-[#FDFBF7]"> {/* Light beige background from image */}
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Address Card */}
                    <div className="border border-[#9f2b2b] p-6 md:p-4 flex flex-col items-center justify-center text-left h-[150px] relative bg-transparent">
                        <div className="absolute -top-6 bg-[#FDFBF7] px-4">
                            <div className=" flex items-center justify-center text-[rgb(159,43,43)]">
                                <MapPin className="w-8 h-8 md:w-[42px] md:h-[42px]" strokeWidth={0.5} />
                            </div>
                        </div>
                        <p className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] max-w-[200px]">
                            55 East Birchwood Ave. Brooklyn, New York 11201, United States
                        </p>
                    </div>

                    {/* Hours Card */}
                    <div className="border border-[#9f2b2b] p-6 md:p-4 flex flex-col items-center justify-center text-left h-[150px] relative bg-transparent">
                        <div className="absolute -top-6 bg-[#FDFBF7] px-4">
                            <div className=" flex items-center justify-center text-[rgb(159,43,43)]">
                                <Clock className="w-8 h-8 md:w-[42px] md:h-[42px]" strokeWidth={0.5} />
                            </div>
                        </div>
                        <div className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] space-y-2">
                            <p>Mon to Fri: 7am - 6pm</p>
                            <p>Sat: 9am - 7pm</p>
                            <p>Sun: 9am - 6pm</p>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="border border-[#9f2b2b] p-6 md:p-4 flex flex-col items-center justify-center text-left h-[150px] relative bg-transparent">
                        <div className="absolute -top-6 bg-[#FDFBF7] px-4">
                            <div className=" flex items-center justify-center text-[rgb(159,43,43)]">
                                <Phone className="w-8 h-8 md:w-[42px] md:h-[42px]" strokeWidth={0.5} />
                            </div>
                        </div>
                        <div className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] space-y-2">
                            <p>hello@example.com</p>
                            <p>+1 234 567 8900</p>
                        </div>
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default ContactInfo;
