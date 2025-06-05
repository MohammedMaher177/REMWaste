import { useState } from "react";
import { Info } from "lucide-react";

import type { ISkip } from "../../types";

import ProgressHeader from "./components/ProgressHeader";
import SkipCard from "./components/SkipCard";

import { calculateFinalPrice } from "./services";

const skipData: ISkip[] = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.813",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 375,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.171",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 400,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.339",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 439,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.516",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.69",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.876",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.434",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 15125,
    size: 40,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.603",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
];

const SkipSelectionSimpleDesing = () => {
  const [selectedSkip, setSelectedSkip] = useState(8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Progress Header */}
      <ProgressHeader />

      <div className="mx-auto pt-8 relative">
        <div className="px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Select Your Perfect Skip
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the skip size that matches your project needs. All prices
              include VAT and delivery.
            </p>
          </div>

          {/* Skip Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {skipData.map((skip) => (
              <SkipCard
                selectedSkip={selectedSkip}
                setSelectedSkip={setSelectedSkip}
                skip={skip}
              />
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Need help choosing?
                </h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  <strong>Small projects (4-6 yards):</strong> Perfect for
                  garden clearances, small renovations, or household
                  decluttering.
                  <br />
                  <strong>Medium projects (8-10 yards):</strong> Ideal for
                  kitchen/bathroom refits, small extensions, or larger garden
                  projects.
                  <br />
                  <strong>Large projects (12-14 yards):</strong> Great for major
                  renovations, house clearances, or commercial waste.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Header Section */}

        {/* Bottom Navigation */}
        <div className=" sticky bg-gray-300 bottom-0 w-full p-4">
          <p className="p-4">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>
          <div className="flex justify-between items-center">
            <button className="flex items-center px-6 py-3 text-slate-600 hover:text-slate-800 transition-colors">
              <span className="mr-2">←</span>
              Back to Waste Type
            </button>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-slate-600">
                Selected:{" "}
                <span className="font-semibold">
                  {selectedSkip} Yard Skip - £
                  {calculateFinalPrice(
                    skipData.find((s) => s.size === selectedSkip)
                      ?.price_before_vat || 0,
                    20
                  )}
                </span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center">
                Continue to Permit Check
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionSimpleDesing;
