import { useEffect, useState } from "react";
import bannerImg from "../assets/image.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import shirt1 from "../assets/drycleaning.jpg";
import shirt2 from "../assets/organicDryclean.jpg";
import shirt3 from "../assets/jacketcleaning.jpg";
import shirt4 from "../assets/shoecleaning.jpg";
import shirt5 from "../assets/bagcleaning.jpg";
import shirt6 from "../assets/sofacleaning.jpg";
import shirt7 from "../assets/carpetcleaning.jpg";

import service1 from "../assets/washonly.jpg";
import service2 from "../assets/orgaincwashonly.jpg";
import service3 from "../assets/washironservice.jpg";
import service4 from "../assets/Organiclaundryservice.jpg";
import service5 from "../assets/premiumlaundryservice.jpg";
import service6 from "../assets/curtainwashservice.jpg";
import service7 from "../assets/woolenwashservice.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHome,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";
import icon5 from "../assets/icon5.jpg";


import Slider from "react-slick";


const faqs = [
  {
    q: "How does laundry pickup and delivery work?",
    a: "Schedule a pickup through our website or app. Our executive will collect your clothes, clean them, and deliver them back to you."
  },
  {
    q: "What is the turnaround time?",
    a: "Our standard turnaround time is 48 hours. Express delivery options are also available."
  },
  {
    q: "Do you provide same-day laundry service?",
    a: "Yes, same-day service is available in selected areas at an additional cost."
  },
  {
    q: "Are your cleaning methods safe for delicate fabrics?",
    a: "Absolutely. We use fabric-safe and garment-specific cleaning techniques."
  },
  {
    q: "Do you use eco-friendly detergents?",
    a: "Yes, we offer organic and eco-friendly cleaning options."
  },
  {
    q: "What happens if my clothes are damaged?",
    a: "We follow a strict quality check process. In rare cases, compensation is provided as per policy."
  },
  {
    q: "Can I reschedule my pickup?",
    a: "Yes, pickups can be rescheduled easily through your account or by contacting support."
  },
  {
    q: "Is there a minimum order value?",
    a: "There is no minimum order value for standard laundry services."
  },
  {
    q: "How can I track my order?",
    a: "You can track your order status in real-time through your dashboard."
  },
  {
    q: "Which cities do you currently serve?",
    a: "We currently operate in 72+ cities across India."
  },
];


const steps = [
  "Dirty Clothes",
  "Easy Pickup",
  "Inspection by experts",
  "Dry Spotting with eco chemicals",
  "Preprocessing treatment",
  "Processing",
  "Steam Ironing",
  "QC & Packing",
  "Ready for Delivery",
  "Safe Delivery to Customer",
];

const words = [
  "Mumbai",
  "Pune",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Nagpur",
];

const Home = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
// Inside your Home component, below the pickup form
const services = [
  {
    title: "On demand online service",
    desc: "We are an online on-demand Laundry or Dry-Cleaning service in your city. Pick whatever time is useful for you, and we will wrap up.",
    color: "bg-yellow-50",
    image: icon1,
  },
  {
    title: "In-house processing center",
    desc: "We measure services using an in-house dealing method that fits all of your requirements and on-time movement. We utilize the industrial laundry machines that can clean clothes faster.",
    color: "bg-blue-100",
    image: icon2,
  },
  {
    title: "Trained and certified staff",
    desc: "Our team is experts in fabrics and they have active experience to manage any mess or cleaning service needed for your #1 piece of cloth. Our staff is well trained and certified.",
    color: "bg-yellow-50",
    image: icon3,
  },
  {
    title: "Fast Delivery",
    desc: "Get your clothes delivered back to you faster than ever with our express delivery services.",
    color: "bg-blue-100",
    image: icon4,
  },
  {
    title: "Eco-friendly Cleaning",
    desc: "We use eco-friendly detergents and processes to ensure sustainability while keeping your clothes spotless.",
    color: "bg-yellow-50",
    image: icon5,
  }
 
];

