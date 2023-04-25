/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { ifDefined } from 'lit/directives/if-defined.js';
import textNullable from '../../../.storybook/knob-text-nullable';
import { prefix } from '../../globals/settings';
import { DROPDOWN_SIZE, DROPDOWN_TYPE } from './multi-select';
import './multi-select-item';
import storyDocs from './multi-select-story.mdx';

const sizes = {
  'Regular size': null,
  [`Small size (${DROPDOWN_SIZE.SMALL})`]: DROPDOWN_SIZE.SMALL,
  [`Extra large size (${DROPDOWN_SIZE.LARGE})`]: DROPDOWN_SIZE.LARGE,
};

const types = {
  Regular: null,
  [`Inline (${DROPDOWN_TYPE.INLINE})`]: DROPDOWN_TYPE.INLINE,
};

export const Default = (args) => {
  const {
    clearSelectionLabel,
    colorScheme,
    disabled,
    helperText,
    invalid,
    labelText,
    open,
    size,
    toggleLabelClosed,
    toggleLabelOpen,
    triggerContent,
    type,
    validityMessage,
    value,
    disableSelection,
    disableToggle,
    onBeforeSelect,
    onBeforeToggle,
    onSelect,
    onToggle,
  } = args?.[`${prefix}-multi-select`] ?? {};
  const handleBeforeSelect = (event: CustomEvent) => {
    if (onBeforeSelect) {
      onBeforeSelect(event);
    }
    if (disableSelection) {
      event.preventDefault();
    }
  };
  const handleBeforeToggle = (event: CustomEvent) => {
    if (onBeforeToggle) {
      onBeforeToggle(event);
    }
    if (disableToggle) {
      event.preventDefault();
    }
  };
  return html`
    <cds-multi-select
      color-scheme="${ifDefined(colorScheme)}"
      ?disabled=${disabled}
      ?invalid=${invalid}
      ?open=${open}
      clear-selection-label=${ifDefined(clearSelectionLabel)}
      helper-text=${ifDefined(helperText)}
      label-text=${ifDefined(labelText)}
      size=${ifDefined(size)}
      toggle-label-closed=${ifDefined(toggleLabelClosed)}
      toggle-label-open=${ifDefined(toggleLabelOpen)}
      trigger-content=${ifDefined(triggerContent)}
      type=${ifDefined(type)}
      validity-message=${ifDefined(validityMessage)}
      value="${ifDefined(value)}"
      @cds-multi-select-beingselected=${handleBeforeSelect}
      @cds-multi-select-beingtoggled=${handleBeforeToggle}
      @cds-multi-select-selected=${onSelect}
      @cds-multi-select-toggled=${onToggle}>
      <cds-multi-select-item value="example"
        >An example option that is really long to show what should be done to
        handle long text</cds-multi-select-item
      >
      <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
      <cds-multi-select-item value="cloudFoundry"
        >Option 2</cds-multi-select-item
      >
      <cds-multi-select-item value="staging">Option 3</cds-multi-select-item>
      <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
      <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
    </cds-multi-select>
  `;
};

Default.decorators = [
  (story) => html` <div style="width:300px">${story()}</div> `,
];

Default.storyName = 'Default';

export const Filterable = (args) => {
  const {
    clearSelectionLabel,
    colorScheme,
    disabled,
    helperText,
    invalid,
    labelText,
    open,
    size,
    toggleLabelClosed,
    toggleLabelOpen,
    triggerContent,
    type,
    validityMessage,
    value,
    disableSelection,
    disableToggle,
    onBeforeSelect,
    onBeforeToggle,
    onSelect,
    onToggle,
  } = args?.[`${prefix}-multi-select`] ?? {};
  const handleBeforeSelect = (event: CustomEvent) => {
    if (onBeforeSelect) {
      onBeforeSelect(event);
    }
    if (disableSelection) {
      event.preventDefault();
    }
  };
  const handleBeforeToggle = (event: CustomEvent) => {
    if (onBeforeToggle) {
      onBeforeToggle(event);
    }
    if (disableToggle) {
      event.preventDefault();
    }
  };
  return html`
    <cds-multi-select
      filterable="true"
      color-scheme="${ifDefined(colorScheme)}"
      ?disabled=${disabled}
      ?invalid=${invalid}
      ?open=${open}
      clear-selection-label=${ifDefined(clearSelectionLabel)}
      helper-text=${ifDefined(helperText)}
      label-text=${ifDefined(labelText)}
      size=${ifDefined(size)}
      toggle-label-closed=${ifDefined(toggleLabelClosed)}
      toggle-label-open=${ifDefined(toggleLabelOpen)}
      trigger-content=${ifDefined(triggerContent)}
      type=${ifDefined(type)}
      validity-message=${ifDefined(validityMessage)}
      value="${ifDefined(value)}"
      @cds-multi-select-beingselected=${handleBeforeSelect}
      @cds-multi-select-beingtoggled=${handleBeforeToggle}
      @cds-multi-select-selected=${onSelect}
      @cds-multi-select-toggled=${onToggle}>
      <cds-multi-select-item value="example"
        >An example option that is really long to show what should be done to
        handle long text</cds-multi-select-item
      >
      <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
      <cds-multi-select-item value="cloudFoundry"
        >Option 2</cds-multi-select-item
      >
      <cds-multi-select-item value="staging">Option 3</cds-multi-select-item>
      <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
      <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
    </cds-multi-select>
  `;
};

Filterable.decorators = [
  (story) => html` <div style="width:300px">${story()}</div> `,
];

Filterable.storyName = 'Filterable';

export default {
  title: 'Components/Multi select',
  parameters: {
    ...storyDocs.parameters,
    knobs: {
      [`${prefix}-multi-select`]: () => ({
        clearSelectionLabel: textNullable(
          'a11y label for the icon to clear selection (clear-selection-label)',
          ''
        ),
        disabled: boolean('Disabled (disabled)', false),
        helperText: textNullable(
          'Helper text (helper-text)',
          'Optional helper text'
        ),
        invalid: boolean('Show invalid state  (invalid)', false),
        labelText: textNullable('Label text (label-text)', 'Multiselect title'),
        open: boolean('Open (open)', false),
        toggleLabelClosed: textNullable(
          'a11y label for the UI indicating the closed state (toggle-label-closed)',
          ''
        ),
        toggleLabelOpen: textNullable(
          'a11y label for the UI indicating the closed state (toggle-label-open)',
          ''
        ),
        triggerContent: textNullable(
          'The default content of the trigger button (trigger-content)',
          'Select items'
        ),
        size: select('Dropdown size (size)', sizes, null),
        type: select('UI type (type)', types, null),
        validityMessage: textNullable(
          'The validity message (validity-message)',
          ''
        ),
        disableSelection: boolean(
          `Disable user-initiated selection change (Call event.preventDefault() in ${prefix}-multi-select-beingselected event)`,
          false
        ),
        disableToggle: boolean(
          `Disable user-initiated toggle of open state (Call event.preventDefault() in ${prefix}-multi-select-beingtoggled event)`,
          false
        ),
        onBeforeSelect: action(`${prefix}-multi-select-beingselected`),
        onBeforeToggle: action(`${prefix}-multi-select-beingtoggled`),
        onSelect: action(`${prefix}-multi-select-selected`),
        onToggle: action(`${prefix}-multi-select-toggled`),
      }),
    },
  },
};
