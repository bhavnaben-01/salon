import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesBanner from "@/components/services/ServicesBanner";
import ServicesList from "@/components/services/ServicesList";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services — Solaro</title>
        <meta name="description" content="Explore Solaro's premium beauty services including hair, nails, skincare, and more." />
      </Helmet>

      <ServicesHero />
      <ServicesBanner />
      <ServicesList />
      <NewsletterInstagram />
    </>
  );
};

export default Services;
