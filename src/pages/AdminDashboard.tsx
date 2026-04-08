import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Mail, Calendar, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Logo from "@/components/Logo";
import FadeSection from "@/components/FadeSection";

// --- Types ---
interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

interface Appointment {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dateTime: string;
  service: string;
  expert: string;
  message: string;
  status: string;
  createdAt: string;
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
}

import { useAuth } from "@/context/AuthContext";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<"dashboard" | "appointments" | "contacts" | "clients">("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  // Data
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [clients, setClients] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Stats
  const stats = {
    totalClients: clients.length,
    totalAppointments: appointments.length,
    newMessages: contacts.length,
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [appRes, contRes, usrRes] = await Promise.all([
        fetch("/api/appointments"),
        fetch("/api/contacts"),
        fetch("/api/users"),
      ]);
      const appData = await appRes.json();
      const contData = await contRes.json();
      const usrData = await usrRes.json();
      
      if (appData.success) setAppointments(appData.appointments);
      if (contData.success) setContacts(contData.contacts);
      if (usrData.success) setClients(usrData.users.filter((u: any) => u.role !== "admin"));
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteRecord = async (type: "appointments" | "contacts" | "users", id: string) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
    try {
      const res = await fetch(`/api/${type}/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        if (type === "appointments") setAppointments(prev => prev.filter(item => item._id !== id));
        if (type === "contacts") setContacts(prev => prev.filter(item => item._id !== id));
        if (type === "users") setClients(prev => prev.filter(item => item._id !== id));
      }
    } catch (error) {
      console.error(`Failed to delete ${type}`, error);
    }
  };

  const filteredAppointments = appointments.filter((apt) =>
    apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredContacts = contacts.filter((c) =>
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredClients = clients.filter((c) =>
    c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Admin Dashboard — Solaro</title>
      </Helmet>

      <div className="min-h-screen bg-[#FBF4EF] flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-border p-6 flex flex-col">
          <Link to="/" className="mb-10 block">
            <Logo className="h-8" />
          </Link>

          <nav className="flex-1 space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm font-medium transition-colors ${
                activeTab === "dashboard" ? "bg-primary text-white" : "text-card-foreground hover:bg-muted"
              }`}
            >
              <Logo className="w-5 h-5 opacity-70" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("appointments")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm font-medium transition-colors ${
                activeTab === "appointments" ? "bg-primary text-white" : "text-card-foreground hover:bg-muted"
              }`}
            >
              <Calendar className="w-5 h-5" />
              Appointments
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm font-medium transition-colors ${
                activeTab === "contacts" ? "bg-primary text-white" : "text-card-foreground hover:bg-muted"
              }`}
            >
              <Mail className="w-5 h-5" />
              Messages
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm font-medium transition-colors ${
                activeTab === "clients" ? "bg-primary text-white" : "text-card-foreground hover:bg-muted"
              }`}
            >
              <Users className="w-5 h-5" />
              Clients
            </button>
          </nav>

          {/* User Profile / Logout (Bottom Left) */}
          <div className="mt-auto pt-6 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="font-body text-[12px] font-bold text-primary">
                    {user?.fullName?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "AD"}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <p className="font-body text-sm font-medium text-foreground truncate max-w-[120px]">{user?.fullName || "Admin"}</p>
                  <p className="font-body text-xs text-muted-foreground truncate max-w-[120px]">{user?.email || "admin@solaro.com"}</p>
                </div>
              </div>
              <button 
                onClick={handleLogout} 
                className="text-muted-foreground hover:text-destructive transition-colors p-2"
                title="Log out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="font-heading text-3xl text-foreground">Admin Dashboard</h1>
                <p className="font-body text-muted-foreground mt-1">Manage your salon data here.</p>
              </div>
            </header>

            {loading ? (
              <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <FadeSection>
                {/* --- Dashboard Overview --- */}
                {activeTab === "dashboard" && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                        <Users className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-body text-muted-foreground text-sm uppercase tracking-wider mb-1">Total Clients</h3>
                        <p className="font-heading text-4xl">{stats.totalClients}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                        <Calendar className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-body text-muted-foreground text-sm uppercase tracking-wider mb-1">Appointments</h3>
                        <p className="font-heading text-4xl">{stats.totalAppointments}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                        <Mail className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-body text-muted-foreground text-sm uppercase tracking-wider mb-1">Messages</h3>
                        <p className="font-heading text-4xl">{stats.newMessages}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- Appointments --- */}
                {activeTab === "appointments" && (
                  <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
                      <h2 className="font-heading text-2xl">Appointments</h2>
                      <input
                        type="text"
                        placeholder="Search appointments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-border rounded-lg font-body text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-body text-sm">
                        <thead className="bg-muted text-muted-foreground">
                          <tr>
                            <th className="px-6 py-4 font-medium">Name</th>
                            <th className="px-6 py-4 font-medium">Service</th>
                            <th className="px-6 py-4 font-medium">Expert</th>
                            <th className="px-6 py-4 font-medium">Date & Time</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {filteredAppointments.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">No appointments found.</td>
                            </tr>
                          ) : (
                            filteredAppointments.map((apt) => (
                              <tr key={apt._id} className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4">{apt.name}<br/><span className="text-xs text-muted-foreground">{apt.email}</span></td>
                                <td className="px-6 py-4">{apt.service}</td>
                                <td className="px-6 py-4">{apt.expert}</td>
                                <td className="px-6 py-4">{new Date(apt.dateTime).toLocaleString()}</td>
                                <td className="px-6 py-4">
                                  <button onClick={() => deleteRecord("appointments", apt._id)} className="text-red-500 hover:text-red-700">Delete</button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* --- Contacts / Messages --- */}
                {activeTab === "contacts" && (
                  <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
                      <h2 className="font-heading text-2xl">Messages</h2>
                      <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-border rounded-lg font-body text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-body text-sm">
                        <thead className="bg-muted text-muted-foreground">
                          <tr>
                            <th className="px-6 py-4 font-medium">Name</th>
                            <th className="px-6 py-4 font-medium">Contact Details</th>
                            <th className="px-6 py-4 font-medium max-w-xs">Message</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {filteredContacts.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">No messages found.</td>
                            </tr>
                          ) : (
                            filteredContacts.map((c) => (
                              <tr key={c._id} className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4">{c.firstName} {c.lastName}</td>
                                <td className="px-6 py-4">{c.email}<br/><span className="text-xs text-muted-foreground">{c.phone}</span></td>
                                <td className="px-6 py-4 max-w-xs truncate" title={c.message}>{c.message}</td>
                                <td className="px-6 py-4">{new Date(c.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                  <button onClick={() => deleteRecord("contacts", c._id)} className="text-red-500 hover:text-red-700">Delete</button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* --- Clients --- */}
                {activeTab === "clients" && (
                  <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
                      <h2 className="font-heading text-2xl">Registered Clients</h2>
                      <input
                        type="text"
                        placeholder="Search clients..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-border rounded-lg font-body text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-body text-sm">
                        <thead className="bg-muted text-muted-foreground">
                          <tr>
                            <th className="px-6 py-4 font-medium">Name</th>
                            <th className="px-6 py-4 font-medium">Email</th>
                            <th className="px-6 py-4 font-medium">Phone</th>
                            <th className="px-6 py-4 font-medium">Joined</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {filteredClients.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">No clients found.</td>
                            </tr>
                          ) : (
                            filteredClients.map((client) => (
                              <tr key={client._id} className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-medium">{client.fullName}</td>
                                <td className="px-6 py-4">{client.email}</td>
                                <td className="px-6 py-4">{client.phone}</td>
                                <td className="px-6 py-4">{new Date(client.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                  <button onClick={() => deleteRecord("users", client._id)} className="text-red-500 hover:text-red-700">Delete</button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </FadeSection>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
