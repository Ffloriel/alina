import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'alina-chat-message',
  styleUrl: 'alina-chat-message.css',
  shadow: true
})
export class AlinaChatMessage {

  @Prop() text: string;
  @Prop() date: string;
  @Prop() author: string;
  @Prop() avatarSrc: string;
  @Prop({ attribute: 'from-user' }) isFromUser: boolean;

  render() {
    const className = this.isFromUser ? 'chat-message-wrapper from-user' : 'chat-message-wrapper';
    return (
      <div class={className}>
        <div class="chat-message-container">
          <div class="chat-message-text">{this.text}</div>
          <div class="chat-message-date">{this.date}</div>
        </div>
        <img class="chat-message-profile-picture" src={this.avatarSrc} alt={this.author} />
      </div>
    )
  }
}