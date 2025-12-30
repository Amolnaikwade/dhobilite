import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Laundry from "./pages/services/Laundry";
import DryClean from "./pages/services/DryClean";
import ShoeCleaning from "./pages/services/ShoeCleaning";
import JacketCleaning from "./pages/services/JacketCleaning";
import BagCleaning from "./pages/services/BagCleaning";
import SofaCleaning from "./pages/services/SofaCleaning";
import CarpetCleaning from "./pages/services/CarpetCleaning";
import SteamIroning from "./pages/services/SteamIroning";
import Pricing from "./pages/Pricing";
import Consultancy from "./pages/Consultancy";
import Franchise from "./pages/Franchise";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/laundry" element={<Laundry />} />
        <Route path="/services/dry-clean" element={<DryClean />} />
        <Route path="/services/shoe-cleaning" element={<ShoeCleaning />} />
        <Route path="/services/jacket-cleaning" element={<JacketCleaning />} />
        <Route path="/services/bag-cleaning" element={<BagCleaning />} />
        <Route path="/services/sofa-cleaning" element={<SofaCleaning />} />
        <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="/services/steam-ironing" element={<SteamIroning />} />
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