const dryCleanItems = [
  { name: "Dry Cleaning", price: 59, img:shirt1 },
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

const testimonials = [
  {
    name: "Suresha Patil",
    img: "/users/user1.jpg",
    text: "Excellent service! Clothes come back fresh, clean and perfectly folded. Highly recommended."
  },
  {
    name: "Rahul Verma",
    img: "/users/user2.jpg",
    text: "Very reliable laundry service. Pickup and delivery is always on time."
  },
  {
    name: "Guremuk Singh",
    img: "/users/user3.jpg",
    text: "Quality cleaning with affordable pricing. Customer support is very helpful."
  },
  {
    name: "Vaishali Singh",
    img: "/users/user4.jpg",
    text: "Organic cleaning option is amazing. My clothes feel brand new."
  },
  {
    name: "Pooja Kulkarni",
    img: "/users/user5.jpg",
    text: "Best laundry service in my city. Totally hassle-free experience."
  },
 
];

const testimonialSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 800,
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border rounded-xl p-5 cursor-pointer transition hover:shadow-md"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800 text-lg">
          {faq.q}
        </h3>

        <span className="text-2xl font-bold text-blue-600">
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {faq.a}
        </p>
      )}
    </div>
  );
};


const RateCard = ({ item }) => (
  <div className="border rounded-2xl p-6 hover:shadow-lg transition flex flex-col">

    {/* Image */}
    <img src={item.img} alt={item.name} className="h-24 mx-auto mb-4" />

    {/* Price */}
    <div className="text-right text-blue-600 font-bold text-3xl">
      ₹{item.price}*
      <span className="text-sm text-black font-medium"> /pc</span>
    </div>
    <p className="text-sm text-gray-500 text-right">With Tax</p>

    {/* Title */}
    <h3 className="text-xl font-bold mt-4">{item.name}</h3>

    {/* Description */}
    <p className="text-gray-600 mt-2">
      We use the best available technology and machines to increase the longevity of your garments.
    </p>

    {/* Read More */}
    <a href="#" className="text-blue-600 font-semibold mt-3 inline-flex items-center gap-2">
      Read More
      <span>→</span>
    </a>

    {/* Feature List */}
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

    {/* View Rate List Button */}
    <button className="mt-6 border-2 border-blue-600 text-blue-600 font-semibold py-3 rounded-full hover:bg-blue-50 transition">
      Download Application
    </button>

  </div>
);



const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
};
 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile breakpoint
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1200);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="bg-blue-600 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            {/* Offer Badge */}
            <div className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-md font-semibold mb-6">
              25% off for new user
              <span className="ml-3 bg-blue-600 text-white px-3 py-1 rounded">
                MY25
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              #1 Dry Cleaning & Laundry <br />
              Service in India
            </h1>

            <p className="mt-5 text-xl font-medium">
              Now 25% Off for First Order
            </p>

            <p className="mt-4 text-lg">
              Serving <span className="text-yellow-400 font-bold">72 cities</span>
            </p>

            {/* Typing Effect */}
            <h3 className="mt-6 text-3xl md:text-4xl font-bold">
              {text}
              <span className="animate-pulse">|</span>
            </h3>
          </div>

          {/* RIGHT IMAGE (HIDDEN ON MOBILE) */}
          <div className="relative justify-center items-center hidden md:flex">
            <div className="absolute w-[380px] h-[380px] rounded-full bg-blue-400 opacity-30"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500 opacity-30"></div>

            <img
              src={bannerImg}
              alt="Laundry Service"
              className="relative z-10 max-h-[720px]"
            />
          </div>
        </div>
      </section>
{/* ================= PICKUP FORM (OVERLAPPING) ================= */}
<section className="relative z-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="-mt-16 md:-mt-24 bg-white rounded-3xl shadow-xl p-8 md:p-12">

      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Laundry & Dry clean Pickup - Absolutely Free
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Location"
          className="px-6 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Name"
          className="px-6 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="px-6 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Address"
          className="px-6 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition">
          Book Pickup Now
        </button>
      </div>

    </div>
  </div>
