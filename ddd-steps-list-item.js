/**
 * Copyright 2025 N1shil
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css, LitElement } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-steps-list-item`
 * 
 * @element ddd-steps-list-item
 */
export class DddStepsListItem extends DDDSuper(LitElement) {
  static get tag() {
    return "ddd-steps-list-item";
  }

  static get properties() {
    return {
      title: { type: String },
      step: { type: Number },
      dddPrimary: { type: String, attribute: "ddd-primary" },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.step = 0;
    this.dddPrimary = "5";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-3);
          border-left: 4px solid var(--ddd-primary-5, blue);
          background-color: var(--ddd-theme-accent);
          border-radius: var(--ddd-radius-md);
        }

        .header {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }

        .step-circle {
          width: 32px;
          height: 32px;
          background-color: var(--ddd-primary-5, blue);
          color: white;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: var(--ddd-font-size-s);
        }

        .title-text {
          font-size: var(--ddd-font-size-l);
          font-weight: bold;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="header">
          <div
            class="step-circle"
            style="background-color: var(--ddd-primary-${this.dddPrimary}, blue);"
          >
            ${this.step}
          </div>
          <div class="title-text">${this.title}</div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(DddStepsListItem.tag, DddStepsListItem);
