import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import CareerHero from "@/components/career/CareerHero";
import CareerBanner from "@/components/career/CareerBanner";
import CareerWhyJoin from "@/components/career/CareerWhyJoin";
import CareerPositions from "@/components/career/CareerPositions";

const Career = () => {
    return (
        <>
            <Helmet>
                <title>Careers — Solaro</title>
                <meta name="description" content="Join the Solaro team. Explore open positions and grow your career in beauty." />
            </Helmet>

            <CareerHero />
            <CareerBanner />
            <CareerWhyJoin />
            <CareerPositions />
            <NewsletterInstagram />
        </>
    );
};

export default Career;
