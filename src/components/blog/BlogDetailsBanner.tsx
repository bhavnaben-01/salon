import FadeSection from "../FadeSection";
import { BlogPost } from "@/data/blogDetails";

const BlogDetailsBanner = ({ post }: { post: BlogPost }) => {
    if (!post) return null;
    return (
        <section className="px-5 md:px-8 lg:px-16 xl:px-28 pb-6">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection>
                    <div className="rounded-[20px] overflow-hidden">
                        <img src={post.img} alt={post.title} className="w-full h-[300px] md:h-[450px] object-cover" />
                    </div>
                </FadeSection>
            </div>
        </section>
    );
};

export default BlogDetailsBanner;
