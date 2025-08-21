// src/components/Card.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    summary: { control: 'text' },
    onReadMore: { action: 'readMoreClicked' }, // برای نمایش event در پنل Actions
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/400x250', // یک عکس نمونه
    title: 'Introduction to React',
    summary:
      'A brief overview of the most popular JavaScript library for building user interfaces.',
  },
};

export const LongText: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/400x250',
    title: 'Deep Dive into Next.js Features and Capabilities',
    summary:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
  },
};
