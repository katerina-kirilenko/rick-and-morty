import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from 'components/blocks/Header';
import { HeaderProps } from './types';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
