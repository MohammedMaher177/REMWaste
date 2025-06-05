import { Clock, Shield, Truck } from "lucide-react";

type Props = {};

export default function CardInfo({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Free Delivery</h3>
        </div>
        <p className="text-gray-300 text-sm">
          Next-day delivery available across all locations. Professional service
          guaranteed.
        </p>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Permit Included</h3>
        </div>
        <p className="text-gray-300 text-sm">
          We handle all permits and council requirements. No hidden fees or
          surprises.
        </p>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-white/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Flexible Hire</h3>
        </div>
        <p className="text-gray-300 text-sm">
          14-day hire period with option to extend. Collection arranged at your
          convenience.
        </p>
      </div>
    </div>
  );
}
