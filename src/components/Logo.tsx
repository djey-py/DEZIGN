import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 mb-1"
      >
        <path
          d="M50 5C30 5 10 15 5 50C5 85 30 95 50 95C70 95 95 85 95 50C95 15 70 5 50 5Z"
          stroke="url(#logo_grad)"
          strokeWidth="1"
          strokeLinecap="round"
          className="opacity-80"
        />
        <path
          d="M50 15C35 15 20 22 15 50C15 78 35 85 50 85C65 85 85 78 85 50C85 22 65 15 50 15Z"
          stroke="url(#logo_grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M50 25C40 25 30 30 25 50C25 70 40 75 50 75C60 75 75 70 75 50C75 30 60 25 50 25Z"
          stroke="url(#logo_grad)"
          strokeWidth="1"
          strokeLinecap="round"
          className="opacity-90"
        />
        <path
          d="M50 35C45 35 38 38 35 50C35 62 45 65 50 65C55 65 65 62 65 50C65 38 55 35 50 35Z"
          stroke="url(#logo_grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 45C48 45 45 47 45 50C45 53 48 55 50 55C52 55 55 53 55 50C55 47 52 45 50 45Z"
          stroke="url(#logo_grad)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient
            id="logo_grad"
            x1="5"
            y1="5"
            x2="95"
            y2="95"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17D6D6" />
            <stop offset="1" stopColor="#0FA8A8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold tracking-[0.2em] text-white leading-none">DEZIGN</span>
        <span className="text-[0.45rem] uppercase tracking-[0.3em] text-primary mt-1 font-semibold">Precisão em cada detalhe.</span>
      </div>
    </div>
  );
};
