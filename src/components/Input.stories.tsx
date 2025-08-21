// src/components/Input.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Username',
    placeholder: 'username',
    size: 'small',
  },
};
