import React, { useEffect } from "react";

export type ChatEnterNewMessageProps = {
  avatarSrc: string;
  avatarAlt: string;
};

export const ChatEnterNewMessage: React.FunctionComponent<ChatEnterNewMessageProps> = function ({
  avatarAlt,
  avatarSrc,
}) {
  useEffect(() => {
    (function() {
      function domReady(f) {
        /in/.test(document.readyState) ? setTimeout(domReady, 16, f) : f();
      }

      function resize(event) {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
      }
      /* 0-timeout to get the already changed text */
      function delayedResize(event) {
        window.setTimeout(resize, 0, event);
      }

      domReady(function() {
        var textareas = document.querySelectorAll("textarea[auto-resize]");

        for (var i = 0, l = textareas.length; i < l; ++i) {
          var el = textareas.item(i);

          el.addEventListener("change", resize, false);
          el.addEventListener("cut", delayedResize, false);
          el.addEventListener("paste", delayedResize, false);
          el.addEventListener("drop", delayedResize, false);
          el.addEventListener("keydown", delayedResize, false);
        }
      });
    })();
  }, [])
  return (
    <>
      <div className="chat-enter-new-message-section">
        <div className="box-new-message-container">
          <div className="new-message-profile-picture-container">
            <img
              className="new-message-profile-picture"
              src={avatarSrc}
              alt={avatarAlt}
            />
          </div>
          <textarea
            className="input-new-message"
            auto-resize="auto-resize"
            placeholder="Type something..."
          ></textarea>
          <div className="bottom-buttons-container">
            <div className="media-buttons">
              <img className="media-button" src="/images/icon-image.svg" />
              <img className="media-button" src="/images/icon-attachment.svg" />
              <img className="media-button" src="/images/icon-link.svg" />
              <img className="media-button" src="/images/icon-location.svg" />
              <img className="media-button" src="/images/icon-emoji.svg" />
            </div>
            <div className="send-button-container">
              <img className="send-icon" src="/images/icon-add.svg" />
              <div className="send-text">Send</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .chat-enter-new-message-section {
          position: relative;
          width: 100%;
          padding: 30px 100px;
        }
        .new-message-profile-picture-container {
          position: absolute;
          left: -60px;
          top: 0;
        }
        .new-message-profile-picture {
          border-radius: 50%;
          height: 40px;
          width: 40px;
        }
        .box-new-message-container {
          position: relative;
          width: 100%;
          min-height: 120px;
          box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }
        .input-new-message {
          outline: none;
          border: none;
          padding: 23px 30px 10px 30px;
          height: auto;
          transition: height 2s;
          resize: none;
        }
        .bottom-buttons-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          padding: 10px 10px 10px 20px;
        }
        .media-button {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          cursor: pointer;
          padding: 7px;
        }
        .media-button:hover {
          filter: grayscale(100%);
        }
        .send-button-container {
          width: 124px;
          height: 50px;
          background-color: #4f46b3;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 2px;
          cursor: pointer;
          transition: box-shadow 0.25s;
        }
        .send-button-container:hover {
          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
        }
        .send-icon {
          margin-left: 20px;
          margin-right: 10px;
          height: 30px;
          width: 30px;
        }
        .send-text {
          font-family: Bariol;
          font-weight: bold;
          font-size: 0.875rem;
          color: #fff;
        }
      `}</style>
    </>
  );
};
