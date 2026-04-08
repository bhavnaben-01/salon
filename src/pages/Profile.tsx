import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Calendar, LogOut, Camera, Shield, ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import FadeSection from "@/components/FadeSection";

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });
  const [saved, setSaved] = useState(false);

  if (!user) {
    navigate("/signup");
    return null;
  }

  const handleSave = () => {
    updateProfile({
      fullName: formData.fullName,
      phone: formData.phone,
    });
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const initials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const joinedDate = new Date(user.joinedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const inputClass =
    "w-full font-body text-[15px] bg-transparent border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <>
      <Helmet>
        <title>My Profile — Solaro</title>
        <meta name="description" content="Manage your Solaro account profile and settings." />
      </Helmet>

      <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 pt-10 pb-20">
        <div className="max-w-[900px] mx-auto">
          {/* Back button */}
          <FadeSection>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back
            </button>
          </FadeSection>

          {/* Profile header card */}
          <FadeSection>
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              {/* Banner */}
              <div className="h-32 md:h-40 bg-gradient-to-r from-[#9f2b2b] via-[#b83e3e] to-[#9f2b2b] relative">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  }}
                />
              </div>

              <div className="px-6 md:px-10 pb-8 -mt-14">
                <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                  {/* Avatar */}
                  <div className="relative group">
                    <div className="w-28 h-28 rounded-full border-4 border-card bg-[#f6ebe7] flex items-center justify-center shadow-lg">
                      <span className="font-heading text-3xl text-[#9f2b2b]">{initials}</span>
                    </div>
                    <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex-1 sm:pb-1">
                    <div className="flex items-center gap-2">
                      <h1 className="font-heading text-2xl md:text-3xl text-foreground">{user.fullName}</h1>
                      {user.role === "admin" && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-body text-[11px] font-semibold uppercase tracking-[1px]">
                          <Shield className="w-3 h-3" /> Admin
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-1">{user.email}</p>
                  </div>

                  <div className="sm:pb-1 flex gap-3">
                    {user.role === "admin" && (
                      <button
                        onClick={() => navigate("/admin")}
                        className="font-body text-[13px] font-semibold uppercase tracking-[1px] px-5 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Admin Panel
                      </button>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 font-body text-[13px] font-semibold uppercase tracking-[1px] px-5 py-2.5 border border-destructive/30 text-destructive rounded-lg hover:bg-destructive hover:text-white transition-all duration-300"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>

          {/* Profile details */}
          <FadeSection>
            <div className="mt-8 border border-border rounded-xl bg-card p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-heading text-xl text-foreground">Personal Information</h2>
                  <p className="font-body text-sm text-muted-foreground mt-1">Update your personal details</p>
                </div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="font-body text-[13px] font-semibold uppercase tracking-[1px] px-5 py-2.5 bg-primary text-primary-foreground btn-radius hover:bg-[#0a0404] transition-all duration-300"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({ fullName: user.fullName, email: user.email, phone: user.phone });
                      }}
                      className="font-body text-[13px] font-semibold uppercase tracking-[1px] px-5 py-2.5 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="font-body text-[13px] font-semibold uppercase tracking-[1px] px-5 py-2.5 bg-primary text-primary-foreground btn-radius hover:bg-[#0a0404] transition-all duration-300"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              {saved && (
                <div className="mb-6 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 font-body text-sm animate-fade-in-up">
                  Profile updated successfully!
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-[12px] font-medium uppercase tracking-[1px] text-muted-foreground flex items-center gap-2 mb-2">
                    <User className="w-3.5 h-3.5" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    disabled={!isEditing}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-body text-[12px] font-medium uppercase tracking-[1px] text-muted-foreground flex items-center gap-2 mb-2">
                    <Mail className="w-3.5 h-3.5" /> Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className={`${inputClass} opacity-40`}
                  />
                </div>

                <div>
                  <label className="font-body text-[12px] font-medium uppercase tracking-[1px] text-muted-foreground flex items-center gap-2 mb-2">
                    <Phone className="w-3.5 h-3.5" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={!isEditing}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-body text-[12px] font-medium uppercase tracking-[1px] text-muted-foreground flex items-center gap-2 mb-2">
                    <Calendar className="w-3.5 h-3.5" /> Member Since
                  </label>
                  <input type="text" value={joinedDate} disabled className={`${inputClass} opacity-40`} />
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </>
  );
};

export default Profile;
