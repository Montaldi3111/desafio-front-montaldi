import CvuAliasCard from '@/app/components/CVU-Alias-Card/CvuAliasCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'userCards/CVU-Alias-Card',
    component: CvuAliasCard,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof CvuAliasCard>;


export const Primary : Story = {
    args: {
        
    }
}
export default meta;
type Story = StoryObj<typeof meta>;