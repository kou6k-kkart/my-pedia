// src/components/Footer.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    siteName: 'My-Pedia',
    socialLinks: [
      { name: 'Twitter', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  },
};
