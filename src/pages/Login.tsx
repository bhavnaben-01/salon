import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    const result = await login(email, password);
    setIsSubmitting(false);
    if (result.success) {
      if (result.user?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      setError(result.message);
    }
  };

  const inputClass =
    "w-full font-body text-[15px] bg-transparent border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>Sign In — Solaro</title>
        <meta name="description" content="Sign in to your Solaro account to manage bookings and more." />
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
                  Welcome Back
                </span>
              </div>
              <h2 className="font-heading text-4xl xl:text-5xl text-white leading-tight">
                Your beauty awaits
              </h2>
              <p className="font-body text-[15px] leading-[26px] text-white/60 max-w-md">
                Sign in to access your appointments, explore new treatments, and continue your beauty journey with us.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <p className="font-heading text-2xl text-white">50+</p>
                  <p className="font-body text-xs text-white/40">Treatments</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <p className="font-heading text-2xl text-white">15+</p>
                  <p className="font-body text-xs text-white/40">Experts</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <p className="font-heading text-2xl text-white">5★</p>
                  <p className="font-body text-xs text-white/40">Rating</p>
                </div>
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

            <div className="mb-10">
              <span className="font-body text-[13px] font-medium uppercase tracking-[2px] text-primary">
                Sign In
              </span>
              <h1 className="font-heading text-3xl md:text-[38px] md:leading-[48px] mt-2 text-foreground">
                Welcome back
              </h1>
              <p className="font-body text-[15px] text-muted-foreground mt-3">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary font-semibold hover:underline transition-all">
                  Create one
                </Link>
              </p>
            </div>

            {error && (
              <div className="mb-6 px-4 py-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive font-body text-sm animate-fade-in-up">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-[13px] font-medium uppercase tracking-[1px] text-foreground block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-body text-[13px] font-medium uppercase tracking-[1px] text-foreground block mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 font-body text-[14px] font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-8 py-4 btn-radius transition-all duration-300 hover:bg-[#0a0404] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
