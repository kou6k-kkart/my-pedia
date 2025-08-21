// src/components/Header.tsx

import React from 'react';
import { Typography } from './Typography';
import { Button } from './Button';

interface HeaderProps {
  siteName: string;
  navItems: { label: string; href: string }[];
  onLogin: () => void;
  onSignUp: () => void;
}

export const Header = ({
  siteName,
  navItems,
  onLogin,
  onSignUp,
}: HeaderProps) => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Typography variant="h3">{siteName}</Typography>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button onClick={onLogin} label="Log in" />
          <Button onClick={onSignUp} label="Sign up" primary />
        </div>
      </div>
    </header>
  );
};
