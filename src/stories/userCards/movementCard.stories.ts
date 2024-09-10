import MovementCard from '@/components/Cards/MovementCard/MovementCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'userCards/Movement',
    component: MovementCard,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof MovementCard>;

  const movement = {
        operation: "Transferiste a Juan",
        amount: 5000,
        date: "viernes"
  }

export const Primary : Story = {
    args: {
      movement
    }
}
export default meta;
type Story = StoryObj<typeof meta>;