import SectionHeader from "@/components/SectionHeader";
import FadeSection from "../FadeSection";

const teamMembers = [
    { name: "Julie Brown", role: "Senior Stylist", img: "/images/salon/Team Img.jpg" },
    { name: "Lilly Ross", role: "Color Specialist", img: "/images/salon/Team Img-001.jpg" },
    { name: "Isabella", role: "Nail Artist", img: "/images/salon/Team Img-002.jpg" },
    { name: "Sam Ross", role: "Massage Therapist", img: "/images/salon/Team Img-003.jpg" },
];

const AboutTeam = () => {
    return (
        <section className="py-20 md:py-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <div>
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] block">OUR TEAM</span>
                        <h1 className="font-heading font-normal text-[30px] md:text-[50px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">Our Team</h1>
                    </div>
                    <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)]  max-w-sm md:max-w-xs lg:max-w-md xl:max-w-xl md:mb-2">
                        Our talented and dedicated team of professionals is the heart of our salon. Each member brings a unique set of skills and a passion for beauty.                </p>
                </FadeSection>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {teamMembers.map((m, i) => (
                        <FadeSection key={i} delay={i * 0.1}>
                            <div className="group text-left">
                                <div className="mb-6 overflow-hidden rounded-[20px]">
                                    <img
                                        src={m.img}
                                        alt={m.name}
                                        className="w-full aspect-[3/3] md:aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-heading text-[20px] font-normal leading-[32px] text-[rgb(10,4,4)]">{m.name}</h3>
                                <p className="font-body text-[14px] font-normal leading-[20px] text-[rgb(80,80,80)]">{m.role}</p>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
