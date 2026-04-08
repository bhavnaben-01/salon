import FadeSection from "../FadeSection";

const ServicesBanner = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pb-10">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection>
                    <div className="rounded-[20px] overflow-hidden">
                        <img src="/images/salon/service.png" alt="Services banner" className="w-full h-[300px] md:h-[450px] object-cover" />
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default ServicesBanner;
