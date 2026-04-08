import { useState, useEffect, useRef } from "react";

interface CountingNumberProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

const CountingNumber = ({ end, duration = 2000, suffix = "", className = "" }: CountingNumberProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let startTimestamp: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                        setCount(Math.floor(progress * end));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };

                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [end, duration]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
};

export default CountingNumber;
