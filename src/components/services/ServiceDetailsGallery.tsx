import FadeSection from "../FadeSection";
import { ServiceDetail } from "@/data/serviceDetails";

interface ServiceDetailsGalleryProps {
    images: string[];
}

const ServiceDetailsGallery = ({ images }: ServiceDetailsGalleryProps) => {
    // Fallback images if none provided
    const displayImages = images && images.length > 0 ? images : [
        "/images/salon/gallery-img-01.jpg",
        "/images/salon/gallery-img-03.jpg",
        "/images/salon/gallery-img-04.jpg",
        "/images/salon/gallery-img-6.png"
    ];

    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pb-10">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="mb-10">
                    <h2 className="font-heading font-normal text-[32px] md:text-[40px] leading-[1.2] text-[rgb(10,4,4)]">
                        Work Gallery
                    </h2>
                </FadeSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayImages.map((img, i) => (
                        <FadeSection key={i} delay={i * 0.1}>
                            <div className="rounded-[20px] overflow-hidden aspect-square group">
                                <img
                                    src={img}
                                    alt={`Work Gallery ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsGallery;

