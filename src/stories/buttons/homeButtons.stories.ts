import HomeButtons from '@/components/Buttons/HomeButtons';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'buttons/home',
    component: HomeButtons,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof HomeButtons>;


export const Primary : Story = {
    args: {
    }
}
export default meta;
type Story = StoryObj<typeof meta>;