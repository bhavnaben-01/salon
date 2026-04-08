import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import FadeSection from "../FadeSection";

const treatments = [
    { name: "Signature Facial", image: "/images/salon/Treatment Image-1.jpg", link: "/services/skin-care" },
    { name: "Balayage Hair Color", image: "/images/salon/Treatment Image-2.jpg", link: "/services/hair-services" },
    { name: "Gel Manicure", image: "/images/salon/Treatment Image-3.jpg", link: "/services/nail-services" },
    { name: "Brazilian Blowout", image: "/images/salon/Treatment Image-4.jpg", link: "/services/hair-services" },
    { name: "Volume Lash Extensions", image: "/images/salon/Treatment Image-5.jpg", link: "/services/lash-services" },
];

const HomeTreatments = () => {
    const [activeImage, setActiveImage] = useState(treatments[0].image);

    return (
        <section className="bg-[#faf5f1] py-20 md:py-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20">
                    <FadeSection className="md:w-1/2 space-y-8">
                        <div>
                            <span className="font-body text-[14px] font-medium uppercase tracking-[2px] text-[#9f2b2b] mb-3 block">TOP SERVICES</span>
                            <h2 className="font-heading font-normal text-[30px] md:text-[35px] leading-[1.2] lg:text-[50px] lg:leading-[60px] text-[#0a0404] mb-4">Popular Treatments</h2>
                            <p className="font-body font-normal text-[16px] leading-[26px] text-[#505050] ">
                                We offer a wide range of beauty services designed to help you look and feel your best. Our expert team is dedicated to providing exceptional care and personalized treatments tailored to your unique needs.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {treatments.map((t, i) => (
                                <Link
                                    key={i}
                                    to={t.link}
                                    className="flex items-center justify-between py-6 border-b border-[#0a0404]/10 group"
                                    onMouseEnter={() => setActiveImage(t.image)}
                                >
                                    <span className="font-heading font-normal text-[20px] leading-[30px] lg:text-[24px] lg:leading-[34px] text-[#0a0404] group-hover:text-[#9f2b2b] transition-colors">{t.name}</span>
                                    <ChevronRight className="w-6 h-6 text-[#0a0404] opacity-40 group-hover:opacity-100 group-hover:text-[#9f2b2b] transition-all" />
                                </Link>
                            ))}
                        </div>
                    </FadeSection>
                    <FadeSection className="md:w-1/2">
                        <div className="rounded-[20px] overflow-hidden h-[300px] min-h-[300px] md:h-[400px] md:min-h-[400px] lg:h-[650px] lg:min-h-[650px] lg:sticky md:mt-56 lg:mt-0 lg:top-24">
                            <img src={activeImage} alt="Treatment" className="w-full h-full object-cover transition-opacity duration-500" />
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default HomeTreatments;
