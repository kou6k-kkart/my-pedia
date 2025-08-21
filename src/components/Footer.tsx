// src/components/Footer.tsx

import React from 'react';
import { Typography } from './Typography';

interface FooterProps {
  siteName: string;
  socialLinks: { name: string; href: string }[];
}

export const Footer = ({ siteName, socialLinks }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
        <Typography variant="p" className="text-gray-600">
          © {currentYear} {siteName}. All rights reserved.
        </Typography>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