</section>
{/* ================= SERVICES/FEATURES CAROUSEL ================= */}
  <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          One stop solution for Laundry & Dry clean
        </h2>

        {isMobile ? (
          // Mobile: stacked cards
          <div className="flex flex-col items-center space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  ${service.color}
                  rounded-2xl
                  shadow-md
                  p-5
                  w-[260px]
                  min-h-[420px]
                  flex flex-col items-center text-center
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-14 h-14 mb-4 object-contain"
                />
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          // Desktop: carousel
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="px-2 flex justify-center">
                <div
                  className={`
                    ${service.color}
                    rounded-2xl
                    shadow-md hover:shadow-xl
                    transition-all duration-300
                    p-6
                    w-[280px]
                    min-h-[420px]
                    flex flex-col items-center text-center
                  `}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>



{/* ================= RATES SECTION ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {(() => {
      const [activeTab, setActiveTab] = useState("dryclean");

      return (
        <>
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
    {
      name: "Premium Laundry",
      values: ["₹999", "₹799", "₹1499", "₹2499", "₹3499"],
    },
    {
      name: "Organic Laundry",
      values: ["₹1299", "₹999", "₹1799", "₹2999", "₹3999"],
    },
    {
      name: "Laundry",
      values: ["₹699", "₹499", "₹999", "₹1799", "₹2499"],
    },
    {
      name: "Organic Wash",
      values: ["₹899", "₹699", "₹1299", "₹2199", "₹2999"],
    },
    {
      name: "Wash Only",
      values: ["₹499", "₹399", "₹699", "₹1299", "₹1799"],
    },
    {
      name: "Discount",
      values: ["5%", "7%", "10%", "15%", "20%"],
    },
  ].map((row, i) => (
    <tr key={i} className={i % 2 === 0 ? "bg-blue-50" : "bg-white"}>
      <td className="p-4 font-semibold">{row.name}</td>
      {row.values.map((val, idx) => (
        <td key={idx} className="p-4 text-center font-medium text-gray-700">
          {val}
        </td>
      ))}
    </tr>
  ))}
</tbody>

              </table>
            </div>
          )}
        </>
      );
    })()}
  </div>
</section>
{/* ================= REQUEST CALLBACK ================= */}
<section className="pt-3 pb-10 bg-white">

  <div className="flex justify-center">
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-4 rounded-full text-lg shadow-md transition">
      Request Call Back
    </button>
  </div>
</section>

{/* ================= TESTIMONIALS ================= */}
<section className="pt-8 pb-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-blue-600 text-3xl font-bold mb-4">
      Our Customers Say
    </h2>

    {/* Quote */}
    <p className="text-xl font-semibold text-gray-800 mb-12">
      “India’s most trusted laundry and dry cleaning service – rated 4.6★ by 6.1 L happy customers”
    </p>

    {/* Carousel */}
    <Slider {...testimonialSettings}>
      {testimonials.map((item, index) => (
        <div key={index} className="px-3 flex justify-center">
          <div
            className={`
              bg-white border rounded-2xl p-6
              w-[300px] sm:w-[340px] md:w-[420px]  /* Widths for mobile, small screens, desktop */
              min-h-[420px] md:min-h-[460px]
              flex flex-col items-center text-center
              shadow-md hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-300 ease-in-out
            `}
          >
            {/* Stars */}
            <div className="text-orange-500 text-xl mb-4">
              ★★★★★
            </div>

            {/* Review text */}
            <p className="text-gray-600 mb-6">
              {item.text}
            </p>

            {/* Spacer pushes image to bottom */}
            <div className="flex-grow"></div>

            {/* User image bottom center */}
            <div className="flex flex-col items-center mt-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
              />
              <span className="mt-2 font-semibold text-gray-800 text-sm">
                {item.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </Slider>

  </div>
</section>


{/* ================= 10 STEP PROCESS ================= */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      10-Step Formula for Exceptional Garment Cleaning Services
    </h2>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">

      {steps.map((step, index) => (
        <div key={index} className="relative">

          {/* Number badge */}
          <div className="absolute -top-6 left-6 bg-blue-600 text-white 
                          w-14 h-14 rounded-xl flex items-center justify-center 
                          text-2xl font-bold shadow-lg">
            {index + 1}
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl p-8 pt-12 shadow-md 
                          hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-black">
  {step}
</h3>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
{/* ================= FAQ SECTION ================= */}
<section className="py-16 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-10">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>

  </div>
</section>
{/* ================= FOOTER ================= */}
<footer className="bg-white border-t mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">

    {/* LEFT */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 sm:space-y-4">
      <img
        src="./dhobilite.png"
        alt="DhobiLite"
        className="h-8 sm:h-10 mb-2 sm:mb-4"
      />

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        Insta Wash Clean is the one stop solution for all your garment laundry & dry cleaning needs.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 sm:gap-4 text-gray-700 justify-center md:justify-start">
        <FaFacebookF className="hover:text-blue-600 cursor-pointer text-sm sm:text-base" />
        <FaTwitter className="hover:text-blue-400 cursor-pointer text-sm sm:text-base" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer text-sm sm:text-base" />
        <FaLinkedinIn className="hover:text-blue-700 cursor-pointer text-sm sm:text-base" />
        <FaYoutube className="hover:text-red-600 cursor-pointer text-sm sm:text-base" />
      </div>

      {/* Help & Support */}
      <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-3">Help & Support</h4>
      <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
        <li className="flex items-center gap-1 sm:gap-2 justify-center md:justify-start">
          <FaHome  className="text-sm sm:text-base" /> Near Dy Patil College ,Sant Tukaram Nagar ,Pimpri ,Pune 
        </li>
        <li className="flex items-center gap-1 sm:gap-2 justify-center md:justify-start">
          <MdPhone className="text-sm sm:text-base" /> +91 862 607 5570
        </li>
        <li className="flex items-center gap-1 sm:gap-2 justify-center md:justify-start">
          <BsWhatsapp className="text-sm sm:text-base" /> WhatsApp
        </li>
        <li className="flex items-center gap-1 sm:gap-2 justify-center md:justify-start">
          <FaQuestionCircle className="text-sm sm:text-base" /> Support@instawashclean.com
        </li>
      </ul>
    </div>

    {/* QUICK LINKS */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 sm:space-y-3">
      <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-3">Quick Links</h4>
      <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
        {[
          "About Us",
          "Pricing",
          "Prepaid Plans",
          "FAQ",
          "Terms and Conditions",
          "Careers",
          "Get Franchise",
          "Consultancy",
          "Our Stores",
        ].map((item, i) => (
          <li key={i} className="hover:text-blue-600 cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>

    {/* SERVICES */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 sm:space-y-3">
      <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-3">Services</h4>
      <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
        {[
          "Laundry Service",
          "Organic Dry Clean Service",
          "Dry Clean Service",
          "Shoe Cleaning Service",
          "Jacket Cleaning Service",
          "Bag Cleaning Service",
          "Sofa Cleaning Service",
          "Carpet Cleaning Service",
          "Steam Ironing Service",
        ].map((item, i) => (
          <li key={i} className="hover:text-blue-600 cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>

    {/* QR CODE */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 sm:space-y-4">
      <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-3">Scan the QR Code</h4>
      <p className="mb-2 sm:mb-4 font-medium text-xs sm:text-sm">
        To Download Mobile App
      </p>

      <img
        src="./qrcodefake.png"
        alt="QR Code"
        className="w-28 h-28 sm:w-40 sm:h-40"
      />
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t py-3 text-center text-xs sm:text-sm text-gray-500">
    © {new Date().getFullYear()} Insta Wash Clean. All Rights Reserved.
  </div>
</footer>



    </>
  );
};

export default Home;
