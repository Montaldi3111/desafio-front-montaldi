import RegisterSuccess from '@/app/components/ActionSuccessful/RegisterSuccess';
import Card from '@/app/components/HomeCard/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Action/RegisterSuccess',
    component: RegisterSuccess,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Card>;

export const Primary : Story = {
    args: {
    }
}

export default meta;
type Story = StoryObj<typeof meta>;