/**
 * Copyright 2025 N1shil
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
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
      header: { type: String }, // Replacing title
      step: { type: Number },
      dddPrimary: { type: String, attribute: "ddd-primary" },
    };
  }

  constructor() {
    super();
    this.header = "";
    this.step = 0;
    this.dddPrimary = "5";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-default-white);
          border-left: 4px solid var(--ddd-primary-5);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-3);
          box-shadow: var(--ddd-boxShadow-sm);
          margin-bottom: var(--ddd-spacing-4);
        }

        .header {
          font-size: var(--ddd-font-size-l);
          font-weight: bold;
          margin-bottom: var(--ddd-spacing-2);
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }

        .step {
          width: 32px;
          height: 32px;
          background-color: var(--ddd-primary-5);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--ddd-font-size-s);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="header">
        <div class="step" style="background-color: var(--ddd-primary-${this.dddPrimary});">
          ${this.step}
        </div>
        ${this.header}
      </div>
      <slot></slot>
    `;
  }
}

customElements.define(DddStepsListItem.tag, DddStepsListItem);
