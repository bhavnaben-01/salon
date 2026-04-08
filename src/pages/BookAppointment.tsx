import { Helmet } from "react-helmet-async";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import AppointmentForm from "@/components/appointment/AppointmentForm";

const BookAppointment = () => {
  return (
    <>
      <Helmet>
        <title>Book an Appointment — Solaro</title>
        <meta name="description" content="Book your appointment at Solaro and experience premium beauty services." />
      </Helmet>

      <main className="overflow-hidden">
        <AppointmentForm variant="light" />
        <NewsletterInstagram />
      </main>
    </>
  );
};

export default BookAppointment;
