import SectionHeader from "@/components/SectionHeader";
import FadeSection from "../FadeSection";

const galleryImages = [
    "/images/salon/Gallery Image.jpg",
    "/images/salon/gallery-img-03.jpg",
    "/images/salon/gallery-img-04.jpg",
    "/images/salon/gallery-img-05.jpg",
    "/images/salon/gallery-img-01.jpg",
];

const HomeGallery = () => {
    return (
        <section className="pb-20 md:pb-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader label="SEE WORK" heading="Our Gallery" paragraph="Take a look at our work and discover the artistry behind every treatment. Each image tells a story of beauty and transformation." />
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="lg:w-[55%] grid grid-cols-2 gap-5">
                        {galleryImages.slice(0, 4).map((img, i) => (
                            <FadeSection key={i}>
                                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                                    <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                    <FadeSection className="lg:w-[45%]">
                        <div className="rounded-2xl overflow-hidden h-full min-h-[300px]">
                            <img src={galleryImages[4]} alt="Gallery feature" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default HomeGallery;
