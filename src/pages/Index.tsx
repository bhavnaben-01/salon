import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeTreatments from "@/components/home/HomeTreatments";
import HomeBlog from "@/components/home/HomeBlog";
import HomeCTA from "@/components/home/HomeCTA";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import AboutTeam from "@/components/about/AboutTeam";
import AboutReviews from "@/components/about/AboutReviews";
import AboutGalleryRow from "@/components/about/AboutGalleryRow";
import AboutCTA from "@/components/about/AboutCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Solaro — Luxury Beauty Salon</title>
        <meta name="description" content="Discover your beauty potential with Solaro. Premium beauty services tailored to you." />
      </Helmet>
<main className="overflow-hidden">
      <HomeHero />
      <HomeServices />
      <HomeTreatments />
      <AboutGalleryRow />
      <AboutReviews />
      <AboutTeam />
      <AppointmentForm variant="dark" />
      <HomeBlog />
      <AboutCTA />
      <PricingFAQ />
      <NewsletterInstagram />
      </main>
    </>
  );
};

export default Index;
