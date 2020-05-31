import * as Fluent from '@fluentui/react';
import React from 'react';
import { Choice } from './choice_group';
import { B, bond, S, telesync } from './telesync';

/**
 * Create a dropdown.
 *
 * A dropdown is a list in which the selected item is always visible, and the others are visible on demand by clicking
 * a drop-down button. They are used to simplify the design and make a choice within the UI. When closed, only the
 * selected item is visible. When users click the drop-down button, all the options become visible.
 *
 * To change the value, users open the list and click another value or use the arrow keys (up and down) to
 * select a new value.
 *
 * Note: Use either the 'value' parameter or the 'values' parameter. Setting the 'values' parameter renders a
 * multi-select dropdown.
 */
export interface Dropdown {
  /** An identifying name for this component. */
  name: S
  /** Text to be displayed alongside the component. */
  label?: S
  /** A string that provides a brief hint to the user as to what kind of information is expected in the field. */
  placeholder?: S
  /** The name of the selected choice. */
  value?: S
  /** The names of the selected choices. If this parameter is set, multiple selections will be allowed. */
  values?: S[]
  /** The choices to be presented. */
  choices?: Choice[]
  /** True if this is a required field. */
  required?: B
  /** True if this field is disabled. */
  disabled?: B
  /** True if the form should be submitted when the dropdown value changes. */
  trigger?: B
  /** An optional tooltip message displayed when a user clicks the help icon to the right of the component. */
  tooltip?: S
}

export const
  XDropdown = bond(({ model: m }: { model: Dropdown }) => {
    const isMultivalued = !!m.values
    telesync.args[m.name] = isMultivalued
      ? (m.values || [])
      : (m.value || null)

    const
      selection = isMultivalued ? new Set<S>(m.values) : null,
      options = (m.choices || []).map(({ name, label, disabled }): Fluent.IDropdownOption => ({ key: name, text: label || name, disabled })),
      onChange = (_e?: React.FormEvent<HTMLElement>, option?: Fluent.IDropdownOption) => {
        if (option) {
          const name = option.key as S
          if (isMultivalued && selection !== null) {
            if (option.selected) {
              selection.add(name)
            } else {
              selection.delete(name)
            }
            telesync.args[m.name] = Array.from(selection)
          } else {
            telesync.args[m.name] = name
          }
        }
        if (m.trigger) telesync.sync()
      },
      render = () =>
        isMultivalued
          ? (
            <Fluent.Dropdown
              data-test={m.name}
              label={m.label}
              placeholder={m.placeholder}
              options={options}
              required={m.required}
              disabled={m.disabled}
              multiSelect
              defaultSelectedKeys={m.values}
              onChange={onChange}
            />
          )
          : (
            <Fluent.Dropdown
              data-test={m.name}
              label={m.label}
              placeholder={m.placeholder}
              options={options}
              required={m.required}
              disabled={m.disabled}
              defaultSelectedKey={m.value}
              onChange={onChange}
            />
          )

    return { render }
  })