import FadeSection from "../FadeSection";
import CountingNumber from "../CountingNumber";

const AboutHero = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-10 md:pt-20 pb-16">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <FadeSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-8">
                    <div>
                        <span className="font-body text-[14px] font-medium leading-[18px] uppercase tracking-[2px] text-[rgb(159,43,43)] mb-4 block">WHO WE ARE</span>
                        <h2 className="font-heading text-[30px] md:text-[50px] font-normal leading-[1.2] md:leading-[60px] text-[rgb(10,4,4)]">About Us</h2>
                    </div>

                    <div className="grid grid-cols-2 md:flex md:flex-row items-center gap-0 border-l-0 md:border-l border-gray-300 md:pl-12 w-full md:w-auto">
                        <div className="pr-6 md:pr-12 border-gray-300 w-full md:w-auto">
                            <h3 className="font-heading text-[32px] font-normal leading-[42px] text-[rgb(10,4,4)]">
                                <CountingNumber end={80} suffix="%" duration={2000} />
                            </h3>
                            <p className="font-body text-[16px] font-normal leading-[26px] text-[rgb(80,80,80)] mt-1">Active User</p>
                        </div>
                        <div className="pl-6 md:pl-12 md:border-l md:border-gray-300 w-full md:w-auto">
                            <h3 className="font-heading text-[32px] font-normal leading-[42px] text-[rgb(10,4,4)]">
                                <CountingNumber end={5} suffix="+" duration={2000} />
                            </h3>
                            <p className="font-body text-[16px] font-normal leading-[26px] text-[rgb(80,80,80)] mt-1">Years of Experience</p>
                        </div>
                    </div>
                </FadeSection>

                {/* Images Grid */}
                <FadeSection delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 h-auto md:h-[500px]">
                        {/* Large Landscape Image */}
                        <div className="col-span-1 md:col-span-1 xl:col-span-2 h-[300px] md:h-full rounded-[20px] overflow-hidden">
                            <img src="/images/salon/about-images-1.png" alt="Salon Interior" className="w-full h-full object-cover text-center" />
                        </div>

                        {/* Portrait Image 1 */}
                        <div className="col-span-1 h-[300px] md:h-full rounded-[20px] overflow-hidden">
                            <img src="/images/salon/about-images-2.png" alt="Facial Treatment" className="w-full h-full object-cover" />
                        </div>

                        {/* Portrait Image 2 */}
                        <div className="col-span-1 h-[300px] md:h-full rounded-[20px] overflow-hidden">
                            <img src="/images/salon/about-images-3.png" alt="Hair Styling" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default AboutHero;
