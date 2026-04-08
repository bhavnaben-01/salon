import SectionHeader from "@/components/SectionHeader";
import FadeSection from "../FadeSection";

const teamMembers = [
    { name: "Julie Brown", role: "Senior Stylist", img: "/images/salon/Team Img.jpg" },
    { name: "Lilly Ross", role: "Color Specialist", img: "/images/salon/Team Img-001.jpg" },
    { name: "Isabella", role: "Nail Artist", img: "/images/salon/Team Img-002.jpg" },
    { name: "Sam Ross", role: "Massage Therapist", img: "/images/salon/Team Img-003.jpg" },
];

const HomeTeam = () => {
    return (
        <section className="pb-20 md:pb-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader label="MEET EXPERTS" heading="Our Team" paragraph="Our talented and dedicated team of professionals is the heart of our salon. Each member brings a unique set of skills and a passion for beauty." viewAllLink="/about" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((m, i) => (
                        <FadeSection key={i}>
                            <div>
                                <div className="rounded-[20px] overflow-hidden mb-4">
                                    <img src={m.img} alt={m.name} className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h3 className="font-heading text-xl text-foreground">{m.name}</h3>
                                <p className="font-body text-sm text-muted-foreground">{m.role}</p>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeTeam;
