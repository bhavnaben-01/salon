export interface ServiceDetail {
    slug: string;
    category: string;
    title: string;
    heroDesc: string;
    heroImage: string;
    content: {
        heading1: string;
        desc1: string;
        quote: string;
        contentImage: string;
        heading2: string;
        desc2: string;
        featuresTitle: string;
        features: string[];
        midDesc: string;
        heading3: string;
        desc3: string;
        tipsTitle: string;
        tips: string[];
        finalDesc: string;
    };
    gallery: string[];
}

const commonContentImage = "/images/salon/blog-details.png";

// Reusable default content structure
const defaultContent = {
    heading1: "Premium Quality Care",
    desc1: "Our salon provides top-tier beauty services with a focus on client satisfaction and comfort. We use only the best products to ensure high-quality results for every treatment.",
    quote: "Beauty is being the best possible version of yourself on the inside and out.",
    contentImage: commonContentImage,
    heading2: "Our Approach",
    desc2: "We take a personalized approach to every service, taking the time to understand your needs and preferences. Our team is dedicated to continuous learning to bring you the latest techniques.",
    featuresTitle: "What We Offer",
    features: [
        "Professional consultation",
        "Customized treatment plans",
        "Premium product usage",
        "Relaxing environment",
        "Expert aftercare advice"
    ],
    midDesc: "Your comfort is our priority. Our salon is designed to be a sanctuary where you can escape the stresses of daily life and focus on yourself.",
    heading3: "Why Choose Us",
    desc3: "With years of experience and a passion for beauty, our team delivers consistent, exceptional results. We value the trust you place in us.",
    tipsTitle: "Client Tips",
    tips: [
        "Arrive 10 minutes early for your appointment",
        "Stay hydrated after treatments",
        "Follow our recommended home care routine"
    ],
    finalDesc: "We look forward to welcoming you to our salon and helping you achieve your beauty goals."
};

const defaultGallery = [
    "/images/salon/gallery-img-01.jpg",
    "/images/salon/gallery-img-03.jpg",
    "/images/salon/gallery-img-04.jpg",
    "/images/salon/Treatment Image-001.jpg"
];

