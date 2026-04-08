import { useState } from "react";
import FadeSection from "@/components/FadeSection";
import { User, Phone, Mail } from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMsg, setStatusMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
            setStatus("error");
            setStatusMsg("All fields are required.");
            return;
        }
        setStatus("loading");
        try {
            const res = await fetch("/api/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setStatusMsg(data.message);
                setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setStatusMsg(data.message);
            }
        } catch {
            setStatus("error");
            setStatusMsg("Failed to send message. Please try again.");
        }
    };

    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 py-12 md:py-20 bg-[rgb(159,43,43)] text-white">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="space-y-6">
                        <span className="font-body font-medium text-[12px] md:text-[14px] leading-[18px] uppercase tracking-[2px] opacity-90 block text-white">REACH OUT</span>
                        <h2 className="font-heading font-normal text-[40px] md:text-[50px] leading-[1.2] md:leading-[60px] text-white">Contact Us</h2>
                        <p className="font-body font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-white/60 max-w-md">
                            Have questions or need assistance? We're here to help! Reach out to us via phone, email, or through our contact form, and we'll get back to you as soon as possible
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                        {status === "success" && (
                            <div className="px-4 py-3 rounded-lg bg-green-500/20 border border-green-400/30 text-white font-body text-sm animate-fade-in-up">
                                {statusMsg}
                            </div>
                        )}
                        {status === "error" && (
                            <div className="px-4 py-3 rounded-lg bg-red-900/30 border border-red-400/30 text-white font-body text-sm animate-fade-in-up">
                                {statusMsg}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">First Name</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <User size={18} className="opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your first name"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Name</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <User size={18} className="opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your last name"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Mobile Number</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <Phone size={18} className="opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your mobile number"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Email Address</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <Mail size={18} className="opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Message</label>
                            <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                <img src="/images/salon/message.svg" alt="Message" className="w-[14px] h-[14px] mt-1 invert mr-1" />
                                <input
                                    type="text"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Message"
                                    className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="bg-white text-[rgb(10,4,4)] font-body font-semibold text-[14px] leading-[14px] uppercase tracking-[2px] px-8 py-4 rounded-t-md rounded-bl-md hover:bg-white/90 transition-colors mt-8 w-max disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {status === "loading" ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-gray-400 border-t-gray-800 rounded-full animate-spin" />
                                    SENDING...
                                </>
                            ) : (
                                "SEND MESSAGE"
                            )}
                        </button>
                    </form>
                </FadeSection>
            </div>
        </section>
    );
};

export default ContactForm;
