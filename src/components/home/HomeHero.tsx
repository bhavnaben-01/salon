import { Link } from "react-router-dom";
import { useState } from "react";
import { Play, X } from "lucide-react";
import FadeSection from "../FadeSection";

const HomeHero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-10 pb-16 md:pb-24 relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <FadeSection className="md:w-[50%] space-y-8">
                        <h1 className="font-heading font-normal text-[35px] md:text-[36px] lg:text-[52px] xl:text-[64px] leading-[1.2] lg:leading-[68px] xl:leading-[83px] text-[#0a0404] max-w-lg">
                            Discover your beauty potential with us.
                        </h1>
                        <p className="font-body font-normal text-[16px] leading-[26px] text-[#505050] max-w-lg mb-8">
                            We believe that beauty is a form of art, and our mission is to make you feel like a masterpiece.
                        </p>
                        <Link to="/book-appointment" className="inline-flex font-body font-semibold text-[14px] leading-[14px] uppercase tracking-[1px] bg-[#9f2b2b] text-white px-8 py-4 rounded-t-md rounded-bl-md hover:bg-black hover:text-white transition-colors">
                            BOOK A APPOINTMENT
                        </Link>
                        <div className="mt-12">
                            <div
                                className=" md:w-[230px] md:h-[150px] rounded-[20px] overflow-hidden relative cursor-pointer group"
                                onClick={() => setIsVideoOpen(true)}
                            >
                                <img src="/images/salon/home-hero.jpg" alt="Salon preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                        <Play className="w-4 h-4 text-[#9f2b2b] fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeSection>
                    <FadeSection className="md:w-[50%]">
                        <div className="rounded-[20px] overflow-hidden">
                            <img src="/images/salon/Hero Img.jpg" alt="Solaro Beauty Salon" className="w-full h-[400px] md:h-[500px] lg:h-[620px] object-cover" />
                        </div>
                    </FadeSection>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    ></div>
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white/80 hover:text-white z-20"
                        >
                            <X size={32} />
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HomeHero;
