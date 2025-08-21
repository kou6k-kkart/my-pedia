// src/components/Typography.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'div'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'This is a Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'This is a Heading 2',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children:
      'This is a paragraph. It has a default line height and font weight that makes it readable for long-form content.',
  },
};

export const Custom: Story = {
  args: {
    variant: 'p',
    children: 'This is a custom styled paragraph.',
    className: 'text-purple-600 italic', // تست کلاس‌های دلخواه
  },
};
