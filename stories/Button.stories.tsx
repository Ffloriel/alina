// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button, ButtonProps } from '../components/Button';


export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xlarge',
  text: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Button',
};

export const Standard = Template.bind({})
Standard.args = {
  size: 'standard',
  text: 'Button'
}

