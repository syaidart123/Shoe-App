import "swiper/css";
import "swiper/css/pagination";

import HeroSection from "../components/hero";
import ProductSection from "../components/cardProduct/index.jsx";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <div className="kelas w-100 min-vh-100">
        <ProductSection />
      </div>
    </div>
  );
};

export default HomePage;
