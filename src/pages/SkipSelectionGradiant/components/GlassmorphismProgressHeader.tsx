import {
  Calendar,
  Check,
  ChevronRight,
  MapPin,
  Shield,
  Truck,
  Weight,
  Zap,
} from "lucide-react";

type Props = {};

export default function GlassmorphismProgressHeader({}: Props) {
  return (
    <div className="backdrop-blur-xl bg-white/10 border-b border-white/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {[
              { icon: MapPin, label: "Location", status: "completed" },
              { icon: Weight, label: "Waste Type", status: "completed" },
              { icon: Truck, label: "Skip Size", status: "current" },
              { icon: Shield, label: "Permit Check", status: "pending" },
              { icon: Calendar, label: "Date & Time", status: "pending" },
              { icon: Zap, label: "Payment", status: "pending" },
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex items-center space-x-2 ${
                    step.status === "completed"
                      ? "text-emerald-400"
                      : step.status === "current"
                      ? "text-blue-400"
                      : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step.status === "completed"
                        ? "bg-emerald-500 shadow-lg shadow-emerald-500/50"
                        : step.status === "current"
                        ? "bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse"
                        : "bg-gray-600"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <step.icon className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <span className="font-medium text-sm hidden md:block">
                    {step.label}
                  </span>
                </div>
                {index < 5 && (
                  <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
