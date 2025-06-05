type Props = {
  isSelected: boolean;
  isHovered: boolean;
  size: number;
};

export default function SkipVisual({ isHovered, isSelected, size }: Props) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
          isSelected ? "opacity-20" : ""
        }`}
      ></div>

      {/* Skip container */}
      <div
        className={`relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-2xl shadow-2xl transform transition-all duration-500 ${
          isHovered ? "scale-110 rotate-2" : ""
        } ${isSelected ? "scale-105" : ""}`}
        style={{
          width: `${Math.min(size * 12 + 60, 140)}px`,
          height: `${Math.min(size * 8 + 40, 90)}px`,
          clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
        }}
      >
        {/* Inner shadow */}
        <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-lg opacity-60"></div>

        {/* Skip details */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white font-black text-lg drop-shadow-lg">
              {size}
            </div>
            <div className="text-white text-xs font-bold drop-shadow">
              YARDS
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent opacity-20 rounded-t-2xl"></div>
      </div>
    </div>
  );
}
