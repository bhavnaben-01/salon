import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Shield, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount, setIsCartOpen } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const profileRef = useRef<HTMLDivElement>(null);

  // Hide navbar on auth and admin pages
  const hideNavbar = ["/login", "/signup", "/admin"].includes(location.pathname);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  if (hideNavbar) return null;

  const linkStyles = `font-body text-sm font-medium uppercase tracking-[2px] transition-colors hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full`;

  const initials = user
    ? user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <header className="w-full pt-6 px-5 md:px-8 lg:px-16 xl:px-28 relative z-50">
      <div className="max-w-[1400px] mx-auto border border-border rounded-lg h-16 flex items-center justify-between px-6 lg:px-8 relative bg-[#fbf4ef] backdrop-blur-sm">
        {/* Desktop Nav - Visible only min-1400px */}
        <nav className="hidden min-[1400px]:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkStyles} ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo - Center Desktop (min-1400px), Left Mobile */}
        <Link
          to="/"
          className="flex items-center min-[1400px]:absolute min-[1400px]:left-1/2 min-[1400px]:-translate-x-1/2 min-[1400px]:top-1/2 min-[1400px]:-translate-y-1/2 min-[1400px]:h-10 min-[1400px]:px-8 min-[1400px]:border-l min-[1400px]:border-r min-[1400px]:border-[#9f2b2b]/30"
        >
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop CTA + Profile - Right - Visible only min-1400px */}
        <div className="hidden min-[1400px]:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 group"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-all group-hover:bg-primary/20 group-hover:border-primary/40">
                  <span className="font-body text-[11px] font-bold text-primary">{initials}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] w-56 bg-card border border-border rounded-xl shadow-xl overflow-hidden animate-fade-in-up z-[60]">
                  <div className="px-4 py-3 border-b border-border bg-muted/30">
                    <p className="font-body text-sm font-medium text-foreground truncate">{user?.fullName}</p>
                    <p className="font-body text-xs text-muted-foreground truncate">{user?.email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-foreground hover:bg-muted/50 transition-colors"
                      onClick={() => setProfileOpen(false)}
                    >
                      <User className="w-4 h-4 text-muted-foreground" />
                      My Profile
                    </Link>
                    {user?.role === "admin" && (
                      <Link
                        to="/admin"
                        className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-foreground hover:bg-muted/50 transition-colors"
                        onClick={() => setProfileOpen(false)}
                      >
                        <Shield className="w-4 h-4 text-muted-foreground" />
                        Admin Panel
                      </Link>
                    )}
                  </div>
                  <div className="border-t border-border py-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2.5 w-full font-body text-sm text-destructive hover:bg-destructive/5 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signup"
              className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-6 py-2.5 btn-radius transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
          )}

          <Link
            to="/book-appointment"
            className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-6 py-2.5 btn-radius transition-colors hover:bg-primary/90"
          >
            Book a Appointment
          </Link>
        </div>

        {/* Mobile right section */}
        <div className="min-[1400px]:hidden flex items-center gap-3">
          {isAuthenticated && (
            <Link to="/profile" className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-body text-[10px] font-bold text-primary">{initials}</span>
            </Link>
          )}
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="min-[1400px]:hidden max-w-[1400px] mx-auto mt-2 border border-border rounded-lg bg-card p-6 animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`${linkStyles} ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground"} w-fit`}
              >
                {link.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setMobileOpen(false)}
                  className={`${linkStyles} text-muted-foreground w-fit`}
                >
                  MY PROFILE
                </Link>
                {user?.role === "admin" && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileOpen(false)}
                    className={`${linkStyles} text-muted-foreground w-fit`}
                  >
                    ADMIN PANEL
                  </Link>
                )}
                <button
                  onClick={() => { handleLogout(); setMobileOpen(false); }}
                  className={`${linkStyles} text-destructive w-fit text-left`}
                >
                  SIGN OUT
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-6 py-3 btn-radius text-center transition-colors hover:bg-primary/90 mt-2"
              >
                Get Started
              </Link>
            )}

            <Link
              to="/book-appointment"
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-6 py-3 btn-radius text-center transition-colors hover:bg-primary/90 mt-2"
            >
              Book a Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
