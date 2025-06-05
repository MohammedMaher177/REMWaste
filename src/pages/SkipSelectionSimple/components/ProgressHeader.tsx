import { Check } from "lucide-react";

type Props = {};

export default function ProgressHeader({}: Props) {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center text-emerald-600">
              <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-2">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Location</span>
            </div>
            <div className="flex items-center text-emerald-600">
              <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-2">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Waste Type</span>
            </div>
            <div className="flex items-center text-blue-600">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <span className="font-medium">Skip Size</span>
            </div>
            <div className="flex items-center text-slate-400">
              <div className="w-6 h-6 bg-slate-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-slate-600 text-xs">4</span>
              </div>
              <span>Permit Check</span>
            </div>
            <div className="flex items-center text-slate-400">
              <div className="w-6 h-6 bg-slate-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-slate-600 text-xs">5</span>
              </div>
              <span>Date & Time</span>
            </div>
            <div className="flex items-center text-slate-400">
              <div className="w-6 h-6 bg-slate-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-slate-600 text-xs">6</span>
              </div>
              <span>Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
