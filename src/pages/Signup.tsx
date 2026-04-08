import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
      setError("All fields are required.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setIsSubmitting(true);
    const result = await signup({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });
    setIsSubmitting(false);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  const inputClass =
    "w-full font-body text-[15px] bg-transparent border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>Create Account — Solaro</title>
        <meta name="description" content="Join Solaro Luxury Beauty Salon. Create your account to book premium beauty services." />
      </Helmet>

      <div className="min-h-screen flex">
        {/* Left side — decorative */}
        <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/salon/Hero Img.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0404]/90 via-[#0a0404]/40 to-[#9f2b2b]/30" />
          <div className="relative z-10 flex flex-col justify-between p-12 w-full">
            <Link to="/">
              <Logo className="h-10 w-auto brightness-0 invert" />
            </Link>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#d4a574]" />
                <span className="font-body text-[13px] uppercase tracking-[3px] text-[#d4a574]">
                  Premium Beauty
                </span>
              </div>
              <h2 className="font-heading text-4xl xl:text-5xl text-white leading-tight">
                Begin your beauty journey today
              </h2>
              <p className="font-body text-[15px] leading-[26px] text-white/60 max-w-md">
                Join Solaro and discover a world of luxury beauty treatments crafted just for you.
              </p>
              <div className="flex items-center gap-4 pt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm" />
                ))}
                <span className="font-body text-sm text-white/50">500+ Happy Clients</span>
              </div>
            </div>
            <p className="font-body text-xs text-white/30">© {new Date().getFullYear()} Solaro Beauty Salon</p>
          </div>
        </div>

        {/* Right side — form */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
          <div className="w-full max-w-[460px]">
            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
              <Link to="/">
                <Logo className="h-8 w-auto" />
              </Link>
            </div>

            <div className="mb-8">
              <span className="font-body text-[13px] font-medium uppercase tracking-[2px] text-primary">
                Welcome
              </span>
              <h1 className="font-heading text-3xl md:text-[38px] md:leading-[48px] mt-2 text-foreground">
                Create your account
              </h1>
              <p className="font-body text-[15px] text-muted-foreground mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-semibold hover:underline transition-all">
                  Sign in
                </Link>
              </p>
            </div>

            {error && (
              <div className="mb-6 px-4 py-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive font-body text-sm animate-fade-in-up">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-[13px] font-medium uppercase tracking-[1px] text-foreground block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-body text-[13px] font-medium uppercase tracking-[1px] text-foreground block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-body text-[13px] font-medium uppercase tracking-[1px] text-foreground block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-[13px] font-medium uppercase tracking-[1px] text-foreground block mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min. 6 characters"
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="font-body text-[13px] font-medium uppercase tracking-[1px] text-foreground block mb-2">
                    Confirm
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 font-body text-[14px] font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-8 py-4 btn-radius transition-all duration-300 hover:bg-[#0a0404] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <p className="font-body text-xs text-muted-foreground text-center mt-8">
              By creating an account, you agree to our{" "}
              <span className="text-primary cursor-pointer hover:underline">Terms of Service</span> &{" "}
              <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
