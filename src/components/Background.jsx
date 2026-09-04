import React from 'react';

const Background = () => {
  // Generate random bubbles
  const bubbles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-slate-900">
      <div className="absolute inset-0">
        {bubbles.map((_, i) => {
          const size = Math.random() * 40 + 10; // 10px to 50px
          const left = Math.random() * 100;
          const animationDuration = Math.random() * 15 + 15; // 15s to 30s
          const animationDelay = Math.random() * 15;
          const opacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5

          return (
            <div
              key={i}
              className="absolute bottom-[-20px] rounded-full border border-blue-400/50 bg-blue-400/10 backdrop-blur-[2px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                opacity: opacity,
                animation: `floatUp ${animationDuration}s ease-in-out infinite`,
                animationDelay: `-${animationDelay}s`,
                boxShadow: `inset 0 0 ${size/2}px rgba(96, 165, 250, 0.4)`
              }}
            />
          );
        })}
      </div>

      {/* Adding a few larger, slower glowing orbs in the background */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
      <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[40%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Background;
