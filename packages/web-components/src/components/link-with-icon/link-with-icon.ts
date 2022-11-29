/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, customElement, TemplateResult, property } from 'lit-element';
import BXLink, {
  LINK_SIZE,
} from '@carbon/carbon-web-components/es/components/link/link.js';
import settings from 'carbon-components/es/globals/js/settings.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import { ICON_PLACEMENT } from '../../globals/defs';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './link-with-icon.scss';

export { ICON_PLACEMENT };

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Link with icon.
 *
 * @element dds-link-with-icon
 * @slot icon - The icon.
 * @slot icon-left - The CTA icon to place at the left.
 */
@customElement(`${ddsPrefix}-link-with-icon`)
class DDSLinkWithIcon extends StableSelectorMixin(BXLink) {
  /**
   * Icon placement(right (default) | left)
   */
  @property({ attribute: 'icon-placement', reflect: true })
  iconPlacement = ICON_PLACEMENT.RIGHT;

  /**
   * Positions the icon inline with text when `true`
   */
  @property({ type: Boolean })
  iconInline = true;

  /**
   * Property that specifies the link to use size large
   *
   * @internal
   */
  @property()
  size = LINK_SIZE.LARGE;

  /**
   * @returns The main content.
   */
  // eslint-disable-next-line class-methods-use-this
  protected _renderContent(): TemplateResult | string | void {
    return html` <span><slot></slot></span> `;
  }

  /**
   * @returns The icon content.
   */
  // eslint-disable-next-line class-methods-use-this
  protected _renderIcon(): TemplateResult | string | void {
    return html` <slot name="icon"></slot> `;
  }

  protected _renderInner() {
    return html` ${this._renderContent()}${this._renderIcon()} `;
  }

  updated() {
    const { iconInline, iconPlacement, _linkNode: linkNode } = this;
    if (linkNode) {
      linkNode.classList.add(`${prefix}--link-with-icon`);
      linkNode.classList.toggle(
        `${prefix}--link-with-icon__icon-${ICON_PLACEMENT.LEFT}`,
        iconPlacement === ICON_PLACEMENT.LEFT
      );
      linkNode.classList.toggle(
        `${prefix}--link-with-icon__icon-${ICON_PLACEMENT.RIGHT}`,
        iconPlacement === ICON_PLACEMENT.RIGHT
      );

      if (iconInline && iconPlacement === ICON_PLACEMENT.RIGHT) {
        linkNode.classList.add(`${prefix}--link-with-icon--inline-icon`);
      }
    }
  }

  static get stableSelector() {
    return `${ddsPrefix}--link-with-icon`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSLinkWithIcon;
