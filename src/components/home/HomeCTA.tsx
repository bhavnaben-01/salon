import { Link } from "react-router-dom";

const HomeCTA = () => {
    return (
        <section className="relative overflow-hidden px-5 md:px-8 lg:px-16 xl:px-28">
            <img src="/images/salon/Treatment Image-002.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/60" />
            <div className="relative max-w-[1400px] mx-auto py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-8">
                <h2 className="font-heading text-3xl md:text-[50px] md:leading-[1.2] text-primary-foreground max-w-2xl">
                    Ready to transform your look? Book your appointment today.
                </h2>
                <Link to="/book-appointment" className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary-foreground text-foreground px-8 py-3.5 btn-radius hover:bg-primary-foreground/90 transition-colors whitespace-nowrap">
                    Book Now
                </Link>
            </div>
        </section>
    );
};

export default HomeCTA;
