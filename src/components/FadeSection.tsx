import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";

interface FadeSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const FadeSection = ({ children, className = "", delay = 0 }: FadeSectionProps) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
        <div
            ref={ref}
            className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default FadeSection;
