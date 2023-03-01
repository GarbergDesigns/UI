import { Button } from '../../index';
import type { StoryObj } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'medium',
        isLoading: false,
        isDisabled: false
    }
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
    }
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    }
}

export const Outline: Story = {
    args: {
        variant: 'outline',
    }
}