import { MdLocationOn, MdClose } from "react-icons/md";

const cities = [
  "Mumbai",
  "Pune",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Nagpur",
];

const SelectCity = ({ onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <MdClose size={22} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <MdLocationOn className="text-orange-500 text-xl" />
          <h2 className="text-xl font-semibold">Select Your City</h2>
        </div>

        {/* City List */}
        <div className="grid grid-cols-2 gap-4">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => {
                onSelect(city);
                onClose();
              }}
              className="border rounded-lg py-2 hover:bg-orange-50 hover:border-orange-400 transition"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCity;
