// src/components/Header.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // برای نمایش بهتر کامپوننت‌های تمام‌عرض
  },
  argTypes: {
    onLogin: { action: 'loggedIn' },
    onSignUp: { action: 'signedUp' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    siteName: 'My-Pedia',
    navItems: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Articles', href: '#' },
    ],
  },
};
