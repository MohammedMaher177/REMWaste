import React, { useState, useEffect } from "react";

interface LoadingProps {
  variant?: "pulse" | "orbit" | "wave" | "morphing" | "matrix";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "green" | "pink" | "orange";
  text?: string;
  showText?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  variant = "pulse",
  size = "lg",
  color = "purple",
  text = "Loading...",
  showText = true,
}) => {
  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDot((prev) => (prev + 1) % 8);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const colorClasses = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    green: "from-green-400 to-green-600",
    pink: "from-pink-400 to-pink-600",
    orange: "from-orange-400 to-orange-600",
  };

  const textColorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
    pink: "text-pink-600",
    orange: "text-orange-600",
  };

  const renderPulseLoader = () => (
    <div className="relative">
      <div
        className={`${sizeClasses[size]} bg-gradient-to-r ${colorClasses[color]} rounded-full animate-pulse`}
      ></div>
      <div
        className={`absolute inset-0 ${sizeClasses[size]} bg-gradient-to-r ${colorClasses[color]} rounded-full animate-ping opacity-20`}
      ></div>
      <div
        className={`absolute inset-2 bg-gradient-to-r ${colorClasses[color]} rounded-full animate-bounce opacity-60`}
      ></div>
    </div>
  );

  const renderOrbitLoader = () => (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
      <div
        className={`absolute inset-0 rounded-full border-2 border-transparent border-t-current ${textColorClasses[color]} animate-spin`}
      ></div>
      <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-current rounded-full animate-ping"></div>
      <div
        className={`absolute top-1/2 right-0 w-1 h-1 -mr-0.5 -mt-0.5 bg-gradient-to-r ${colorClasses[color]} rounded-full animate-pulse`}
      ></div>
    </div>
  );

  const renderWaveLoader = () => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-8 bg-gradient-to-t ${colorClasses[color]} rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: "0.8s",
          }}
        ></div>
      ))}
    </div>
  );

  const renderMorphingLoader = () => (
    <div className="relative">
      <div
        className={`${sizeClasses[size]} bg-gradient-to-r ${colorClasses[color]} rounded-full animate-spin`}
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          animationDuration: "2s",
        }}
      ></div>
      <div
        className={`absolute inset-1 bg-gradient-to-l ${colorClasses[color]} rounded-full animate-pulse opacity-50`}
      ></div>
    </div>
  );

  const renderMatrixLoader = () => (
    <div className="grid grid-cols-3 gap-1">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 bg-gradient-to-br ${
            colorClasses[color]
          } rounded-sm ${
            currentDot === i ? "animate-pulse scale-125" : "opacity-30"
          } transition-all duration-200`}
        ></div>
      ))}
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case "pulse":
        return renderPulseLoader();
      case "orbit":
        return renderOrbitLoader();
      case "wave":
        return renderWaveLoader();
      case "morphing":
        return renderMorphingLoader();
      case "matrix":
        return renderMatrixLoader();
      default:
        return renderPulseLoader();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      {renderLoader()}
      {showText && (
        <p
          className={`text-sm font-medium ${textColorClasses[color]} animate-pulse`}
        >
          {text}
        </p>
      )}
    </div>
  );
};



export default Loading;
