import FadeSection from "../FadeSection";

interface ServiceDetailsBannerProps {
    image: string;
    title: string;
}

const ServiceDetailsBanner = ({ image, title }: ServiceDetailsBannerProps) => {
    return (
        <section className="px-5 md:px-8 lg:px-16 xl:px-28 pb-10">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection>
                    <div className="rounded-[20px] overflow-hidden">
                        <img src={image} alt={title} className="w-full h-[300px] md:h-[450px] object-cover" />
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default ServiceDetailsBanner;
