'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBoxOpen, FaHistory, FaUser, FaBars } from "react-icons/fa";

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  package: string;
  speed: string;
  expiry: string;
}

// Sidebar Component
function Sidebar({
  collapsed,
  setCollapsed,
  activeSection,
  setActiveSection
}: {
  collapsed: boolean;
  setCollapsed: (c: boolean) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
}) {
  const menuItems = [
    { name: "Packages", icon: <FaBoxOpen /> },
    { name: "Transactions", icon: <FaHistory /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <div className={`bg-white w-[300px] text-gray-900 h-screen p-6 fixed top-0 left-0 z-50 shadow-lg transition-transform duration-300 ${collapsed ? "-translate-x-full" : "translate-x-0"} md:translate-x-0 md:w-64`}>
      <h2 className="text-3xl font-bold mb-8">HyperNet</h2>
      <nav className="flex flex-col gap-4">
        <button onClick={() => setCollapsed(true)} className="md:hidden mb-4 font-semibold text-gray-900 hover:text-blue-600 transition duration-200">Close ✕</button>
        {menuItems.map(item => (
          <button
            key={item.name}
            onClick={() => { setActiveSection(item.name); setCollapsed(true); }}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl transition duration-200 ${activeSection === item.name ? "bg-blue-100 font-semibold text-blue-700" : "hover:bg-gray-100"}`}
          >
            {item.icon} {item.name}
          </button>
        ))}
      </nav>
    </div>
  )
}

// Topbar Component
function Topbar({ toggleSidebar, userName, signOut }: { toggleSidebar: () => void; userName: string; signOut: () => void; }) {
  return (
    <div className="sticky top-0 z-40 px-6 py-4 md:ml-64 text-gray-900">
      <button className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition duration-200" onClick={toggleSidebar}><FaBars /></button>
      <div className="flex items-center justify-end gap-4">
        <span className="font-medium">Hello {userName}</span>
        <button onClick={signOut} className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition duration-200">Sign Out</button>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("Packages");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = sessionStorage.getItem("userData");
    if (!data) {
      router.replace("/signUp"); 
      return;
    }
    setUserData(JSON.parse(data) as UserData);
    setLoading(false);
  }, [router]);

  const handleSignOut = () => {
    sessionStorage.removeItem("userData");
    router.replace("/signUp"); 
  };

  if (loading) return <p className="text-center mt-20 text-gray-900">Loading...</p>;
  if (!userData) return null; 

  const packages = [
    { name: "Basic 50 Mbps", price: "$19.99" },
    { name: "Performance 200 Mbps", price: "$34.99" },
    { name: "Plus 1 Gbps", price: "$59.99" },
  ];

  const transactions = [
    { id: 1, date: "2025-09-01", package: "Performance 200 Mbps", amount: "$34.99" },
    { id: 2, date: "2025-08-01", package: "Basic 50 Mbps", amount: "$19.99" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex text-gray-900">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex-1 md:ml-64">
        <Topbar toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} userName={userData.name} signOut={handleSignOut} />

        <main className="p-6 space-y-8">
          {/* Packages Section */}
          {activeSection === "Packages" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map(p => (
                  <div key={p.name} className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
                    <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                    <p className="mt-2 text-gray-600">{p.price}</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-500 transition duration-300">Renew / Upgrade</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transactions Section */}
          {activeSection === "Transactions" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
              <div className="overflow-x-auto rounded-xl shadow-md bg-white">
                <table className="w-full text-left text-gray-900">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Package</th>
                      <th className="px-4 py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(tx => (
                      <tr key={tx.id} className="border-t border-gray-300 hover:bg-gray-100 transition duration-200">
                        <td className="px-4 py-2">{tx.date}</td>
                        <td className="px-4 py-2">{tx.package}</td>
                        <td className="px-4 py-2">{tx.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Profile Section */}
          {activeSection === "Profile" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Profile</h2>
              <div className="bg-white shadow-lg rounded-xl p-6 space-y-3">
                <p><strong className="text-gray-700">Name:</strong> {userData.name}</p>
                <p><strong className="text-gray-700">Email:</strong> {userData.email}</p>
                <p><strong className="text-gray-700">Phone:</strong> {userData.phone}</p>
                <p><strong className="text-gray-700">Address:</strong> {userData.address}</p>
                <p><strong className="text-gray-700">Active Package:</strong> {userData.package}</p>
                <p><strong className="text-gray-700">Speed:</strong> {userData.speed}</p>
                <p><strong className="text-gray-700">Expiry:</strong> {userData.expiry}</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
