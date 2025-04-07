/**
 * Copyright 2025 N1shil
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class DddStepsList extends DDDSuper(LitElement) {
  static get tag() {
    return "ddd-steps-list";
  }

  static get properties() {
    return {
      dddPrimary: { type: String, attribute: "ddd-primary" }, // Added to support primary color
    };
  }

  constructor() {
    super();
    this.dddPrimary = "5";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
          background-color: var(--ddd-theme-accent);
          padding: var(--ddd-spacing-4);
        }

        .wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-4);
        }

        ::slotted(ddd-steps-list-item) {
          flex: 1 1 300px;
        }
      `,
    ];
  }

  firstUpdated() {
    super.firstUpdated();
    this.checkChildren();
    this.assignSteps();
  }

  checkChildren() {
    const children = Array.from(this.children);
    children.forEach((child) => {
      if (child.tagName.toLowerCase() !== "ddd-steps-list-item") {
        console.warn(`Invalid tag removed: <${child.tagName.toLowerCase()}>`);
        child.remove();
      }
    });
  }

  assignSteps() {
    const items = this.querySelectorAll("ddd-steps-list-item");
    items.forEach((el, i) => {
      el.setAttribute("step", i + 1);
      el.setAttribute("ddd-primary", this.dddPrimary);
    });
  }

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(DddStepsList.tag, DddStepsList);
