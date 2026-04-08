import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import NewsletterInstagram from "@/components/NewsletterInstagram";
import FadeSection from "@/components/FadeSection";

const pricingData: Record<string, {
    name: string;
    price: number;
    description: string;
    features: string[];
}> = {
    "standard": {
        name: "Standard Package",
        price: 299.00,
        description: "Bibendum mauris gravida fringilla elit purus netus sagittis adipiscing a. Dui sed adipiscing tortor lacus fringilla viverra. Turpis enim at pellentesque feugiat diam mattis placerat enim tincidunt. Auctor porttitor suspendisse sed pretium eget phasellus volutpat quam adipiscing.",
        features: [
            "Dermaplaning facial",
            "Acne facial treatment",
            "Massage",
            "Hydrating mask packs",
            "Microneedling"
        ]
    },
    "lux": {
        name: "Lux Package",
        price: 799.00,
        description: "Bibendum mauris gravida fringilla elit purus netus sagittis adipiscing a. Dui sed adipiscing tortor lacus fringilla viverra. Turpis enim at pellentesque feugiat diam mattis placerat enim tincidunt. Auctor porttitor suspendisse sed pretium eget phasellus volutpat quam adipiscing.",
        features: [
            "Full Hair Service",
            "Deluxe Skin Treatment",
            "Lash Extensions & Lift",
            "Brow Lamination",
            "Lactic acid peels"
        ]
    },
    "premium-package": {
        name: "Premium Package",
        price: 499.00,
        description: "Bibendum mauris gravida fringilla elit purus netus sagittis adipiscing a. Dui sed adipiscing tortor lacus fringilla viverra. Turpis enim at pellentesque feugiat diam mattis placerat enim tincidunt. Auctor porttitor suspendisse sed pretium eget phasellus volutpat quam adipiscing.",
        features: [
            "Haircut & Styling",
            "Advanced Skin Treatment",
            "Lash Extensions",
            "Brow Tint & Shape",
            "Glycolic acid facial"
        ]
    }
};

const PricingDetails = () => {
    const { slug } = useParams();
    const { addToCart } = useCart();

    // Handle both "premium" and "premium-package" slugs if needed, or stick to exact match
    const packageData = pricingData[slug || "standard"] || pricingData["standard"];

    const handleAddToCart = () => {
        addToCart({
            id: slug || "standard",
            name: packageData.name,
            price: packageData.price,
            quantity: 1
        });
    };

    return (
        <>
            <Helmet>
                <title>{packageData.name} — Solaro</title>
                <meta name="description" content={packageData.description.slice(0, 160)} />
            </Helmet>

            <section className="px-5 md:px-8 lg:px-16 xl:px-28 pt-10 pb-20">
                <div className="max-w-[1400px] mx-auto">
                    <FadeSection>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                            {/* Left Content */}
                            <div className="flex-1">
                                <h1 className="font-heading font-normal text-3xl md:text-[60px] leading-tight text-[rgb(10,4,4)] mb-12">
                                    {packageData.name}
                                </h1>

                                <div className="space-y-6 mb-12">
                                    <p className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                                        {packageData.description}
                                    </p>
                                    <p className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                                        A nisl nascetur molestie at volutpat sed. Nisl libero ullamcorper id porttitor egestas non. Amet adipiscing donec platea ultrices mollis malesuada eu neque. Magnis tristique lectus lobortis sollicitudin pulvinar convallis vitae ut consequat.
                                    </p>
                                </div>

                                <div className="space-y-6 mb-12">
                                    <h3 className="font-heading font-normal text-[32px] md:text-[40px] leading-[1.2] text-[rgb(10,4,4)]">
                                        {packageData.name} Features
                                    </h3>
                                    <p className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                                        Our {packageData.name} Plan is designed to provide you with the ultimate Nexto experience. With this plan, you gain access to a {packageData.features[0]}, {packageData.features[1]}, {packageData.features[2]}.
                                    </p>
                                    <p className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                                        Ultricies sapien non fermentum ac interdum elit augue nulla amet pulvinar arcu tincidunt eu mauris leo.
                                    </p>
                                    <ul className="space-y-4 list-disc pl-5 marker:text-black">
                                        {packageData.features.map((feature, i) => (
                                            <li key={i} className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)] pl-2">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="font-body text-[16px] leading-[26px] text-[rgb(80,80,80)]">
                                    Tailoring Your Solution for Success Scelerisque neque mattis ridiculus tempus. Mi tempor mauris interdum suspendisse vitae Commodo nibh cursus sed in tincidunt ultricies aliquet Orci sodales lacus orci nunc ultrices arcu sed aliquet praesent Feugiat tincidunt tempor molestie morbi in arcu Consectetur pellentesque lorem vitae sed nunc. Why Choose the Basic Package Purus dictum quisque quam leo ipsum velit tellus faucibus eget Commodo sagittis rhoncus duis ullamcorper vitae Risus tellus aliquam massa elit. Urna odio at amet sit pellentesque tristique dictum faucibus orci Aliquet nunc eget metus arcu neque Elementum diam elementum quis laoreet.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div className="xl:w-[400px] shrink-0 pt-4">
                                <div className=" top-32">
                                    <div className="font-heading font-normal text-[40px] md:text-[50px] leading-[1.2] text-[rgb(10,4,4)] mb-8">
                                        $ {packageData.price.toFixed(2)} USD
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className="font-body text-[12px] font-semibold uppercase tracking-[2px] bg-[rgb(159,43,43)] text-white px-8 py-4 rounded-t-md rounded-bl-md hover:bg-[rgb(159,43,43)]/90 transition-all"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeSection>
                </div>
            </section>

            <NewsletterInstagram />
        </>
    );
};

export default PricingDetails;
