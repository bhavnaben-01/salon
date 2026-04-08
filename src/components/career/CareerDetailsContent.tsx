import FadeSection from "../FadeSection";

interface CareerDetailsContentProps {
    title: string;
}

const CareerDetailsContent = ({ title }: CareerDetailsContentProps) => {
    return (
        <section className="max-w-[1500px] mx-auto px-5 md:px-8 lg:px-16 xl:px-28 pb-20 md:pb-28">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Main Content */}
                <FadeSection className="lg:w-2/3 space-y-12">
                    <div className="space-y-6">
                        <p className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                            As a {title} at solona, you will be responsible for delivering exceptional hair services to our clients while providing leadership and mentorship to junior stylists. You will work in a dynamic and supportive environment where creativity and client satisfaction are paramount.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Conduct thorough consultations to understand client needs and preferences, offering expert advice on styles and treatments.",
                                "Perform a variety of hair cutting, coloring, and styling techniques to achieve client desired looks.",
                                "Guide and support junior stylists, sharing knowledge and best practices to enhance team skills and performance.",
                                "Suggest and apply professional hair care products to clients, educating them on maintenance and styling.",
                                "Build and maintain strong client relationships through excellent customer service and consistent follow-up",
                                "Assist in maintaining salon cleanliness, organization, and adherence to health and safety standards."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-1 h-1 rounded-full bg-black mt-2.5 shrink-0" />
                                    <span className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="font-heading text-[24px] leading-[34px] text-[rgb(10,4,4)]">Qualifications:</h2>
                        <ul className="space-y-4">
                            {[
                                "Minimum of 5 years of experience as a professional hair stylist, with a proven track record in a senior or leadership role.",
                                "Advanced skills in cutting, coloring, and styling; strong knowledge of current trends and techniques.",
                                "Relevant cosmetology certifications and licenses.",
                                "Excellent communication and customer service skills; ability to work collaboratively with a team.",
                                "Demonstrated ability to innovate and create unique styles tailored to individual client needs."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-1 h-1 rounded-full bg-black mt-2.5 shrink-0" />
                                    <span className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="font-heading text-[24px] leading-[34px] text-[rgb(10,4,4)]">Benefits:</h2>
                        <ul className="space-y-4">
                            {[
                                "Attractive compensation package with performance-based incentives.",
                                "Opportunities for continued education and training.",
                                "Supportive and creative work culture with state-of-the-art facilities.",
                                "Discounts on products and services.",
                                "Options for flexible work hours to accommodate work-life balance."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-1 h-1 rounded-full bg-black mt-2.5 shrink-0" />
                                    <span className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="font-body font-semibold text-[14px] leading-[14px] uppercase tracking-[2px] bg-[rgb(159,43,43)] text-white px-8 py-3.5 rounded-t-md rounded-bl-md hover:bg-[rgb(159,43,43)]/90 transition-colors">
                        APPLY NOW
                    </button>
                </FadeSection>

                {/* Sidebar */}
                <FadeSection className="lg:w-1/3">
                    <div className="space-y-4  top-24">
                        <div>
                            <h3 className="font-heading text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-2">Experience</h3>
                            <p className="font-body text-[16px] text-[rgb(80,80,80)]">7 - 05 Year</p>
                        </div>
                        <div>
                            <h3 className="font-heading text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-2">Salary</h3>
                            <p className="font-body text-[16px] text-[rgb(80,80,80)]">$50,000 - $70,003 per year</p>
                        </div>
                        <div>
                            <h3 className="font-heading text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-2">Job Type</h3>
                            <p className="font-body text-[16px] text-[rgb(80,80,80)]">Full - Time</p>
                        </div>
                        <div>
                            <h3 className="font-heading text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-2">Location</h3>
                            <p className="font-body text-[16px] text-[rgb(80,80,80)]">New York, NY</p>
                        </div>
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default CareerDetailsContent;
