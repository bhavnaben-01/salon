import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import ServiceDetailsHero from "@/components/services/ServiceDetailsHero";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ServiceDetailsGallery from "@/components/services/ServiceDetailsGallery";
import ServiceDetailsAppointment from "@/components/services/ServiceDetailsAppointment";
import { serviceDetails, defaultServiceDetail } from "@/data/serviceDetails";
import AppointmentForm from "@/components/appointment/AppointmentForm";

const ServiceDetails = () => {
    const { slug } = useParams();
    const service = serviceDetails.find(s => s.slug === slug) || defaultServiceDetail;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <>
            <Helmet>
                <title>{service.title} — Atelier</title>
                <meta name="description" content={service.heroDesc.slice(0, 160)} />
            </Helmet>

            <main className="overflow-hidden">
                <ServiceDetailsHero service={service} />
                <ServiceDetailsContent service={service} />
                <ServiceDetailsGallery images={service.gallery} />
                <AppointmentForm variant="dark" />
                <NewsletterInstagram />
            </main>
        </>
    );
};

export default ServiceDetails;
