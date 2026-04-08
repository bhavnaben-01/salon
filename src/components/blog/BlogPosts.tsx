import { useState } from "react";
import { Link } from "react-router-dom";
import FadeSection from "../FadeSection";
import { blogPosts } from "@/data/blogDetails";

const BlogPosts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    const currentPosts = blogPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <section className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 xl:px-28 pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 row-gap-12">
                {currentPosts.map((p, i) => (
                    <FadeSection key={i}>
                        <Link to={`/blog/${p.slug}`} className="group block cursor-pointer">
                            <div className="rounded-[20px] overflow-hidden mb-6 relative h-[280px]">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)]">
                                    {p.category} - {p.date}
                                </span>
                            </div>
                            <h3 className="font-heading font-normal text-[20px] leading-[32px] text-[rgb(10,4,4)] mb-4 min-h-[60px]">
                                {p.title}
                            </h3>
                            <span
                                className="inline-block font-body text-[14px] leading-[18px] font-semibold uppercase tracking-[2px] text-[#9f2b2b] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-[rgb(159,43,43)] after:transition-all after:duration-300 group-hover:after:w-full"
                            >
                                VIEW MORE
                            </span>
                        </Link>
                    </FadeSection>
                ))}
            </div>

            <FadeSection className="mt-16 flex justify-end">
                {currentPage < totalPages ? (
                    <button
                        onClick={handleNext}
                        className="font-body font-semibold text-[14px] leading-[14px] uppercase tracking-[2px] bg-[rgb(159,43,43)] text-white px-8 py-4 rounded-t-md rounded-bl-md hover:bg-[rgb(140,35,35)] transition-colors"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handlePrev}
                        className="font-body font-semibold text-[14px] leading-[14px] uppercase tracking-[2px] bg-[rgb(159,43,43)] text-white px-8 py-4 rounded-t-md rounded-bl-md hover:bg-[rgb(140,35,35)] transition-colors"
                    >
                        Previous
                    </button>
                )}
            </FadeSection>
        </section>
    );
};

export default BlogPosts;
