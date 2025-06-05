import type { ISkip } from "../../../../types";
import { Check, Clock, Home, Star, Weight } from "lucide-react";
import SkipVisual from "../SkipVisual";
import PopularityStars from "./PopularityStars";
import { calculateFinalPrice } from "../../services";

type Props = {
  skip: ISkip | any;
  handleSkipSelection: (v: number) => void;
  setHoveredSkip: (v: number | null) => void;
  animationClass: string;
  isSelected: boolean;
  isHovered: boolean;
};

export default function SkipCard({
  skip,
  isSelected,
  isHovered,
  handleSkipSelection,
  setHoveredSkip,
  animationClass,
}: Props) {
  const finalPrice = calculateFinalPrice(skip.price_before_vat, skip.vat);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 ${animationClass}`}
      onClick={() => handleSkipSelection(skip.size)}
      onMouseEnter={() => setHoveredSkip(skip.size)}
      onMouseLeave={() => setHoveredSkip(null)}
    >
      {/* Card */}
      <div
        className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden transition-all duration-500 ${
          isSelected
            ? "ring-4 ring-blue-400 shadow-2xl shadow-blue-500/25 scale-105"
            : "hover:scale-102 hover:shadow-xl"
        }`}
      >
        {/* Recommended Badge */}
        {skip.recommended && (
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current" />
              <span>RECOMMENDED</span>
            </div>
          </div>
        )}

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-4 left-4 z-20">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>
        )}

        <div className="p-8">
          {/* Skip Visual */}
          <div className="flex justify-center mb-6">
            <SkipVisual
              size={skip.size}
              isSelected={isSelected}
              isHovered={isHovered}
            />
          </div>

          {/* Skip Info */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-black text-white mb-2">
              {skip.size}{" "}
              <span className="text-lg font-normal text-gray-300">
                Yard Skip
              </span>
            </h3>
            <p className="text-blue-300 text-sm font-medium mb-3">
              {skip.bestFor}
            </p>
            <PopularityStars count={skip.popularity} />
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-2" />
                <span>{skip.hire_period_days} days hire</span>
              </div>
              {skip.allowed_on_road ? (
                <div className="flex items-center text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span className="text-xs">Road OK</span>
                </div>
              ) : (
                <div className="flex items-center text-orange-400">
                  <Home className="w-4 h-4 mr-2" />
                  <span className="text-xs">Private only</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-300">
                <Weight className="w-4 h-4 mr-2" />
                <span>Weight capacity</span>
              </div>
              {skip.allows_heavy_waste ? (
                <div className="flex items-center text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span className="text-xs">Heavy waste</span>
                </div>
              ) : (
                <div className="flex items-center text-orange-400">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                  <span className="text-xs">Light only</span>
                </div>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="text-center border-t border-white/10 pt-6 mb-6">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
              £{finalPrice}
            </div>
            <div className="text-xs text-gray-400">Inc. VAT & delivery</div>
          </div>

          {/* Select Button */}
          <button
            className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
              isSelected
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105"
                : "bg-white/10 text-white hover:bg-white/20 hover:scale-105 border border-white/20"
            }`}
            onClick={() => handleSkipSelection(skip.size)}
          >
            {isSelected ? (
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Selected</span>
              </div>
            ) : (
              "Select This Skip"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
