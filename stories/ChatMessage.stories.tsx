import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatMessage, ChatMessageProps } from '../components/ChatMessage';


export default {
  title: 'Example/ChatMessage',
  component: ChatMessage,
} as ComponentMeta<typeof ChatMessage>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChatMessage> = (args) => <ChatMessage {...args} />;

export const Primary: { args: ChatMessageProps} = Template.bind({});
Primary.args = {
  avatarSrc: 'images/avatar.png',
  author: 'Jean-Pierre',
  date: '18:06 - Wednesday 5th 2022',
  text: 'Yo, what\'s up? I\'m thinking of going to Paris for a week-end in July, do you want to go with me?'
};
