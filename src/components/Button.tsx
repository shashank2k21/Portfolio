import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({ children, variant = 'primary', onClick, className = '', href }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50',
    secondary: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
