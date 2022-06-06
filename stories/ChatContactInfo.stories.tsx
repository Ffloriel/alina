import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatContactInfo, ChatContactInfoProps } from '../components/ChatContactInfo';


export default {
  title: 'Example/ChatContactInfo',
  component: ChatContactInfo,
} as ComponentMeta<typeof ChatContactInfo>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChatContactInfo> = (args) => <ChatContactInfo {...args} />;

export const Primary: { args: ChatContactInfoProps} = Template.bind({});
Primary.args = {
  name: 'Jean-Pierre',
  description: 'The most French guy you will ever meet',
  isActive: true
};
