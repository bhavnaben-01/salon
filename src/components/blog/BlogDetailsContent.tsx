import { Link } from "react-router-dom";
import FadeSection from "../FadeSection";
import { BlogPost, blogPosts } from "@/data/blogDetails";

const categories = ["Hair Care", "Skincare", "Sunscreen", "Makeup"];
const tags = ["Hair", "Skincare", "Oil", "Makeup", "Beauty", "Fashion", "Art"];

const BlogDetailsContent = ({ post }: { post: BlogPost }) => {
    if (!post) return null;

    // Get latest posts excluding current one
    const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

    return (
        <section className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 xl:px-28 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-12 lg:gap-16">

                {/* Main Content (70%) */}
                <div className="md:col-span-7 space-y-12">
                    <FadeSection>
                        <h2 className="font-heading font-normal text-[32px] md:text-[40px] lg:text-[50px] leading-[42px] md:leading-[52px] lg:leading-[60px] text-[rgb(10,4,4)] mb-6">
                            {post.details.heading}
                        </h2>
                        <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)] mb-8">
                            {post.details.intro}
                        </p>

                        <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-2xl mb-12">
                            <p className="font-body font-normal text-[18px] leading-[31px] text-[rgb(10,4,4)] text-center">
                                "{post.details.quote}"
                            </p>
                        </div>

                        <div className="rounded-[20px] overflow-hidden mb-12">
                            <img src={post.contentImg} alt="Detail" className="w-full h-auto object-cover" />
                        </div>

                        <h3 className="font-heading font-normal text-[26px] lg:text-[32px] leading-[36px] lg:leading-[42px] text-[rgb(10,4,4)] mb-4">
                            {post.details.section1.title}
                        </h3>
                        <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)] mb-6">
                            {post.details.section1.desc}
                        </p>

                        <h3 className="font-heading font-normal text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-4">
                            {post.details.tipsTitle}
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {post.details.tips.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(159,43,43)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)] mb-8">
                            {post.details.midText}
                        </p>

                        <h3 className="font-heading font-normal text-[26px] lg:text-[32px] leading-[36px] lg:leading-[42px] text-[rgb(10,4,4)] mb-4">
                            {post.details.section2.title}
                        </h3>
                        <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)] mb-6">
                            {post.details.section2.desc}
                        </p>

                        <h4 className="font-heading font-normal text-[20px] leading-[32px] text-[rgb(10,4,4)] mb-2">
                            {post.details.stepsTitle}
                        </h4>
                        <ul className="space-y-4 mb-8">
                            {post.details.steps.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(159,43,43)] mt-2.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </FadeSection>
                </div>

                {/* Sidebar (30%) */}
                <div className="md:col-span-3 space-y-12">
                    {/* Author Widget */}
                    <FadeSection delay={0.1}>
                        <div className="md:pt-6 rounded-[20px]">
                            <img src={post.authorImg} alt={post.author} className="w-full aspect-[0.85] rounded-[20px] object-cover mb-6" />
                            <h4 className="font-heading font-normal text-[24px] lg:text-[30px] leading-[34px] lg:leading-[40px] text-[rgb(10,4,4)] mb-2">{post.author}</h4>
                            <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)]">{post.authorRole}</p>
                        </div>
                    </FadeSection>

                    {/* Categories */}
                    <FadeSection delay={0.2}>
                        <h4 className="font-heading font-normal text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-6">Categories</h4>
                        <ul className="space-y-3">
                            {Array.from(new Set(blogPosts.map(p => p.category))).map((c, i) => (
                                <li key={i}>
                                    <Link to="/blog" className="font-body text-[16px] text-[rgb(80,80,80)] hover:text-[rgb(159,43,43)] transition-colors">
                                        {c}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FadeSection>

                    {/* Latest Post */}
                    <FadeSection delay={0.3}>
                        <h4 className="font-heading font-normal text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-6">Latest Post</h4>
                        <div className="space-y-8">
                            {relatedPosts.map((p, i) => (
                                <Link key={i} to={`/blog/${p.slug}`} className="group block">
                                    <div className="rounded-[12px] overflow-hidden mb-4 h-[230px]">
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)]">{p.date}</p>
                                        <h5 className="font-heading font-normal text-[16px] leading-[21px] text-[rgb(10,4,4)] group-hover:text-[rgb(159,43,43)] transition-colors line-clamp-2">
                                            {p.title}
                                        </h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </FadeSection>

                    {/* Tags */}
                    <FadeSection delay={0.4}>
                        <h4 className="font-heading font-normal text-[24px] leading-[34px] text-[rgb(10,4,4)] mb-6">Tag</h4>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <Link key={i} to="/blog" className="font-body font-normal text-[14px] leading-[20px] uppercase text-[rgb(159,43,43)] border border-[rgb(159,43,43)] px-4 py-2 rounded-md hover:bg-[rgb(159,43,43)] hover:text-white transition-all">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsContent;
