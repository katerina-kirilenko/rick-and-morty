import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from 'components/blocks/Header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  active: false,
};

export const ActiveLink = Template.bind({});

ActiveLink.args = {
  active: true,
};
