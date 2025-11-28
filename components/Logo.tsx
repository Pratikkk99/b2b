import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md', variant = 'full' }) => {
  // Dimensions map
  const sizes = {
    sm: { width: 32, height: 32, text: 'text-lg' },
    md: { width: 48, height: 48, text: 'text-2xl' },
    lg: { width: 64, height: 64, text: 'text-4xl' },
    xl: { width: 120, height: 120, text: 'text-6xl' } // Larger for Landing Hero
  };

  const { width, height, text } = sizes[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Icon Graphic */}
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Background Circle (Optional, often white in the logo, but kept transparent for versatility) */}
        
        {/* LEFT FIGURE: Light Blue Body + Green Head */}
        {/* Head */}
        <circle cx="65" cy="55" r="14" fill="#8bc34a" /> 
        {/* Body (Curved Swoosh) */}
        <path d="M55,75 C40,90 40,130 65,155 C70,160 80,165 85,145 C80,130 70,100 80,80 Z" fill="#4facfe" />
        <path d="M45,85 Q25,105 35,145 C40,155 55,170 75,175 C60,165 40,140 45,85 Z" fill="#4facfe" opacity="0.8"/>

        {/* RIGHT FIGURE: Pink Body + Pink Head */}
        {/* Head */}
        <circle cx="135" cy="80" r="14" fill="#e91e63" />
        {/* Body (Curved Swoosh) */}
        <path d="M145,100 C160,115 160,155 135,180 C130,185 120,190 115,170 C120,155 130,125 120,105 Z" fill="#e91e63" />
        <path d="M155,110 Q175,130 165,170 C160,180 145,195 125,200 C140,190 160,165 155,110 Z" fill="#e91e63" opacity="0.8"/>

        {/* CENTER FIGURE: Orange Body + Orange Head */}
        {/* Head */}
        <circle cx="100" cy="45" r="16" fill="#ff8f00" />
        {/* Body (Y Shape / Embracing) */}
        <path d="M100,65 C120,75 130,90 120,130 C115,150 105,175 100,190 C95,175 85,150 80,130 C70,90 80,75 100,65 Z" fill="#ff8f00" />
        
        {/* TOP RIGHT ACCENT: Yellow Swoosh */}
        <path d="M140,40 Q160,35 170,55 C175,65 170,75 160,65 Q150,55 140,40 Z" fill="#ffeb3b" />
      </svg>

      {/* Text Content */}
      {showText && variant === 'full' && (
        <div className="mt-2 text-center leading-none">
          <h1 className={`${text} font-black tracking-tight text-brand-blue uppercase drop-shadow-sm`}>
            Born <span className="text-brand-orange">2</span> Build
          </h1>
          <p className="text-[10px] md:text-xs font-bold text-brand-cyan tracking-widest mt-1 uppercase">
            Strength <span className="text-brand-orange">•</span> Endurance <span className="text-brand-pink">•</span> Flexibility
          </p>
        </div>
      )}
    </div>
  );
};