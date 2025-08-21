// src/components/Input.tsx

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  label?: string;
}

export const Input = ({
  size = 'medium',
  error = false,
  label,
  ...props
}: InputProps) => {
  // Base classes for all inputs
  const baseClasses =
    'border rounded w-full focus:outline-none focus:ring-2 transition-all';

  // Classes for different sizes
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-3 text-base',
    large: 'py-3 px-4 text-lg',
  };

  // Classes for different states
  const stateClasses = error
    ? 'border-red-500 focus:ring-red-300'
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300';

  const disabledClasses = props.disabled ? 'bg-gray-100 cursor-not-allowed' : '';

  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${stateClasses} ${disabledClasses}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input className={finalClasses} {...props} />
      {error && (
        <p className="text-red-600 text-xs mt-1">This field has an error.</p>
      )}
    </div>
  );
};
