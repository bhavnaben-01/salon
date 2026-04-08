import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  label: string;
  heading: string;
  paragraph?: string;
  viewAllLink?: string;
  light?: boolean;
}

const SectionHeader = ({ label, heading, paragraph, viewAllLink, light = false }: SectionHeaderProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mb-12 md:mb-16 fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="md:w-1/2">
        <span className={`font-body text-[14px] leading-[20px] font-medium uppercase tracking-[2px] ${light ? "text-white/80" : "text-primary"}`}>
          {label}
        </span>
        <h2 className={`font-heading text-3xl md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] mt-3 ${light ? "text-[#faf5f1]" : "text-foreground"}`}>
          {heading}
        </h2>
      </div>
      {(paragraph || viewAllLink) && (
        <div className="md:w-1/2">
          {paragraph && (
            <p className={`font-body text-[16px] leading-[26px] ${light ? "text-white/60" : "text-muted-foreground"}`}>
              {paragraph}
            </p>
          )}
          {viewAllLink && (
            <Link
              to={viewAllLink}
              className={`inline-block mt-4 font-body text-[14px] font-semibold uppercase tracking-[1px] pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${light ? "text-white after:bg-white" : "text-primary after:bg-primary"}`}
            >
              View All
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
