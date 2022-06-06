import clsx from "clsx";
import React from "react";

export type ChatContactInfoProps = {
  /**
   * If the contact is active, online, or the main recipient.
   */
  isActive?: boolean;
  /**
   * Name of the contact.
   */
  name: string;
  /**
   * Description of the contact, or a one-line bio from the contact.
   */
  description: string;
};

/**
 * Chat Contact Information component.
 * Used at the top of a chat to display who is in the chat
 * 
 * @param param0 
 * @returns 
 */
export const ChatContactInfo: React.FunctionComponent<ChatContactInfoProps> = function ({
  isActive,
  name,
  description,
}) {
  let classes = clsx("chat-contact-info-container", !isActive && "inactive");
  return (
    <>
      <div className={classes}>
        <div className="chat-contact-info-name">{name}</div>
        <div className="chat-contact-info-description">{description}</div>
      </div>
      <style jsx>
        {`
          .chat-contact-info-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            height: 87px;
            width: 395px;
            margin-left: 100px;
          }
          .inactive {
            opacity: 0.2;
          }
          .chat-contact-info-name {
            font-family: Bariol;
            font-weight: bold;
            font-size: 3.125rem;
          }
          .chat-contact-info-description {
            font-family: Bariol;
            font-weight: bold;
            font-size: 1.25rem;
            color: rgba(0, 0, 0, 0.4);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 100%;
          }
        `}
      </style>
    </>
  );
};
