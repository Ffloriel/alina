import clsx from "clsx";
import React from "react";

export type ChatMessageProps = {
  text: string;
  date: string;
  avatarSrc: string;
  author: string;
  fromUser?: boolean;
};

export const ChatMessage: React.FunctionComponent<ChatMessageProps> = function ({
  author,
  avatarSrc,
  date,
  fromUser,
  text,
}) {
  let classes = clsx("chat-message-wrapper", fromUser && "from-user");
  return (
    <>
      <div className={classes}>
        <div className="chat-message-container">
          <div className="chat-message-text">{text}</div>
          <div className="chat-message-date">{date}</div>
        </div>
        <img
          className="chat-message-profile-picture"
          src={avatarSrc}
          alt={author}
        />
      </div>
      <style jsx>{`
        .chat-message-wrapper {
          position: relative;
          align-self: flex-end;
          margin: 20px 100px;
        }
        .chat-message-wrapper.from-user {
          align-self: flex-start;
        }
        .chat-message-wrapper.from-user .chat-message-container {
          background-image: linear-gradient(-135deg, #4f46b3 0%, #613c7f 100%);
        }
        .chat-message-wrapper.from-user .chat-message-profile-picture {
          left: -60px;
          right: initial;
        }
        .chat-message-container {
          min-height: 90px;
          min-width: 343px;
          background: #4f46b3;
          border-radius: 2px;
          padding: 26px 30px 23px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }
        .chat-message-text {
          font-family: Bariol;
          color: #fff;
          font-size: 0.875rem;
          letter-spacing: -0.25px;
          line-height: 26px;
        }
        .chat-message-date {
          font-family: Bariol;
          color: #fff;
          font-size: 0.75rem;
          font-style: italic;
          opacity: 0.5;
        }
        .chat-message-profile-picture {
          position: absolute;
          top: 0;
          right: -60px;
          height: 40px;
          width: 40px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};
