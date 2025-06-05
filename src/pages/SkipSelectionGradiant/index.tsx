import { useEffect, useState } from "react";
import SkipCard from "./components/cards/SkipCard";
import Footer from "./components/Footer";
import CardInfo from "./components/CardInfo";
import HeroSection from "./components/HeroSection";
import GlassmorphismProgressHeader from "./components/GlassmorphismProgressHeader";
import Animatedbackground from "./components/Animatedbackground";
import axiosInstance from "../../services/axios";
import type { ISkip } from "../../types";
import Loading from "../../components/loading";
import ViewSwitcher from "../../components/ViewSwitcher";
import SkipListItem from "./components/list/SkipListItem";

const Gradiant = () => {
  const [viewType, setViewType] = useState<"card" | "list">(
    (localStorage.getItem("viewType") as "card" | "list") || "list"
  );
  const [selectedSkip, setSelectedSkip] = useState(
    Number(localStorage.getItem("selectedSkip")) || 8
  );
  const [hoveredSkip, setHoveredSkip] = useState<number | null>(null);
  const [animationClass, setAnimationClass] = useState("");
  const [loading, setLoading] = useState(false);
  const [skips, setSkips] = useState<ISkip[]>([]);

  const handleSkipSelection = (size: number) => {
    setAnimationClass("animate-pulse");
    localStorage.setItem("selectedSkip", String(size));
    setTimeout(() => {
      setSelectedSkip(size);
      setAnimationClass("");
    }, 150);
  };

  const fetchData = () => {
    axiosInstance
      .get("/skips/by-location", {
        params: { postcode: "NR32", area: "Lowestoft" },
      })
      .then((res) => {
        setSkips(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch skips", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <Animatedbackground />

      {/* Glassmorphism Progress Header */}
      <GlassmorphismProgressHeader />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <HeroSection />

        <ViewSwitcher setViewType={setViewType} viewType={viewType} />

        {/* Skip Selection Grid */}
        {loading ? (
          <div className="h-96">
            <Loading />
          </div>
        ) : viewType === "card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skips.map((skip: ISkip) => (
              <SkipCard
                key={skip.id}
                animationClass={animationClass}
                handleSkipSelection={handleSkipSelection}
                isHovered={hoveredSkip === skip.size}
                isSelected={selectedSkip === skip.size}
                setHoveredSkip={setHoveredSkip}
                skip={skip}
              />
            ))}
          </div>
        ) : (
          <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-4 max-w-5xl mx-auto">
                {skips.map((skip) => (
                  <SkipListItem
                    key={skip.id}
                    skip={skip}
                    animationClass={animationClass}
                    setHoveredSkip={setHoveredSkip}
                    isHovered={hoveredSkip === skip.size}
                    isSelected={skip.size === selectedSkip}
                    handleSkipSelection={handleSkipSelection}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Info Cards */}
        <CardInfo />

        {/* Bottom Navigation */}
        <Footer
          price_before_vat={
            skips?.find((s) => s.size === selectedSkip)?.price_before_vat || 0
          }
          selectedSkip={selectedSkip}
        />
      </div>
    </div>
  );
};

export default Gradiant;
