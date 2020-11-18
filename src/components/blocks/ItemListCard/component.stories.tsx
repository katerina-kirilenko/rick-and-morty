import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ItemListCard from 'components/blocks/ItemListCard';
import { ItemListCardProps } from './types';

export default {
  title: 'ItemListCard',
  component: ItemListCard,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ItemListCardProps> = (args) => <ItemListCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'ItemList',
  number: '1',
  hover: false,
};

export const Hover = Template.bind({});

Hover.args = {
  label: 'ItemList',
  number: '1',
  hover: true,
};
