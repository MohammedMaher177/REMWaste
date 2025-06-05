import { useState } from "react";
import Loading from "../loading";

interface Props {
  variant?: "pulse" | "orbit" | "wave" | "morphing" | "matrix";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "green" | "pink" | "orange";
  text?: string;
  showText?: boolean;
}

const variants: Props["variant"][] = [
  "pulse",
  "orbit",
  "wave",
  "morphing",
  "matrix",
];

const colors: Props["color"][] = ["blue", "purple", "green", "pink", "orange"];

const sizes: Props["size"][] = ["sm", "md", "lg"];

export default function LoadingDemo({}: Props) {
  const [selectedVariant, setSelectedVariant] =
    useState<Props["variant"]>("pulse");
  const [selectedColor, setSelectedColor] = useState<Props["color"]>("blue");
  const [selectedSize, setSelectedSize] = useState<Props["size"]>("md");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full">
        <h1 className="text-2xl font-bold text-white text-center mb-8">
          Creative Loading Component
        </h1>

        <div className="bg-white/5 rounded-2xl p-6 mb-6 flex items-center justify-center min-h-[120px]">
          <Loading
            variant={selectedVariant}
            color={selectedColor}
            size={selectedSize}
            text="Loading awesome content..."
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Variant
            </label>
            <select
              value={selectedVariant}
              onChange={(e) =>
                setSelectedVariant(e.target.value as Props["variant"])
              }
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {variants.map((variant: any) => (
                <option key={variant} value={variant} className="bg-slate-800">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Color
            </label>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? "border-white scale-110"
                      : "border-white/30"
                  } ${
                    color === "blue"
                      ? "bg-blue-500"
                      : color === "purple"
                      ? "bg-purple-500"
                      : color === "green"
                      ? "bg-green-500"
                      : color === "pink"
                      ? "bg-pink-500"
                      : "bg-orange-500"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Size
            </label>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedSize === size
                      ? "bg-white/20 border-white text-white"
                      : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {size?.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
