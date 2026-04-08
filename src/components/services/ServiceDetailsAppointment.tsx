import FadeSection from "../FadeSection";
import { ChevronDown, User, Mail, Phone, Calendar, Scissors } from "lucide-react";

const ServiceDetailsAppointment = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 py-16 md:py-24 bg-[rgb(159,43,43)]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column */}
                    <div>
                        <FadeSection>
                            <span className="font-body text-sm font-medium leading-[18px] text-white/80 uppercase tracking-[2px] mb-4 block">BOOK TODAY</span>
                            <h2 className="font-heading font-normal text-4xl lg:text-[50px] lg:leading-[1.2] text-white mb-2">Book an appointment</h2>
                            <p className="font-body text-white/50 text-[14px] max-w-sm mt-4">
                                Experience luxury and top-notch service by booking your appointment with us today.
                            </p>
                        </FadeSection>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <FadeSection delay={0.2}>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="font-body text-xs text-white/70 block uppercase tracking-wider">Name</label>
                                    <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center gap-3">
                                        <User className="w-4 h-4 text-white" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full font-body font-normal text-[16px] text-white bg-transparent border-none outline-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="font-body text-xs text-white/70 block uppercase tracking-wider">Email Address</label>
                                    <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-white" />
                                        <input
                                            required
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full font-body font-normal text-[16px] text-white bg-transparent border-none outline-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="space-y-2">
                                    <label className="font-body text-xs text-white/70 block uppercase tracking-wider">Mobile Number</label>
                                    <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-white" />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Enter your mobile number"
                                            className="w-full font-body font-normal text-[16px] text-white bg-transparent border-none outline-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="space-y-2">
                                    <label className="font-body text-xs text-white/70 block uppercase tracking-wider">Date & Time</label>
                                    <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors relative flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-white" />
                                        <input
                                            required
                                            type="datetime-local"
                                            className="w-full font-body font-normal text-[16px] text-white bg-transparent border-none outline-none placeholder:text-white/30 date-input-white"
                                        />
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="space-y-2">
                                    <label className="font-body text-xs text-white/70 block uppercase tracking-wider">Service</label>
                                    <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors relative flex items-center gap-3">
                                        <Scissors className="w-4 h-4 text-white" />
                                        <select required className="w-full font-body font-normal text-[16px] text-white bg-transparent border-none outline-none appearance-none cursor-pointer">
                                            <option value="" className="text-black">Select Service</option>
                                            <option className="text-black">Hair Styling</option>
                                            <option className="text-black">Nail Care</option>
                                            <option className="text-black">Massage</option>
                                            <option className="text-black">Skincare</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-white absolute right-0 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Expert */}
                                <div className="space-y-2">
                                    <label className="font-body text-xs text-white/70 block uppercase tracking-wider">Expert</label>
                                    <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors relative flex items-center gap-3">
                                        <User className="w-4 h-4 text-white" />
                                        <select required className="w-full font-body font-normal text-[16px] text-white bg-transparent border-none outline-none appearance-none cursor-pointer">
                                            <option value="" className="text-black">Select Expert</option>
                                            <option className="text-black">Julie Brown</option>
                                            <option className="text-black">Lilly Ross</option>
                                            <option className="text-black">Isabella</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-white absolute right-0 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Message (Full Width) */}
                                <div className="col-span-1 md:col-span-2 space-y-2 mt-2">
                                    <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors">
                                        <textarea
                                            rows={1}
                                            placeholder="Write a message"
                                            className="w-full font-body font-normal text-[16px] text-white bg-transparent border-none outline-none placeholder:text-white/30 resize-none min-h-[30px]"
                                        />
                                    </div>
                                </div>
                            </form>
                        </FadeSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsAppointment;
