import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import cardBg from 'assets/placeholder-image.png';
import MenuCard from 'components/blocks/MenuCard';
import { MenuCardProps } from './types';

export default {
  title: 'MenuCard',
  component: MenuCard,
} as Meta;

const Template: Story<MenuCardProps> = (args) => <MenuCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Card Title',
  img: cardBg,
};
