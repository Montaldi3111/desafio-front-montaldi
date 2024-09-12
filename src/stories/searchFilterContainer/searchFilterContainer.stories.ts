import SearchFilterContainer from '@/components/containers/SearchFilterContainer';
import type { Meta, StoryObj } from '@storybook/react';
import '../../app/(main)/activity/page.css'
const meta = {
    title: 'Search/SearchFilterContainer',
    component: SearchFilterContainer,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof SearchFilterContainer>;


export const Primary : Story = {
    
}

export default meta;
type Story = StoryObj<typeof meta>;