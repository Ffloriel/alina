import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatEnterNewMessage, ChatEnterNewMessageProps } from '../components/ChatEnterNewMessage';


export default {
  title: 'Example/ChatEnterNewMessage',
  component: ChatEnterNewMessage,
} as ComponentMeta<typeof ChatEnterNewMessage>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChatEnterNewMessage> = (args) => <ChatEnterNewMessage {...args} />;

export const Primary: { args: ChatEnterNewMessageProps} = Template.bind({});
Primary.args = {
  avatarSrc: 'images/avatar.png',
  avatarAlt: 'avatar'
};
