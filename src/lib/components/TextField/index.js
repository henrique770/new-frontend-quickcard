import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function TextFieldComponent({ ...props }) {
  return <S.Input {...props} />;
}

TextFieldComponent.propTypes = {
  /**
   This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the specification.
------------------------------
   */
  autoComplete: PropTypes.string,
  /**
   * The content of the component.
   * ------------------------------
   */
  autoFocus: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * ------------------------------
   */
  classes: PropTypes.objectOf(PropTypes.object),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * ------------------------------
   */
  color: PropTypes.string,
  /**
   * The default value of the input element.
   * ------------------------------
   */
  defaultValue: PropTypes.objectOf(PropTypes.any),
  /**
   * If true, the input element will be disabled.
   * ------------------------------
   */
  disabled: PropTypes.bool,
  /**
   * If true, the input element will be disabled.
   * ------------------------------
   */
  error: PropTypes.bool,
  /**
   * Props applied to the FormHelperText element.
   * ------------------------------
   */
  FormHelperTextProps: PropTypes.objectOf(PropTypes.object),
  /**
   * If true, the input will take up the full width of its container.
   * ------------------------------
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   * ------------------------------
   */
  helperText: PropTypes.node,
  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   * ------------------------------
   */
  id: PropTypes.string,
  /**
   * Props applied to the InputLabel element.
   * ------------------------------
   */
  InputLabelProps: PropTypes.objectOf(PropTypes.object),
  /**
   * 	Props applied to the Input element. It will be a FilledInput, OutlinedInput or Input component depending on the variant prop value.
   * ------------------------------
   */
  inputProps: PropTypes.objectOf(PropTypes.object),
  /**
   * 	Pass a ref to the input element.
   * ------------------------------
   */
  inputRef: PropTypes.objectOf(PropTypes.ref),
  /**
   * 	The label content.
   * ------------------------------
   */
  label: PropTypes.node,
  /**
   * 	If dense or normal, will adjust vertical spacing of this and contained components.
   * can be:
   * 'dense'
     'none'
     'normal'
   * ------------------------------
   */
  margin: PropTypes.string,
  /**
   * 	If true, a textarea element will be rendered instead of an input.
   * ------------------------------
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the input element.
   * ------------------------------
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is changed.

    Signature:
    function(event: object) => void
    event: The event source of the callback. You can pull out the new value by accessing event.target.value (string).
   * ------------------------------
   */
  onChange: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   * ------------------------------
   */
  placeholder: PropTypes.string,
  /**
   * 	If true, the label is displayed as required and the input element` will be required.
   * ------------------------------
   */
  required: PropTypes.bool,
  /**
   * 	Number of rows to display when multiline option is set to true.
   * ------------------------------
   */
  rows: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * 	Maximum number of rows to display when multiline option is set to true.
   * ------------------------------
   */
  rowsMax: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * 	Render a Select element while passing the Input element to Select as input parameter. If this option is set you must pass the options of the select as children.
   * ------------------------------
   */
  select: PropTypes.bool,
  /**
   * 	Props applied to the Select element.
   * ------------------------------
   */
  SelectProps: PropTypes.objectOf(PropTypes.object),
  /**
   * 	The size of the text field.
   * can be:
   * 'medium'
     'small'
   * ------------------------------
   */
  size: PropTypes.string,
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   * ------------------------------
   */
  type: PropTypes.string,
  /**
   * The value of the input element, required for a controlled component.
   * ------------------------------
   */
  value: PropTypes.objectOf(PropTypes.any),
  /**
   * The variant to use.
   * can be:
   * 	'filled'
     'outlined'
     'standard'
   * ------------------------------
   */
  variant: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
