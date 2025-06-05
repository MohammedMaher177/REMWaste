import { Zap } from "lucide-react";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
        <Zap className="w-4 h-4" />
        <span>Step 3 of 6</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
        Choose Your Skip
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Select the perfect skip size for your project. Our premium skips come
        with
        <span className="text-blue-400 font-semibold"> free delivery</span> and
        <span className="text-purple-400 font-semibold">
          {" "}
          14-day hire period
        </span>
        .
      </p>
    </div>
  );
}
