import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverEffect = hover ? 'hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20' : '';

  return (
    <div
      className={`
        bg-white/5 backdrop-blur-lg rounded-2xl p-6
        border border-white/10 shadow-xl
        transition-all duration-300
        ${hoverEffect}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
