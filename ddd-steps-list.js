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
      dddprimary: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.dddprimary = "5";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-accent);
          padding: var(--ddd-spacing-4);
        }

        .wrapper {
          margin: var(--ddd-spacing-2);
        }
      `,
    ];
  }

  firstUpdated() {
    this.validateChildren();
    this.assignSteps();
  }

  validateChildren() {
    const slot = this.shadowRoot.querySelector("slot");
    const children = slot.assignedElements({ flatten: true });
    children.forEach((child) => {
      if (child.tagName.toLowerCase() !== "ddd-steps-list-item") {
        console.warn(`Removed invalid child <${child.tagName}>`);
        child.remove();
      }
    });
  }

  assignSteps() {
    const slot = this.shadowRoot.querySelector("slot");
    const items = slot.assignedElements({ flatten: true });
    items.forEach((el, index) => {
      el.setAttribute("step", index + 1);
      el.setAttribute("ddd-primary", this.dddprimary);
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
