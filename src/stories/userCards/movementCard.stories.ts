import MovementCard from '@/app/components/MovementCard/MovementCard';
import ResumeCard from '@/app/components/ResumeCard/ResumeCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'userCards/Movement',
    component: MovementCard,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof MovementCard>;

export const Primary : Story = {
    args: {
        name: "Transferiste a Juan",
        amount: 5000,
        date: "viernes"
    }
}
export default meta;
type Story = StoryObj<typeof meta>;