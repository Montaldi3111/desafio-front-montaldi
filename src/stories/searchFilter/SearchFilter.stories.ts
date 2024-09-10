import SearchFilter from '@/components/SearchFilter/SearchFilter';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Search/SearchFilter',
    component: SearchFilter,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof SearchFilter>;


export const Primary : Story = {
    
}

export default meta;
type Story = StoryObj<typeof meta>;