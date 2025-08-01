import Link from 'next/link';

interface PhoenixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function PhoenixLogo({
  className = '',
  size = 'md',
  color = 'orange-500',
}: PhoenixLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <Link
      href="/"
      className={`flex-shrink-0 ${className}`}
      title="Phoenix Wellness Home"
    >
      <svg
        className={`${sizeClasses[size]} text-${color} hover:opacity-80 transition-opacity`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* Phoenix bird icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          fill="none"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"
          fill="currentColor"
          opacity="0.2"
        />
      </svg>
    </Link>
  );
}
