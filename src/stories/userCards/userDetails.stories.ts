import UserDetails from '@/app/components/UserDetails/UserDetails';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'userCards/UserDetails',
    component: UserDetails,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof UserDetails>;


export const Primary : Story = {
    args: {
        
    }
}
export default meta;
type Story = StoryObj<typeof meta>;