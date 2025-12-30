import { Link } from "react-router-dom";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import SelectCity from "./SelectCity";

const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select City");

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LEFT: Logo + Location (NO GAP) */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img src="./dhobilite.png" alt="Logo" className="h-10" />
            </Link>

            {/* Location Icon (Desktop + Mobile) */}
            <div
              onClick={() => setCityOpen(true)}
              className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-orange-500"
            >
              <MdLocationOn className="text-lg" />
              <span className="text-sm font-medium">{selectedCity}</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

            {/* Services */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-orange-500">
                Our Services <IoChevronDown />
              </div>

              {serviceOpen && (
                <ul className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                  <ServiceLink to="/services/laundry" label="Laundry Service" />
                  <ServiceLink to="/services/dry-clean" label="Dry Clean Service" />
                  <ServiceLink to="/services/shoe-cleaning" label="Shoe Cleaning Service" />
                  <ServiceLink to="/services/jacket-cleaning" label="Jacket Cleaning Service" />
                  <ServiceLink to="/services/bag-cleaning" label="Bag Cleaning Service" />
                  <ServiceLink to="/services/sofa-cleaning" label="Sofa Cleaning Service" />
                  <ServiceLink to="/services/carpet-cleaning" label="Carpet Cleaning Service" />
                  <ServiceLink to="/services/steam-ironing" label="Steam Ironing Service" />
                </ul>
              )}
            </li>

            {/* Stores */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setStoreOpen(true)}
              onMouseLeave={() => setStoreOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-orange-500">
                Our Stores <IoChevronDown />
              </div>

              {storeOpen && (
                <ul className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <DropdownItem label="Mumbai" />
                  <DropdownItem label="Pune" />
                  <DropdownItem label="Delhi" />
                  <DropdownItem label="Bangalore" />
                  <DropdownItem label="Hyderabad" />
                </ul>
              )}
            </li>

            <NavLink to="/pricing" label="Pricing" />
            <NavLink to="/consultancy" label="Consultancy" />
            <NavLink to="/franchise" label="Get Franchise" bold />
            <NavLink to="/blog" label="Our Blog" />
          </ul>

          {/* DESKTOP RIGHT BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8800414848"
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500 text-blue-500 font-semibold"
            >
              <FiPhoneCall />
              88004 14848
            </a>
            <button className="px-6 py-2 rounded-full bg-orange-500 text-white font-semibold">
              Request Call Back
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">

          {/* Services Mobile */}
          <div className="space-y-2">
            <button
              className="flex justify-between items-center w-full text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              Our Services <IoChevronDown className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                <ServiceLink to="/services/laundry" label="Laundry Service" />
                <ServiceLink to="/services/dry-clean" label="Dry Clean Service" />
                <ServiceLink to="/services/shoe-cleaning" label="Shoe Cleaning Service" />
                <ServiceLink to="/services/jacket-cleaning" label="Jacket Cleaning Service" />
                <ServiceLink to="/services/bag-cleaning" label="Bag Cleaning Service" />
                <ServiceLink to="/services/sofa-cleaning" label="Sofa Cleaning Service" />
                <ServiceLink to="/services/carpet-cleaning" label="Carpet Cleaning Service" />
                <ServiceLink to="/services/steam-ironing" label="Steam Ironing Service" />
              </ul>
            )}
          </div>

          {/* Stores Mobile */}
          <div className="space-y-2">
            <button
              className="flex justify-between items-center w-full text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => setStoreOpen(!storeOpen)}
            >
              Our Stores <IoChevronDown className={`transition-transform ${storeOpen ? "rotate-180" : ""}`} />
            </button>
            {storeOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                <DropdownItem label="Mumbai" />
                <DropdownItem label="Pune" />
                <DropdownItem label="Delhi" />
                <DropdownItem label="Bangalore" />
                <DropdownItem label="Hyderabad" />
              </ul>
            )}
          </div>

          {/* Other mobile links */}
          <MobileLink to="/pricing" label="Pricing" setMenuOpen={setMenuOpen} />
          <MobileLink to="/consultancy" label="Consultancy" setMenuOpen={setMenuOpen} />
          <MobileLink to="/franchise" label="Get Franchise" setMenuOpen={setMenuOpen} />
          <MobileLink to="/blog" label="Our Blog" setMenuOpen={setMenuOpen} />
        </div>
      )}

      {/* CITY MODAL */}
      {cityOpen && (
        <SelectCity
          onClose={() => setCityOpen(false)}
          onSelect={(city) => setSelectedCity(city)}
        />
      )}
    </nav>
  );
};

/* Reusable Components */

const ServiceLink = ({ to, label }) => (
  <li>
    <Link to={to} className="block px-4 py-2 text-sm hover:bg-orange-50">
      {label}
    </Link>
  </li>
);

const DropdownItem = ({ label }) => (
  <li className="px-4 py-2 text-sm hover:bg-orange-50 cursor-pointer">
    {label}
  </li>
);

const NavLink = ({ to, label, bold }) => (
  <li>
    <Link
      to={to}
      className={`hover:text-orange-500 ${bold ? "font-semibold" : ""}`}
    >
      {label}
    </Link>
  </li>
);

const MobileLink = ({ to, label, setMenuOpen }) => (
  <Link
    to={to}
    onClick={() => setMenuOpen(false)}
    className="block text-gray-700 hover:text-orange-500"
  >
    {label}
  </Link>
);

export default Navbar;
