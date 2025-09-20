'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store user data in sessionStorage for dashboard access
    sessionStorage.setItem("userData", JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      package: "Performance 200 Mbps",
      speed: "200 Mbps",
      expiry: "2025-10-10"
    }));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Create Your Account</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaUser className="text-gray-400" />
            <input 
              type="text" 
              name="fullName" 
              placeholder="Full Name" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="w-full outline-none text-gray-900"
              required
            />
          </div>
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaEnvelope className="text-gray-400" />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full outline-none text-gray-900"
              required
            />
          </div>
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaPhone className="text-gray-400" />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full outline-none text-gray-900"
              required
            />
          </div>
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaHome className="text-gray-400" />
            <input 
              type="text" 
              name="address" 
              placeholder="Address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full outline-none text-gray-900"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-2xl font-semibold text-lg hover:bg-blue-800 transition">
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  )
}
