// src/components/Card.tsx

import React from 'react';
import { Typography } from './Typography';
import { Button } from './Button';

interface CardProps {
  imageUrl: string;
  title: string;
  summary: string;
  onReadMore: () => void;
}

export const Card = ({
  imageUrl,
  title,
  summary,
  onReadMore,
}: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <Typography variant="h4" className="mb-2">
          {title}
        </Typography>
        <Typography variant="p" className="text-gray-700">
          {summary}
        </Typography>
      </div>
      <div className="px-6 pt-4 pb-2 mb-2">
        <Button onClick={onReadMore} label="Read More" primary />
      </div>
    </div>
  );
};
