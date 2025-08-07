import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center hero-gradient">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent loading-spinner"
          ></div>
          <div className="absolute inset-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{progress}%</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
        <p className="text-white/70">Preparing something amazing...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;