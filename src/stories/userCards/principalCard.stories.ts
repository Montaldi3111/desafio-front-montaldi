import ResumeCard from '@/app/components/ResumeCard/ResumeCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'userCards/Principal',
    component: ResumeCard,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof ResumeCard>;


export const Primary : Story = {
    args: {
        
    }
}
export default meta;
type Story = StoryObj<typeof meta>;