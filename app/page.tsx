import Navbar from "./components/Navbar";
import HeroSlide from "./components/HeroSlide";
import NewArrivals from "./components/NewArrivals";
import TrustFeatures from "./components/TrustFeatures";
import NatureReserve from "./components/NatureReserve";
import ExploreCategory from "./components/ExploreCategory";
import Trending from "./components/Trending";
import ViewLookbooks from "./components/ViewLookbooks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black">
      <Navbar />
      <HeroSlide />
      <NewArrivals />
      <TrustFeatures />
      <NatureReserve />
      <ExploreCategory />
      <Trending />
      <ViewLookbooks />
      <Footer />
    </main>
  );
}
