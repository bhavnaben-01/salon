import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BookAppointment from "./pages/BookAppointment";
import Career from "./pages/Career";
import CareerDetails from "./pages/CareerDetails";
import Pricing from "./pages/Pricing";
import PricingDetails from "./pages/PricingDetails";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import CartDrawer from "./components/CartDrawer";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return null;
  if (!isAuthenticated) return <Navigate to="/signup" replace />;
  return <>{children}</>;
};

// Admin route wrapper
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  if (isLoading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (user?.role !== "admin") return <Navigate to="/" replace />;
  return <>{children}</>;
};

// Guest-only route (redirect to home if already logged in)
const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return null;
  if (isAuthenticated) return <Navigate to="/" replace />;
  return <>{children}</>;
};

// Hide footer on auth/admin pages — uses useLocation from react-router
const FooterWrapper = () => {
  const location = useLocation();
  const hidePaths = ["/login", "/signup", "/admin"];
  if (hidePaths.includes(location.pathname)) return null;
  return <Footer />;
};

// Layout wrapper
const AppLayout = () => {
  const { isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          {/* Protected Main Website Routes */}
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/services/:slug" element={<ProtectedRoute><ServiceDetails /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/blog/:slug" element={<ProtectedRoute><BlogDetails /></ProtectedRoute>} />
          <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
          <Route path="/career" element={<ProtectedRoute><Career /></ProtectedRoute>} />
          <Route path="/career/:slug" element={<ProtectedRoute><CareerDetails /></ProtectedRoute>} />
          <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route path="/pricing/:slug" element={<ProtectedRoute><PricingDetails /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

          {/* Auth routes */}
          <Route path="/signup" element={<GuestRoute><Signup /></GuestRoute>} />
          <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <FooterWrapper />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <AuthProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppLayout />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  </HelmetProvider>
);

export default App;
