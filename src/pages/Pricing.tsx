import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingFAQ from "@/components/pricing/PricingFAQ";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing — Solaro</title>
        <meta name="description" content="Explore Solaro's pricing plans for premium beauty services." />
      </Helmet>

      <main className="overflow-hidden">
        <PricingHero />
        <PricingPlans />
        <PricingFAQ />
        <NewsletterInstagram />
      </main>
    </>
  );
};

export default Pricing;
