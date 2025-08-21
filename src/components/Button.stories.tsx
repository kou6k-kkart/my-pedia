// src/components/Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// اطلاعات کلی در مورد کامپوننت
const meta: Meta<typeof Button> = {
  title: 'Components/Button', // آدرس در منوی Storybook
  component: Button,
  tags: ['autodocs'], // برای ساخت خودکار مستندات
  argTypes: { // برای کنترل props در Storybook
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// داستان اول: دکمه اصلی (Primary)
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

// داستان دوم: دکمه فرعی (Secondary)
export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

// داستان سوم: دکمه بزرگ (Large)
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

// داستان چهارم: دکمه کوچک (Small)
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
