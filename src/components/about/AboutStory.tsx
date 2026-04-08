import FadeSection from "../FadeSection";

const AboutStory = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pb-20 py-12 md:pb-28">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center">
                    <FadeSection className="md:w-5/12 space-y-8">
                        <div>
                            <span className="font-body text-[14px] font-medium leading-[18px] uppercase tracking-[2px] text-[rgb(159,43,43)] mb-4 block">OUR JOURNEY</span>
                            <h2 className="font-heading text-[30px] md:text-[50px] font-normal leading-[1.2] md:leading-[60px] text-[rgb(10,4,4)]">Our Story</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="font-body text-[16px] font-normal leading-[26px] text-[rgb(80,80,80)]">
                                Our story began with a passion for beauty and a commitment to excellence. From our humble beginnings to becoming a trusted name in the community, our journey has been one of dedication, innovation, and a deep love for what we do.
                            </p>
                            <p className="font-body text-[16px] font-normal leading-[26px] text-[rgb(80,80,80)]">
                                At Salona, we believe that true beauty starts from within and shines through every experience. Our story is rooted in a passion for delivering exceptional beauty services in a luxurious and welcoming environment.
                            </p>
                        </div>
                    </FadeSection>
                    <FadeSection className="md:w-7/12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-[20px] overflow-hidden h-[400px] md:h-[450px] mt-0 md:mt-12">
                                <img src="/images/salon/about-images-4.png" alt="Facial Treatment" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-[20px] overflow-hidden h-[400px] md:h-[450px] mt-0 md:mt-12">
                                <img src="/images/salon/about-images-5.png" alt="Facial Treatment" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
