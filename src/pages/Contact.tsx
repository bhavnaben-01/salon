import { useRef } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="pt-20 bg-background min-h-screen">
            <Helmet>
                <title>Contact Us — Solaro</title>
                <meta name="description" content="Get in touch with us. We would love to hear from you." />
            </Helmet>
            <ContactHero />
            <ContactForm />
            <ContactInfo />
            <NewsletterInstagram />
        </div>
    );
};

export default Contact;
