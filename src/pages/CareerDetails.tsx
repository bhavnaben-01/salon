import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import CareerDetailsHero from "@/components/career/CareerDetailsHero";
import CareerDetailsContent from "@/components/career/CareerDetailsContent";

const CareerDetails = () => {
  const { slug } = useParams();
  const title = slug ? slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Position";

  return (
    <>
      <Helmet>
        <title>{title} — Solaro Careers</title>
        <meta name="description" content={`Apply for the ${title} position at Solaro.`} />
      </Helmet>

      <CareerDetailsHero title={title} />
      <CareerDetailsContent title={title} />
      <NewsletterInstagram />
    </>
  );
};

export default CareerDetails;
