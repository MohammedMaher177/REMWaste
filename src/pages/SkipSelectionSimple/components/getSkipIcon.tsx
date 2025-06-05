const getSkipIcon = (size: any) => {
  const baseSize = Math.min(size * 6 + 24, 80);
  return (
    <div className="relative">
      <div
        className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg border-2 border-amber-300"
        style={{
          width: `${baseSize}px`,
          height: `${baseSize * 0.6}px`,
          clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-2 bg-amber-300 opacity-30 rounded"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-800 font-bold text-xs">
          {size}Y
        </div>
      </div>
    </div>
  );
};

export default getSkipIcon;
