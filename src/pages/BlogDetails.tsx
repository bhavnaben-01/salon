import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import BlogDetailsHero from "@/components/blog/BlogDetailsHero";
import BlogDetailsBanner from "@/components/blog/BlogDetailsBanner";
import BlogDetailsContent from "@/components/blog/BlogDetailsContent";
import { blogPosts } from "@/data/blogDetails";

const BlogDetails = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="font-heading text-4xl">Post not found</h1>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} — Solaro</title>
                <meta name="description" content={post.shortDesc} />
            </Helmet>

            <BlogDetailsHero post={post} />
            <BlogDetailsBanner post={post} />
            <BlogDetailsContent post={post} />
            <NewsletterInstagram />
        </>
    );
};

export default BlogDetails;
