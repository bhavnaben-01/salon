import FadeSection from "../FadeSection";
import { BlogPost } from "@/data/blogDetails";

const BlogDetailsHero = ({ post }: { post: BlogPost }) => {
    if (!post) return null;

    return (
        <section className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 xl:px-28 pt-10 md:pt-20 pb-16">
            <FadeSection className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="md:w-2/3">
                    <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-4 block">BLOG</span>
                    <h1 className="font-heading font-normal text-[28px] md:text-[34px] xl:text-[50px] leading-[1.1] text-[rgb(10,4,4)]">{post.title}</h1>
                </div>
                <div className="md:w-1/3 md:text-right flex flex-col items-start md:items-start justify-end">
                    <p className="font-body font-normal text-[14px] md:leading-[20px] lg:text-[16px] leading-[24px] text-[rgb(80,80,80)] max-w-xl md:text-left md:mb-4">
                        {post.shortDesc}
                    </p>
                    <span className="font-body font-medium text-[14px] md:leading-[20px] lg:text-[16px] leading-[24px] text-[#505050] flex items-left  gap-2">
                        {post.date} <span className="text-[rgb(159,43,43)]">✦</span> {post.category}
                    </span>
                </div>
            </FadeSection>
        </section>
    );
};

export default BlogDetailsHero;
