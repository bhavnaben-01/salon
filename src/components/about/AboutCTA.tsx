import { Link } from "react-router-dom";

const AboutCTA = () => {
    return (
        <section className="relative overflow-hidden px-5 md:px-8 lg:px-16 xl:px-28 min-h-[300px] flex items-center">
            <img src="/images/salon/CTA-image.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/60" />
            <div className="relative max-w-[1400px] mx-auto py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 w-full">
                <h2 className="font-heading text-[30px] md:text-[50px] font-normal leading-[1.2] md:leading-[60px] text-[rgb(255,255,255)]">
                    Discover Beauty Savings: 20% Off Your First Appointment!
                </h2>
                <Link to="/book-appointment" className="font-body text-[14px] font-medium leading-[14px] uppercase tracking-[1px] bg-primary-foreground text-foreground px-8 py-3.5 rounded-t-md rounded-bl-md hover:bg-[rgb(159,43,43)] hover:text-white transition-colors whitespace-nowrap">
                    Book Appointment
                </Link>
            </div>
        </section>
    );
};

export default AboutCTA;
