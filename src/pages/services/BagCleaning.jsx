import React, { useState } from "react";
import laundryImg from "../../assets/laundry.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const faqs = [
  {
    question: "How does DhobiLite work?",
    answer:
      "You can schedule a pickup through our website or app. Our team collects your laundry, cleans it using premium methods, and delivers it back to your doorstep.",
  },
  {
    question: "Do you offer dry cleaning services?",
    answer:
      "Yes, we provide professional dry cleaning services using advanced machines to ensure garment safety.",
  },
  {
    question: "How long does it take to deliver clothes?",
    answer:
      "Standard delivery takes 48 hours. Express delivery options are also available.",
  },
  {
    question: "Are my clothes safe with DhobiLite?",
    answer:
      "Absolutely! We use industry-grade solutions and strict quality checks.",
  },
];

const BagCleaning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative w-full overflow-hidden">
      {/* BLUE BACKGROUND */}
      <div className="bg-blue-600 h-[420px] w-full absolute top-0 left-0 z-0" />

      {/* DISCOUNT TAG */}
      <div className="flex items-center gap-2 bg-white text-blue-600 px-4 py-1 w-max mt-4 ml-6 rounded relative z-10">
        <span>25% off for new user</span>
        <span className="bg-blue-600 text-white px-2 py-1 font-bold rounded">
          MY25
        </span>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 relative z-10 text-white">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Premium Laundry Services <br /> Near You
          </h1>
          <p className="text-xl font-semibold">
            168 Outlets Serving 72 Cities Across India
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-full">
            Request Call Back
          </button>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={laundryImg}
            alt="Laundry"
            className="h-[520px] w-full object-cover rounded-tl-[120px] rounded-bl-[120px] rounded-br-[120px]"
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="bg-white px-8 py-14 text-black">
        <div className="max-w-4xl text-sm space-y-4">
          <h2 className="text-3xl font-bold">
            Get Premium Laundry Services delivered on time
          </h2>
          <p>
            Looking for professional laundry services while you're busy?
            DhobiLite offers doorstep laundry solutions that save time.
          </p>
          <p>
            We combine convenience, quality, and care using advanced cleaning
            technology.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="w-full bg-white py-16 px-8">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-[65%]">
            <img
              src={laundryImg}
              alt="Process"
              className="w-full h-[440px] object-cover rounded-[50px]"
            />
          </div>

          <div className="md:w-[35%] space-y-4 text-sm text-gray-700">
            <h2 className="text-4xl font-bold text-black">
              Dry Cleaning at its Best
            </h2>
            <p>
              Doing laundry can consume a lot of your time. DhobiLite brings
              premium care to your doorstep.
            </p>
            <p>
              Dry cleaning restores texture, prevents damage, and revives
              brightness.
            </p>
            <p>
              We use modern machines to make garments look like new.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="bg-gray-50 py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-5 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

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

export default BagCleaning;
