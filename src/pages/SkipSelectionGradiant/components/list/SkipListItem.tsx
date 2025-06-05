import { Check, Clock, MapPin, Weight } from "lucide-react";
import type { ISkip } from "../../../../types";
import { calculateFinalPrice } from "../../services";
import SkipVisual from "../SkipVisual";

type Props = {
  skip: ISkip;
  isSelected: boolean;
  isHovered: boolean;
  handleSkipSelection: (v: number) => void;
  setHoveredSkip: (v: number | null) => void;
  animationClass: string;
};

export default function SkipListItem({
  skip,
  isSelected,
  handleSkipSelection,
  isHovered,
  setHoveredSkip,
  animationClass,
}: Props) {
  const totalPrice = calculateFinalPrice(skip.price_before_vat, skip.vat);

  return (
    <div
      onClick={() => handleSkipSelection(skip.size)}
      className={`bg-gradient-to-r from-purple-800/30 to-purple-900/30 rounded-xl p-4 border border-white/20 transition-all duration-200 ${animationClass} ${
        isSelected
          ? "ring-4 ring-blue-400 shadow-2xl shadow-blue-500/25 scale-105"
          : "hover:scale-102 hover:shadow-xl"
      }`}
      onMouseEnter={() => setHoveredSkip(skip.size)}
      onMouseLeave={() => setHoveredSkip(null)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg p-3 flex items-center justify-center min-w-[60px]">
            {/* <span className="text-white font-bold text-xs">YARDS</span> */}
            <div className="flex justify-center mb-6">
              <SkipVisual
                size={skip.size}
                isSelected={isSelected}
                isHovered={isHovered}
              />
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold">
              {skip.size} Yard Skip
            </h3>
            <div className="flex items-center space-x-4 text-sm text-purple-200 mt-1">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{skip.hire_period_days} days</span>
              </div>
              <div className="flex items-center">
                <Weight className="w-4 h-4 mr-1" />
                <span>
                  {skip.allows_heavy_waste ? "Heavy waste" : "Light only"}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{skip.allowed_on_road ? "Road OK" : "Private only"}</span>
              </div>
            </div>
          </div>

          {skip.recommended && (
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">
              £{totalPrice}
            </div>
            <div className="text-purple-300 text-sm">inc VAT & delivery</div>
          </div>

          <button
            onClick={() => handleSkipSelection(skip.size)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 min-w-[120px] ${
              isSelected
                ? "bg-blue-500 text-white shadow-lg flex items-center justify-center"
                : "bg-purple-700/50 text-purple-200 hover:bg-purple-600/50 hover:text-white"
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Selected
              </>
            ) : (
              "Select Skip"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
