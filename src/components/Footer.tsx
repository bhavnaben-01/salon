import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-[#f6ebe7] text-foreground pt-20 pb-0 px-5 md:px-8 lg:px-16 xl:px-28">
    <div className="max-w-[1400px] mx-auto">
      {/* Brand row */}
      <div className="flex items-center gap-6 mb-16">
        <div className="flex-1 border-t border-[#9f2b2b]" />
        <Link to="/">
          <Logo className="h-12 w-auto" />
        </Link>
        <div className="flex-1 border-t border-[#9f2b2b]" />
      </div>

      {/* Content grid */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-8 mb-8">
        {/* Left column / Top Row on Mobile */}
        <div className="flex flex-row md:flex-col justify-between h-auto md:h-full md:mb-6">
          <div className="text-left">
            <h4 className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-6">PAGES</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.name} to={item.path} className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] hover:text-[rgb(159,43,43)] transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-right md:text-left">
            <h4 className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-6">ADDRESS</h4>
            <p className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)]">
              55 East Birchwood Ave.<br />
              Brooklyn, New York 11201,<br />
              United States
            </p>
          </div>
        </div>

        {/* Center column / Middle Section on Mobile */}
        <div className="flex flex-col items-center text-center justify-between h-auto md:h-full gap-12 md:gap-0">
          <div className="flex items-center gap-4">
            {[
              { icon: "/images/salon/linkedin.svg", href: "https://www.linkedin.com/", target: "_blank", label: "Linkedin" },
              { icon: "/images/salon/facebook.svg", href: "https://www.facebook.com/", target: "_blank", label: "Facebook" },
              { icon: "/images/salon/x.svg", href: "https://twitter.com/", target: "_blank", label: "Twitter" },
              { icon: "/images/salon/instagram.svg", href: "https://www.instagram.com/", target: "_blank", label: "Instagram" }
            ].map((social, i) => (
              <a key={i} href={social.href} target={social.target} className="hover:opacity-70 transition-opacity">
                <img src={social.icon} alt={social.label} className="w-16 h-16" />
              </a>
            ))}
          </div>

          <div className="relative border border-primary rounded-[10px] px-4 py-8 w-full max-w-[380px]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2  flex items-center justify-center">
              <img src="/images/salon/clock.svg" alt="Clock" className="w-12 h-12" />
            </div>
            <p className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] mb-2">
              We're currently open!
            </p>
            <p className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)]">
              working days 8:00 - 20:00 & sundays 8:00 - 16:00
            </p>
          </div>
        </div>

        {/* Right column / Bottom Row on Mobile */}
        <div className="flex flex-row md:flex-col justify-between h-auto md:h-full">
          <div className="text-left md:text-right">
            <h4 className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-6">SUPPORT</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Career", path: "/career" },
                { name: "Book Appointment", path: "/book-appointment" },
                { name: "Pricing", path: "/pricing" },

              ].map((item) => (
                <Link key={item.name} to={item.path} className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] hover:text-[rgb(159,43,43)] transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-right">
            <h4 className="font-body font-medium text-[14px] leading-[18px] text-[rgb(159,43,43)] uppercase tracking-[2px] mb-6">CONTACT</h4>
            <div className="flex flex-col gap-2 items-end">
              <a href="mailto:hello@example.com" className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] hover:text-[rgb(159,43,43)] transition-colors">
                hello@example.com
              </a>
              <a href="tel:+12345678900" className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)] hover:text-[rgb(159,43,43)] transition-colors">
                +1 234 567 8900
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-[#9f2b2b] py-8 ">
      <div className="max-w-[1400px] mx-auto flex flex-row justify-between items-center gap-4">
        <p className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)]">© {new Date().getFullYear()} solano.</p>
        <p className="font-body font-normal text-[14px] leading-[20px] text-[rgb(80,80,80)]">Made with <a href="https://tryzeniq.com" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(159,43,43)] transition-colors">TryzenIQ</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
