import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
// Dry Clean Images
import shirt1 from "../assets/drycleaning.jpg";
import shirt2 from "../assets/organicDryclean.jpg";
import shirt3 from "../assets/jacketcleaning.jpg";
import shirt4 from "../assets/shoecleaning.jpg";
import shirt5 from "../assets/bagcleaning.jpg";
import shirt6 from "../assets/sofacleaning.jpg";
import shirt7 from "../assets/carpetcleaning.jpg";

// Wash Service Images
import service1 from "../assets/washonly.jpg";
import service2 from "../assets/orgaincwashonly.jpg"; // fixed typo
import service3 from "../assets/washironservice.jpg";
import service4 from "../assets/organiclaundryservice.jpg"; // fixed casing
import service5 from "../assets/premiumlaundryservice.jpg";
import service6 from "../assets/curtainwashservice.jpg";
import service7 from "../assets/woolenwashservice.jpg";

const Pricing = () => {
  const dryCleanItems = [
    { name: "Dry Cleaning", price: 59, img: shirt1 },
    { name: "Organic Dry Cleaning", price: 89, img: shirt2 },
    { name: "Leather Jacket Cleaning", price: 189, img: shirt3 },
    { name: "Blazer Cleaning", price: 149, img: shirt4 },
    { name: "Suit Cleaning", price: 299, img: shirt5 },
    { name: "Kurta Cleaning", price: 79, img: shirt6 },
    { name: "Coat Cleaning", price: 199, img: shirt7 },
  ];

  const washItems = [
    { name: "Wash & Fold", price: 39, img: service1 },
    { name: "Wash & Iron", price: 49, img: service2 },
    { name: "Steam Iron", price: 29, img: service3 },
    { name: "Organic Wash", price: 59, img: service4 },
    { name: "Premium Wash", price: 69, img: service5 },
    { name: "Bulk Wash", price: 99, img: service6 },
    { name: "Express Wash", price: 129, img: service7 },
  ];

  const RateCard = ({ item }) => (
    <div className="border rounded-2xl p-6 hover:shadow-lg transition flex flex-col">
      <img src={item.img} alt={item.name} className="h-24 mx-auto mb-4" />
      <div className="text-right text-blue-600 font-bold text-3xl">
        ₹{item.price}*<span className="text-sm text-black font-medium"> /pc</span>
      </div>
      <p className="text-sm text-gray-500 text-right">With Tax</p>
      <h3 className="text-xl font-bold mt-4">{item.name}</h3>
      <p className="text-gray-600 mt-2">
        We use the best available technology and machines to increase the
        longevity of your garments.
      </p>
      <a
        href="#"
        className="text-blue-600 font-semibold mt-3 inline-flex items-center gap-2"
      >
        Read More <span>→</span>
      </a>
      <ul className="mt-5 space-y-2 text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-blue-600 font-bold">✔</span> Wet Cleaning Treatment
        </li>
        <li className="flex items-center gap-2">
          <span className="text-blue-600 font-bold">✔</span> Spot Treatment
        </li>
        <li className="flex items-center gap-2">
          <span className="text-blue-600 font-bold">✔</span> Fabric Safe Process
        </li>
      </ul>
      <button className="mt-6 border-2 border-blue-600 text-blue-600 font-semibold py-3 rounded-full hover:bg-blue-50 transition">
        View Rate List
      </button>
    </div>
  );

  const [activeTab, setActiveTab] = useState("dryclean");

  return (
    <div className="w-full">
      {/* BLUE BANNER */}
      <div className="w-full bg-blue-600 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Affordable Laundry & Dry Cleaning Rates Near Me
          </h1>
          <p className="text-lg font-medium opacity-90">No Hidden Costs</p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-black">Transparent Pricing You Can Trust</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At DhobiLite, we believe in honest and upfront pricing for all our
            laundry and dry-cleaning services. Our rates are designed to give
            you premium quality service without any surprise charges.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Whether it’s daily laundry, delicate garments, or premium dry
            cleaning, you’ll always know what you’re paying for before placing
            your order.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            With clear pricing and no hidden fees, you can enjoy stress-free
            laundry services delivered right to your doorstep.
          </p>
        </div>
      </div>

      {/* RATES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex gap-10 border-b mb-12">
            {[
              { id: "dryclean", label: "Dry Clean Rates" },
              { id: "wash", label: "Wash Rates" },
              { id: "prepaid", label: "Prepaid Plans" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 font-semibold ${
                  activeTab === tab.id
                    ? "border-b-4 border-blue-600 text-black"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dry Clean */}
          {activeTab === "dryclean" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dryCleanItems.map((item, i) => (
                <RateCard key={i} item={item} />
              ))}
            </div>
          )}

          {/* Wash */}
          {activeTab === "wash" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {washItems.map((item, i) => (
                <RateCard key={i} item={item} />
              ))}
            </div>
          )}

          {/* Prepaid Plans */}
          {activeTab === "prepaid" && (
            <div className="overflow-x-auto">
              <table className="w-full border rounded-xl overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Plan</th>
                    <th className="p-4">Regular</th>
                    <th className="p-4">Bachelor</th>
                    <th className="p-4">Couple</th>
                    <th className="p-4">Family</th>
                    <th className="p-4">Jumbo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Premium Laundry", values: ["₹999","₹799","₹1499","₹2499","₹3499"] },
                    { name: "Organic Laundry", values: ["₹1299","₹999","₹1799","₹2999","₹3999"] },
                    { name: "Laundry", values: ["₹699","₹499","₹999","₹1799","₹2499"] },
                    { name: "Organic Wash", values: ["₹899","₹699","₹1299","₹2199","₹2999"] },
                    { name: "Wash Only", values: ["₹499","₹399","₹699","₹1299","₹1799"] },
                    { name: "Discount", values: ["5%","7%","10%","15%","20%"] },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                      <td className="p-4 font-semibold">{row.name}</td>
                      {row.values.map((val, idx) => (
                        <td key={idx} className="p-4 text-center font-medium text-gray-700">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
      
            {/* FOOTER (FULL WIDTH) */}
            <footer className="w-full bg-white border-t">
              <div className="px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* LEFT */}
                <div>
      <img
        src="/dhobilite.png"
        alt="QR Code"
        className="w-20 h-20 mx-auto md:mx-0"
      />
                  <p className="text-gray-600 mb-4">
                    One stop solution for all your laundry & dry cleaning needs.
                  </p>
      
                  <div className="flex gap-4 mb-6 text-gray-700">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaYoutube />
                  </div>
      
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <MdAccessTime /> 9:00 AM – 10:00 PM
                    </li>
                    <li className="flex gap-2">
                      <MdPhone /> +91 880 041 4848
                    </li>
                    <li className="flex gap-2">
                      <BsWhatsapp /> WhatsApp
                    </li>
                    <li className="flex gap-2">
                      <MdEmail /> cc@dhobilite.com
                    </li>
                  </ul>
                </div>
      
                {/* QUICK LINKS */}
                <div>
                  <h4 className="font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-700">
                    {["About Us", "Pricing", "FAQ", "Careers"].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
      
                {/* SERVICES */}
                <div>
                  <h4 className="font-bold mb-4">Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Laundry",
                      "Dry Clean",
                      "Shoe Cleaning",
                      "Steam Ironing",
                    ].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
      
                {/* QR */}
                <div>
                  <h4 className="font-bold mb-2">Download App</h4>
      <img
        src="/qrcodefake.png"
        alt="QR Code"
        className="w-40 h-40 mx-auto md:mx-0"
      />
                </div>
              </div>
      
              <div className="border-t py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} DhobiLite. All Rights Reserved.
              </div>
            </footer>
    </div>
  );
};

export default Pricing;
