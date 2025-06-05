import { ChevronLeft, ChevronRight } from "lucide-react";
import { calculateFinalPrice } from "../services";

type Props = {
  selectedSkip: number;
  price_before_vat: number;
};

export default function Footer({ selectedSkip, price_before_vat }: Props) {
  const handlePermitCheck = () => {
    console.log(selectedSkip);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <button className="flex items-center space-x-2 px-6 py-3 text-gray-300 hover:text-white transition-colors group">
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to Waste Type</span>
      </button>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="text-center md:text-right">
          <div className="text-sm text-gray-400">Selected skip:</div>
          <div className="text-xl font-bold text-white">
            {selectedSkip} Yard - £{calculateFinalPrice(price_before_vat, 20)}
          </div>
        </div>
        <button
          onClick={handlePermitCheck}
          className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
        >
          <div className="flex items-center space-x-2">
            <span>Continue to Permit Check</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}
