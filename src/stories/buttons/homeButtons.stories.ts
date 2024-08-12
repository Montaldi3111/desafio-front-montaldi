import HomeButtons from '@/app/components/Buttons/HomeButtons';
import ResumeCard from '@/app/components/ResumeCard/ResumeCard';
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