import type { ISkip } from "../../../types";
import { calculateFinalPrice } from "../services";
import getSkipIcon from "./getSkipIcon";
import { Calendar, Check, Home, Weight } from "lucide-react";

type Props = {
  skip: ISkip;
  selectedSkip: number;
  setSelectedSkip: (v: number) => void;
};

export default function SkipCard({
  skip,
  selectedSkip,
  setSelectedSkip,
}: Props) {
  const finalPrice = calculateFinalPrice(skip.price_before_vat, skip.vat);
  const isSelected = selectedSkip === skip.size;
  return (
    <div
      className={`relative bg-white rounded-2xl mb-4 shadow-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${
        isSelected
          ? "border-blue-500 ring-4 ring-blue-200 shadow-2xl"
          : "border-slate-200 hover:border-slate-300"
      }`}
      onClick={() => setSelectedSkip(skip.size)}
    >
      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center z-10">
          <Check className="w-5 h-5" />
        </div>
      )}

      <div className="p-6">
        {/* Skip Icon */}
        <div className="flex justify-center mb-6">{getSkipIcon(skip.size)}</div>

        {/* Skip Details */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            {skip.size} Yard Skip
          </h3>
          <div className="flex items-center justify-center text-slate-600 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{skip.hire_period_days} day hire period</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm">
            {skip.allowed_on_road ? (
              <div className="flex items-center text-emerald-600">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3" />
                </div>
                <span>Road placement allowed</span>
              </div>
            ) : (
              <div className="flex items-center text-slate-500">
                <Home className="w-4 h-4 mr-3" />
                <span>Private property only</span>
              </div>
            )}
          </div>
          <div className="flex items-center text-sm">
            {skip.allows_heavy_waste ? (
              <div className="flex items-center text-emerald-600">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3" />
                </div>
                <span>Heavy waste accepted</span>
              </div>
            ) : (
              <div className="flex items-center text-slate-500">
                <Weight className="w-4 h-4 mr-3" />
                <span>Light waste only</span>
              </div>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="text-center border-t pt-4">
          <div className="text-3xl font-bold text-slate-800 mb-1">
            £{finalPrice}
          </div>
          <div className="text-sm text-slate-500">
            inc. VAT (£{skip.price_before_vat} + {skip.vat}% VAT)
          </div>
        </div>

        {/* Select Button */}
        <button
          className={`w-full mt-6 py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
            isSelected
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
          onClick={() => setSelectedSkip(skip.size)}
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
}
