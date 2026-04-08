import { useState } from "react";
import FadeSection from "../FadeSection";
import { ChevronDown, User, Mail, Phone, Calendar, Scissors, MessageSquare } from "lucide-react";

const teamMembers = [
    { name: "Julie Brown" },
    { name: "Lilly Ross" },
    { name: "Isabella" },
    { name: "Sam Ross" },
];

const AppointmentForm = ({ variant = "light" }: { variant?: "dark" | "light" }) => {
    const isDark = variant === "dark";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dateTime: "",
        service: "",
        expert: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMsg, setStatusMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.dateTime || !formData.service || !formData.expert) {
            setStatus("error");
            setStatusMsg("All required fields must be filled.");
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch("/api/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setStatusMsg(data.message);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    dateTime: "",
                    service: "",
                    expert: "",
                    message: "",
                });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setStatusMsg(data.message);
            }
        } catch {
            setStatus("error");
            setStatusMsg("Failed to book appointment. Please try again later.");
        }
    };

    const styles = {
        section: isDark ? "bg-[#9F2B2B]" : "bg-[#FBF4EF]",
        subHeading: isDark ? "text-white/80" : "text-[rgb(159,43,43)]",
        heading: isDark ? "text-white" : "text-[rgb(10,4,4)]",
        desc: isDark ? "text-white/80" : "text-[rgb(80,80,80)]",
        label: isDark ? "text-white/70" : "text-[rgb(10,4,4)]/70",
        border: isDark ? "border-white/30 focus-within:border-white" : "border-[rgb(10,4,4)]/20 focus-within:border-[rgb(159,43,43)]",
        icon: isDark ? "text-white/70" : "text-[rgb(159,43,43)]",
        input: isDark ? "text-white placeholder:text-white/30" : "text-[rgb(10,4,4)] placeholder:text-[rgb(10,4,4)]/40",
        chevron: isDark ? "text-white" : "text-[rgb(10,4,4)]",
        button: isDark ? "bg-white text-black hover:bg-white/90" : "bg-[rgb(159,43,43)] text-white hover:bg-[rgb(140,30,30)]",
        dateInput: isDark ? "date-input-white" : "date-input-dark"
    };

    return (
        <section className={`w-full px-5 md:px-8 lg:px-16 xl:px-28 py-16 md:py-24 ${styles.section}`}>
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-12 lg:mb-16 gap-6 md:gap-8">
                    <FadeSection>
                        <span className={`font-body text-xs md:text-sm font-medium leading-[18px] uppercase tracking-[2px] mb-3 md:mb-4 block ${styles.subHeading}`}>BOOK TODAY</span>
                        <h1 className={`font-heading font-normal text-3xl md:text-4xl lg:text-[50px] lg:leading-[1.2] xl:text-[64px] ${styles.heading}`}>Book an appointment</h1>
                    </FadeSection>

                    <FadeSection delay={0.1} className="lg:max-w-xl">
                        <p className={`font-body font-normal text-[15px] sm:text-base lg:text-[16px] leading-[24px] sm:leading-[26px] ${styles.desc}`}>
                            Experience luxury and top-notch service by booking your appointment with us today. Our team of skilled professionals is here to provide you with an exceptional salon experience.
                        </p>
                    </FadeSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
                    {/* Left Column - Image */}
                    <FadeSection delay={0.2} className="h-full order-2 lg:order-1">
                        <div className="rounded-[20px] overflow-hidden w-full h-[300px] md:h-[400px] lg:h-[600px] min-h-[300px]">
                            <img
                                src="/images/salon/contact-image.png"
                                alt="Book appointment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeSection>

                    {/* Right Column - Form */}
                    <FadeSection delay={0.3} className="h-full flex flex-col justify-center order-1 lg:order-2">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
                            {/* Status Messages */}
                            {status === "success" && (
                                <div className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-700 font-body text-sm animate-fade-in-up">
                                    {statusMsg}
                                </div>
                            )}
                            {status === "error" && (
                                <div className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-700 font-body text-sm animate-fade-in-up">
                                    {statusMsg}
                                </div>
                            )}

                            {/* Name */}
                            <div className="space-y-2">
                                <label className={`font-body text-xs block ${styles.label}`}>Name</label>
                                <div className={`flex items-center border-b pb-3 transition-colors gap-3 ${styles.border}`}>
                                    <User className={`w-4 h-4 ${styles.icon}`} />
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className={`w-full font-body font-normal text-[15px] md:text-[16px] leading-[26px] bg-transparent border-none outline-none ${styles.input}`}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className={`font-body text-xs block ${styles.label}`}>Email Address</label>
                                <div className={`flex items-center border-b pb-3 transition-colors gap-3 ${styles.border}`}>
                                    <Mail className={`w-4 h-4 ${styles.icon}`} />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className={`w-full font-body font-normal text-[15px] md:text-[16px] leading-[26px] bg-transparent border-none outline-none ${styles.input}`}
                                    />
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="space-y-2">
                                <label className={`font-body text-xs block ${styles.label}`}>Mobile Number</label>
                                <div className={`flex items-center border-b pb-3 transition-colors gap-3 ${styles.border}`}>
                                    <Phone className={`w-4 h-4 ${styles.icon}`} />
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your mobile number"
                                        className={`w-full font-body font-normal text-[15px] md:text-[16px] leading-[26px] bg-transparent border-none outline-none ${styles.input}`}
                                    />
                                </div>
                            </div>

                            {/* Date & Time */}
                            <div className="space-y-2">
                                <label className={`font-body text-xs block ${styles.label}`}>Date & Time</label>
                                <div className={`flex items-center border-b pb-3 transition-colors gap-3 relative ${styles.border}`}>
                                    <Calendar className={`w-4 h-4 ${styles.icon}`} />
                                    <input
                                        required
                                        type="datetime-local"
                                        name="dateTime"
                                        value={formData.dateTime}
                                        onChange={handleChange}
                                        className={`w-full font-body font-normal text-[15px] md:text-[16px] leading-[26px] bg-transparent border-none outline-none ${styles.input} ${styles.dateInput} [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                                        placeholder="Select a Date & Time"
                                    />
                                </div>
                            </div>

                            {/* Services */}
                            <div className="space-y-2">
                                <label className={`font-body text-xs block ${styles.label}`}>Services</label>
                                <div className={`flex items-center border-b pb-3 transition-colors gap-3 relative ${styles.border}`}>
                                    <Scissors className={`w-4 h-4 ${styles.icon}`} />
                                    <select
                                        required
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full font-body pl-2 font-normal text-[15px] md:text-[16px] leading-[26px] bg-transparent border-none outline-none appearance-none cursor-pointer ${styles.input} [&>option]:text-black`}
                                    >
                                        <option value="">Select Service</option>
                                        <option value="Hair Styling">Hair Styling</option>
                                        <option value="Nail Care">Nail Care</option>
                                        <option value="Massage">Massage</option>
                                        <option value="Skincare">Skincare</option>
                                        <option value="Lash Extensions">Lash Extensions</option>
                                    </select>
                                    <ChevronDown className={`w-4 h-4 absolute right-0 pointer-events-none ${styles.chevron}`} />
                                </div>
                            </div>

                            {/* Expert */}
                            <div className="space-y-2">
                                <label className={`font-body text-xs block ${styles.label}`}>Expert</label>
                                <div className={`flex items-center border-b pb-3 transition-colors gap-3 relative ${styles.border}`}>
                                    <User className={`w-4 h-4 ${styles.icon}`} />
                                    <select
                                        required
                                        name="expert"
                                        value={formData.expert}
                                        onChange={handleChange}
                                        className={`w-full font-body pl-2 font-normal text-[15px] md:text-[16px] leading-[26px] bg-transparent border-none outline-none appearance-none cursor-pointer ${styles.input} [&>option]:text-black`}
                                    >
                                        <option value="">Select Expert</option>
                                        {teamMembers.map((m, i) => (
                                            <option key={i} value={m.name}>{m.name}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className={`w-4 h-4 absolute right-0 pointer-events-none ${styles.chevron}`} />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="col-span-1 md:col-span-2 space-y-2 mt-2 md:mt-4">
                                <label className={`font-body text-xs block ${styles.label}`}>Message (Optional)</label>
                                <div className={`flex items-start border-b pb-3 transition-colors gap-3 ${styles.border}`}>
                                    <MessageSquare className={`w-4 h-4 mt-1 ${styles.icon}`} />
                                    <textarea
                                        rows={1}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter Message"
                                        className={`w-full font-body font-normal text-[15px] md:text-[16px] leading-[26px] bg-transparent border-none outline-none resize-none min-h-[30px] ${styles.input}`}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-1 md:col-span-2 mt-8">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className={`font-body flex items-center justify-center gap-2 text-[14px] leading-[18px] rounded-t-md rounded-bl-md font-bold uppercase tracking-[1px] px-8 py-4 transition-all w-full md:w-fit disabled:opacity-70 disabled:cursor-not-allowed ${styles.button}`}
                                >
                                    {status === "loading" ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-inherit border-t-transparent rounded-full animate-spin" />
                                            BOOKING...
                                        </>
                                    ) : (
                                        "BOOK A APPOINTMENT"
                                    )}
                                </button>
                            </div>
                        </form>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;
