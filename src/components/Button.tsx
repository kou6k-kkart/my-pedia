// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-bold py-2 px-4 rounded';
  const modeClasses = primary
    ? 'bg-blue-500 hover:bg-blue-700 text-white'
    : 'bg-gray-200 hover:bg-gray-300 text-gray-800';
  const sizeClasses =
    size === 'small'
      ? 'text-xs'
      : size === 'large'
      ? 'text-lg'
      : 'text-base';

  return (
    <button
      type="button"
      className={`${baseClasses} ${modeClasses} ${sizeClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};
