import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog — Solaro</title>
        <meta name="description" content="Stay updated with beauty tips, trends, and expert advice from Solaro." />
      </Helmet>

      <BlogHero />
      <BlogPosts />
      <NewsletterInstagram />
    </>
  );
};

export default Blog;
