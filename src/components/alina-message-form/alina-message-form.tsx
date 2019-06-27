import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'alina-message-form',
  styleUrl: 'alina-message-form.css',
  shadow: true
})
export class AlinaMessageForm {

  @Prop() avatarSrc: string;
  @Prop() avatarAlt: string;

  resize(event: ClipboardEvent | UIEvent) {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
  }

  render() {
    return (
      <div class="chat-enter-new-message-section">
        <div class="box-new-message-container">
          <div class="new-message-profile-picture-container">
            <img class="new-message-profile-picture" src={this.avatarSrc} alt={this.avatarAlt} />
          </div>
          <textarea
            class="input-new-message"
            auto-resize="auto-resize"
            placeholder="Type something..."
            onChange={(event: UIEvent) => this.resize(event)}
            onCut={(event: ClipboardEvent) => this.resize(event)}
            onPaste={(event: ClipboardEvent) => this.resize(event)}
            onDrop={(event: UIEvent) => this.resize(event)}
            onKeyDown={(event: UIEvent) => this.resize(event)}
          ></textarea>
          <div class="bottom-buttons-container">
            <div class="media-buttons">
              <button class="media-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17">
                  <g fill="none" fill-rule="evenodd" opacity=".3" transform="translate(-7 -7)">
                    <g stroke="#000" stroke-width="2" transform="translate(8 8)">
                      <path stroke-linecap="square" d="M5.71098724e-13,2.00585866 C5.71098724e-13,0.898053512 0.897060126,1.95399252e-14 2.00585866,1.95399252e-14 L11.9941413,1.95399252e-14 C13.1019465,1.95399252e-14 14,0.897060126 14,2.00585866 L14,11.9941413 C14,13.1019465 13.1029399,14 11.9941413,14 L2.00585866,14 C0.898053512,14 5.71098724e-13,13.1029399 5.71098724e-13,11.9941413 L5.71098724e-13,2.00585866 Z" />
                      <polyline stroke-linecap="round" stroke-linejoin="round" points="1 12.071 4.515 8 9.071 14.071" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9,7 C7.89513043,7 7,6.10469565 7,5 C7,3.89530435 7.89513043,3 9,3 C10.1043478,3 11,3.89530435 11,5 C11,6.10469565 10.1043478,7 9,7 Z" />
                    </g>
                    <rect width="30" height="29.583" />
                  </g>
                </svg>
              </button>
              <button class="media-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <g fill="none" fill-rule="evenodd" opacity=".3" transform="translate(-7 -7)">
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5074627,17.3333333 L15.5074627,11.8181818 C15.5074627,10.7672812 15.3720597,9.96002821 14.9701493,9.27272727 C14.5726716,8.47414123 13.8024328,8 12.8208955,8 C11.053,8.00014103 10,9.42185957 10,11.8181818 L10,17.3333333 C10,19.8910446 12.0333284,22 14.5671642,22 C16.9716418,22 19,19.8910446 19,17.3333333 L19,8.98989899" transform="rotate(45 14.5 15)" />
                    <rect width="30" height="30" />
                  </g>
                </svg>
              </button>

              {/* <img class="media-button" src="/img/icon-link.svg" />
              <img class="media-button" src="/img/icon-location.svg" />
              <img class="media-button" src="/img/icon-emoji.svg" /> */}
            </div>
            <div class="send-button-container">
              <svg class="send-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <defs>
                  <filter id="icon-add-a" width="233.3%" height="233.3%" x="-66.7%" y="-33.3%" filterUnits="objectBoundingBox">
                    <feOffset dy="20" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="10" />
                    <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" />
                    <feMerge>
                      <feMergeNode in="shadowMatrixOuter1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g fill="none" fill-rule="evenodd" filter="url(#icon-add-a)">
                  <g stroke="#FFF" stroke-linecap="round" stroke-width="2" transform="translate(9 9)">
                    <path d="M6,0 L6,12" />
                    <path d="M6,0 L6,12" transform="rotate(90 6 6)" />
                  </g>
                  <rect width="30" height="30" />
                </g>
              </svg>

              <div class="send-text">Send</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}