export const serviceDetails: ServiceDetail[] = [
    {
        slug: "makeup-services",
        category: "SERVICES",
        title: "Makeup Services",
        heroDesc: "Our makeup services are designed to transform your look and boost your confidence. From natural glows to dramatic evening looks, our artists create specific styles.",
        heroImage: "/images/salon/Makeup-service.png",
        content: {
            ...defaultContent,
            heading1: "Transform Your Look",
            desc1: "We believe that makeup is an art form that should enhance your natural beauty, not mask it. Our professional makeup artists use high-quality, long-lasting products to create looks that are tailored to your unique features and personal style.",
            quote: "Great makeup doesn't happen by chance, it happens by appointment. enhance your natural beauty with our professional touch.",
            heading2: "Coloring & Contouring",
            desc2: "Our coloring and contouring techniques are designed to sculpt and define your face. We carefully select shades that complement your skin tone and undertones, ensuring a flawless and radiant finish.",
            featuresTitle: "Treatments",
            features: [
                "Full face application including lashes",
                "Bridal and wedding party makeup",
                "Special effects and artistic makeup",
                "Airbrush foundation for a flawless finish",
                "Eyebrow shaping and filling"
            ],
            midDesc: "Whether you're preparing for a photoshoot, a wedding, or a night out, our team ensures you leave feeling confident and beautiful. We also offer consultations to help you find the perfect products for your daily routine.",
            heading3: "Special Occasion Styling",
            desc3: "Make your special moments even more memorable with our bespoke styling services. We collaborate with you to design a look that matches your outfit, the event theme, and your personal comfort level.",
            tipsTitle: "Application Tips",
            tips: [
                "Exfoliate and moisturize skin before your appointment",
                "Bring inspiration photos if you have a specific look in mind",
                "Wear a button-down shirt to avoid smudging when changing"
            ],
            finalDesc: "Our goal is to provide a relaxing and enjoyable experience. Sit back, relax, and let our experts work their magic while you enjoy a moment of pampering."
        },
        gallery: [
            "/images/salon/gallery-img-01.jpg",
            "/images/salon/gallery-img-6.png",
            "/images/salon/gallery-img-03.jpg",
            "/images/salon/gallery-img-04.jpg"
        ]
    },
    {
        slug: "hair-services",
        category: "SERVICES",
        title: "Hair Services",
        heroDesc: "Expert cuts, colors, and styling to help you express your unique personality. Our stylists stay ahead of trends while honoring classic techniques.",
        heroImage: "/images/salon/hair-service.png",
        content: {
            ...defaultContent,
            heading1: "Transform Your Hair",
            desc1: "Whether you're looking for a subtle trim or a complete makeover, our hair specialists are here to guide you. We analyze your hair type, face shape, and lifestyle to recommend the best cut and color for you.",
            quote: "Life is too short to have boring hair. Let us give you the crown you deserve.",
            heading2: "Coloring",
            desc2: "From balayage to full coloring, our color experts use premium products to protect your hair's health while delivering vibrant, lasting color. We specialize in color correction and creative coloring.",
            featuresTitle: "Treatments",
            features: [
                "Precision haircuts for all hair types",
                "Deep conditioning and repair treatments",
                "Keratin smoothing treatments",
                "Scalp health assessments",
                "Custom color blends"
            ],
            midDesc: "Healthy hair is beautiful hair. That's why we incorporate nourishing treatments into every service, ensuring your hair leaves our salon looking and feeling its absolute best.",
            heading3: "Special Occasion Styling",
            desc3: "From intricate updos to cascading waves, we create stunning hairstyles for weddings, proms, and galas. Let us help you shine on your big day.",
            tipsTitle: "Maintenance Tips",
            tips: [
                "Use color-safe shampoo and conditioner",
                "Schedule regular trims every 6-8 weeks",
                "Protect hair from heat styling damage"
            ],
            finalDesc: "We are committed to sustainable beauty. Ask us about our eco-friendly hair care product lines and how you can maintain your look at home."
        },
        gallery: [
            "/images/salon/gallery-img-05.jpg",
            "/images/salon/Treatment Image-002.jpg",
            "/images/salon/Treatment Image-003.jpg",
            "/images/salon/gallery-img-01.jpg"
        ]
    },
    {
        slug: "nail-services",
        category: "SERVICES",
        title: "Nail Services",
        heroDesc: "We offer everything from classic manicures and pedicures to creative nail art.",
        heroImage: "/images/salon/nail-service.png",
        content: { ...defaultContent, heading1: "Exquisite Nail Care" },
        gallery: [
            "/images/salon/gallery-img-03.jpg",
            "/images/salon/gallery-img-04.jpg",
            "/images/salon/Treatment Image.jpg",
            "/images/salon/gallery-img-6.png"
        ]
    },
    {
        slug: "threading",
        category: "SERVICES",
        title: "Threading",
        heroDesc: "Our threading services are designed to transform your look and boost your confidence.",
        heroImage: "/images/salon/Threading-service.png",
        content: { ...defaultContent, heading1: "Precise Threading" },
        gallery: [
            "/images/salon/gallery-img-01.jpg",
            "/images/salon/gallery-img-04.jpg",
            "/images/salon/Treatment Image.jpg",
            "/images/salon/gallery-img-05.jpg"
        ]
    },
    {
        slug: "massage",
        category: "SERVICES",
        title: "Massage",
        heroDesc: "Relax with our aromatherapy massage, using personalized essential oils for a soothing experience.",
        heroImage: "/images/salon/Massage-service.png",
        content: { ...defaultContent, heading1: "Relaxing Massage Therapy" },
        gallery: [
            "/images/salon/Treatment Image-002.jpg",
            "/images/salon/Treatment Image-003.jpg",
            "/images/salon/gallery-img-03.jpg",
            "/images/salon/gallery-img-6.png"
        ]
    },
    {
        slug: "lash-services",
        category: "SERVICES",
        title: "Lash Services",
        heroDesc: "Enhance your natural lashes with a lift and tint, creating a beautiful, curled appearance.",
        heroImage: "/images/salon/Lash-service.png",
        content: { ...defaultContent, heading1: "Stunning Lashes" },
        gallery: [
            "/images/salon/gallery-img-01.jpg",
            "/images/salon/gallery-img-05.jpg",
            "/images/salon/gallery-img-04.jpg",
            "/images/salon/Treatment Image.jpg"
        ]
    },
    {
        slug: "skin-care",
        category: "SERVICES",
        title: "Skin Care",
        heroDesc: "Rejuvenating facials and advanced skincare solutions for glowing, healthy skin.",
        heroImage: "/images/salon/skin-service.png",
        content: { ...defaultContent, heading1: "Radiant Skin Care" },
        gallery: [
            "/images/salon/gallery-img-03.jpg",
            "/images/salon/Treatment Image-002.jpg",
            "/images/salon/gallery-img-6.png",
            "/images/salon/gallery-img-05.jpg"
        ]
    },
    {
        slug: "waxing-services",
        category: "SERVICES",
        title: "Waxing Services",
        heroDesc: "We use high-quality wax to minimize discomfort and ensure long-lasting results.",
        heroImage: "/images/salon/waxing-service.png",
        content: { ...defaultContent, heading1: "Smooth Waxing Services" },
        gallery: [
            "/images/salon/gallery-img-04.jpg",
            "/images/salon/Treatment Image-003.jpg",
            "/images/salon/gallery-img-01.jpg",
            "/images/salon/gallery-img-6.png"
        ]
    }
];

// Default fallback for other services to avoid empty pages
export const defaultServiceDetail: ServiceDetail = {
    slug: "default",
    category: "SERVICES",
    title: "Service Details",
    heroDesc: "Experience our premium beauty services designed for your relaxation and rejuvenation.",
    heroImage: "/images/salon/Hero Img.jpg",
    content: defaultContent,
    gallery: defaultGallery
};
