// src/components/Typography.tsx

import React from 'react';

// تعریف انواع تگ‌های HTML که کامپوننت می‌تونه رندر کنه
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'span'
  | 'div';

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string; // برای اضافه کردن کلاس‌های دلخواه
}

export const Typography = ({
  variant = 'p',
  children,
  className = '',
  ...props
}: TypographyProps) => {
  // انتخاب تگ HTML بر اساس variant
  const Component = variant;

  // تعریف استایل‌های پایه برای هر variant با Tailwind CSS
  const variantClasses = {
    h1: 'text-4xl font-bold tracking-tight',
    h2: 'text-3xl font-semibold tracking-tight',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-medium',
    p: 'text-base font-normal leading-7',
    span: '', // استایل پیش‌فرض نداره
    div: '',  // استایل پیش‌فرض نداره
  };

  const classes = `${variantClasses[variant]} ${className}`;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
