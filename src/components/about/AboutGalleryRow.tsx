import FadeSection from "../FadeSection";

const images = [
    "/images/salon/about-images-1.png",
    "/images/salon/about-images-2.png",
    "/images/salon/about-images-3.png"
];

const AboutGalleryRow = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 py-20">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
                    <div>
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] block">SEE WORK</span>
                        <h1 className="font-heading font-normal text-[30px] md:text-[50px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">Our Gallery</h1>
                    </div>
                    <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)]  max-w-sm md:max-w-xs lg:max-w-md xl:max-w-xl md:mb-2">
                        We take pride in the artistry and craftsmanship of our work. Our portfolio is a testament to the dedication, skill, and passion of our talented team
                    </p>
                </FadeSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[650px]">
                    {/* Column 1 - Stacked */}
                    <div className="col-span-1 flex flex-col gap-6 h-auto lg:h-full">
                        <FadeSection delay={0.1} className="w-full lg:h-1/2">
                            <div className="rounded-[20px] overflow-hidden h-[250px] md:h-[250px] lg:h-full">
                                <img src="/images/salon/gallery-img-06.jpg" alt="Gallery 1" className="w-full h-full object-cover" />
                            </div>
                        </FadeSection>
                        <FadeSection delay={0.2} className="w-full lg:h-1/2">
                            <div className="rounded-[20px] overflow-hidden h-[250px] md:h-[250px] lg:h-full">
                                <img src="/images/salon/gallery-img-04.jpg" alt="Gallery 2" className="w-full h-full object-cover" />
                            </div>
                        </FadeSection>
                    </div>

                    {/* Column 2 - Stacked */}
                    <div className="col-span-1 flex flex-col gap-6 h-auto lg:h-full">
                        <FadeSection delay={0.3} className="w-full lg:h-1/2">
                            <div className="rounded-[20px] overflow-hidden h-[250px] md:h-[250px] lg:h-full">
                                <img src="/images/salon/gallery-img-03.jpg" alt="Gallery 3" className="w-full h-full object-cover" />
                            </div>
                        </FadeSection>
                        <FadeSection delay={0.4} className="w-full lg:h-1/2">
                            <div className="rounded-[20px] overflow-hidden h-[250px] md:h-[250px] lg:h-full">
                                <img src="/images/salon/gallery-img-05.jpg" alt="Gallery 4" className="w-full h-full object-cover" />
                            </div>
                        </FadeSection>
                    </div>

                    {/* Column 3 - Large Image */}
                    <FadeSection delay={0.5} className="col-span-1 md:col-span-2 lg:col-span-2 h-auto lg:h-full">
                        <div className="rounded-[20px] overflow-hidden h-[300px] md:h-[400px] lg:h-full w-full">
                            <img src="/images/salon/gallery-img-01.jpg" alt="Gallery Large" className="w-full h-full object-cover" />
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default AboutGalleryRow;
