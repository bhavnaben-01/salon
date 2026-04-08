import FadeSection from "../FadeSection";

const BlogHero = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 xl:px-28 pt-10 lg:pt-20 pb-16">
            <FadeSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <span className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] block">BLOG</span>
                    <h1 className="font-heading font-normal text-[30px] md:text-[50px] xl:text-[64px] leading-[1.1] md:leading-[83px] text-[rgb(10,4,4)]">Latest Article</h1>
                </div>
                <p className="font-body font-normal text-[16px] leading-[26px] text-[rgb(80,80,80)]  max-w-sm md:max-w-xs lg:max-w-md xl:max-w-xl md:mb-2">
                    Stay updated with the latest beauty tips, trends, and news from our salon experts. Our blog is your go-to source for all things beauty.
                </p>
            </FadeSection>
        </section>
    );
};

export default BlogHero;
