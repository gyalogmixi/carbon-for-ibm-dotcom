/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import BXSideNavLink from '@carbon/carbon-web-components/es/components/ui-shell/side-nav-link.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './masthead.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Masthead left nav item.
 *
 * @element dds-left-nav-item
 */
@customElement(`${ddsPrefix}-left-nav-item`)
class DDSLeftNavItem extends BXSideNavLink {
  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSLeftNavItem;
