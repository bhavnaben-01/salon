import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import AboutHero from "@/components/about/AboutHero";
import AboutGalleryRow from "@/components/about/AboutGalleryRow";
import AboutStory from "@/components/about/AboutStory";
import AboutInnovation from "@/components/about/AboutInnovation";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";
import AboutReviews from "@/components/about/AboutReviews";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us — Solaro</title>
        <meta name="description" content="Learn about Solaro's story, our expert team, and our passion for beauty." />
      </Helmet>

      <main className="overflow-hidden">
      <AboutHero />
      <AboutStory />
      <AboutInnovation />
      <AboutGalleryRow />
      <AboutReviews />
      <AboutTeam />
      <AboutCTA />
      <NewsletterInstagram />
      </main>
    </>
  );
};

export default About;
