
import SearchBar from '@/components/SearchBar/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Search/searchBar',
    component: SearchBar,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof SearchBar>;


export const Primary : Story = {
    args: {
        
    }
}
export default meta;
type Story = StoryObj<typeof meta>;