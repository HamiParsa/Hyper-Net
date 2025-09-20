'use client'
import React, { JSX, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaWifi, FaNetworkWired, FaBolt, FaCheck, FaGlobe, FaHeadset, FaShieldAlt } from "react-icons/fa";

interface Modem {
  id: number;
  name: string;
  speed: string;
  price: string;
  img: string;
  features: { icon: JSX.Element; label: string }[];
}

function ModemCard({ modem, onSelect }: { modem: Modem; onSelect: (modem: Modem) => void }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center hover:shadow-3xl hover:-translate-y-2 transition-transform cursor-pointer">
      <div className="w-32 h-32 relative">
        <Image src={modem.img} alt={modem.name} fill style={{ objectFit: 'contain' }} className="rounded-xl" />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-black">{modem.name}</h3>
      <p className="mt-1 text-gray-700 font-medium">{modem.speed}</p>
      <p className="mt-2 font-semibold text-indigo-600">{modem.price}</p>
      
      <div className="mt-4 grid grid-cols-2 gap-4 w-full">
        {modem.features.map((f, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-xl p-2 justify-center">
            <span className="text-blue-600">{f.icon}</span>
            <span className="text-gray-800 font-medium">{f.label}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={() => onSelect(modem)}
        className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition-transform"
      >
        Select & Register
      </button>
    </div>
  );
}

interface CompanyFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

function CompanyCard({ feature }: { feature: CompanyFeature }) {
  return (
    <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 text-center flex flex-col items-center">
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
      <p className="text-gray-100">{feature.description}</p>
    </div>
  );
}

export default function ModemSelectionPage() {
  const router = useRouter();

  const [modems] = useState<Modem[]>([
    {
      id: 1,
      name: "Modem X100",
      speed: "50 Mbps",
      price: "$29.99",
      img: "https://static.vecteezy.com/system/resources/thumbnails/039/228/449/small_2x/ai-generated-3d-rendering-of-a-modem-or-router-for-wifi-on-transparent-background-ai-generated-free-png.png",
      features: [
        { icon: <FaWifi />, label: "WiFi 2.4/5GHz" },
        { icon: <FaNetworkWired />, label: "4 LAN Ports" },
        { icon: <FaBolt />, label: "Fast Setup" },
        { icon: <FaCheck />, label: "Stable Connection" },
      ]
    },
    {
      id: 2,
      name: "Modem X200",
      speed: "200 Mbps",
      price: "$49.99",
      img: "https://static.gl-inet.com/www/images/products/general/product-table/table_mt6000.png",
      features: [
        { icon: <FaWifi />, label: "Dual Band WiFi" },
        { icon: <FaNetworkWired />, label: "4 LAN Ports" },
        { icon: <FaBolt />, label: "Easy Config" },
        { icon: <FaCheck />, label: "HD Streaming" },
      ]
    },
    {
      id: 3,
      name: "Modem Pro 1G",
      speed: "1 Gbps",
      price: "$79.99",
      img: "https://static.vecteezy.com/system/resources/previews/048/712/434/non_2x/top-features-to-look-for-in-a-high-performance-wifi-modem-free-png.png",
      features: [
        { icon: <FaWifi />, label: "Tri-Band WiFi" },
        { icon: <FaNetworkWired />, label: "8 LAN Ports" },
        { icon: <FaBolt />, label: "Gigabit Speed" },
        { icon: <FaCheck />, label: "Perfect for Gaming" },
      ]
    },
  ]);

  const companyFeatures: CompanyFeature[] = [
    { icon: <FaGlobe />, title: "Wide Coverage", description: "Providing internet across multiple cities and regions with stable connectivity." },
    { icon: <FaHeadset />, title: "24/7 Support", description: "Our customer support team is available around the clock for assistance." },
    { icon: <FaShieldAlt />, title: "Secure Network", description: "State-of-the-art security for safe and reliable internet usage." },
  ];

  const handleSelect = () => {
    router.push("/signUp");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-16">
      <h1 className="text-4xl font-bold text-black text-center">Choose Your Modem</h1>
      
      {/* Modem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {modems.map(modem => (
          <ModemCard key={modem.id} modem={modem} onSelect={handleSelect} />
        ))}
      </div>

      {/* Company Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {companyFeatures.map((feature, idx) => (
          <CompanyCard key={idx} feature={feature} />
        ))}
      </div>
    </div>
  );
}
