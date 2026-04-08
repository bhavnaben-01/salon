import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import FadeSection from "../FadeSection";

const blogPosts = [
    { img: "/images/salon/blog-1.png", cat: "Skincare", date: "Aug 31, 2024", title: "Seasonal Skincare: Adapting Your Routine for Changing Weather", slug: "seasonal-skincare" },
    { img: "/images/salon/blog-2.png", cat: "Nails", date: "Aug 31, 2024", title: "Nail Care Essentials: How to Keep Your Nails Strong and Healthy", slug: "nail-care" },
    { img: "/images/salon/blog-3.png", cat: "Lashes", date: "Aug 31, 2024", title: "Uncorking the Mystery: Understanding Terroir & Its Influence", slug: "uncorking-mystery" },
];

const HomeBlog = () => {
    return (
        <section className="py-20 md:py-28 px-5 md:px-8 lg:px-16 xl:px-28">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                    <div>
                        <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] block">BLOG</span>
                        <h1 className="font-heading font-normal text-[30px] md:text-[40px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">Latest Article</h1>
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)]  max-w-sm md:max-w-sm lg:max-w-md xl:max-w-xl md:mb-2">
                            Stay updated with the latest beauty tips, trends, and news from our salon experts. Our blog is your go-to source for all things beauty.
                        </p>
                        <Link
                            to="/blog"
                            className="font-body text-[14px] font-semibold leading-[18px] uppercase tracking-[1px] text-[rgb(159,43,43)] relative group w-fit"
                        >
                            VIEW ALL
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[rgb(159,43,43)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    </div>
                </FadeSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((p, i) => (
                        <FadeSection key={i} delay={i * 0.1}>
                            <Link to={`/blog/${p.slug}`} className="group/card block">
                                <div className="rounded-[20px] overflow-hidden mb-6">
                                    <img src={p.img} alt={p.title} className="w-full h-[240px] md:h-[280px] object-cover group-hover/card:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-body text-[14px] font-normal leading-[20px] text-[rgb(80,80,80)]">{p.cat}</span>
                                    <span className="text-[rgb(80,80,80)]">—</span>
                                    <span className="font-body text-[14px] font-normal leading-[20px] text-[rgb(80,80,80)]">{p.date}</span>
                                </div>
                                <h3 className="font-heading text-[20px] font-normal leading-[32px] text-[rgb(10,4,4)] mb-4">{p.title}</h3>
                                <div
                                    className="inline-block font-body text-[14px] font-semibold leading-[14px] uppercase tracking-[1px] text-[rgb(159,43,43)] relative group w-fit"
                                >
                                    View More
                                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[rgb(159,43,43)] transform scale-x-0 origin-left transition-transform duration-300 group-hover/card:scale-x-100" />
                                </div>
                            </Link>
                        </FadeSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;
