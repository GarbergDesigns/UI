import React from 'react';
import { ButtonProps } from './Button';
import { Button } from '../../index';

export default {
  title: 'Button',
  component: Button,
};

export const Default = (args: ButtonProps) => <Button {...args}>Button</Button>;