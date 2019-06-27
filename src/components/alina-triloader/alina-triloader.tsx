import { Component, h } from '@stencil/core';

@Component({
  tag: 'alina-triloader',
  styleUrl: 'alina-triloader.css',
  shadow: true
})
export class AlinaTriloader {
  render() {
    return (
      <div class="loader">
        <div class="outer"></div>
        <div class="middle"></div>
        <div class="inner"></div>
      </div>
    )
  }
}