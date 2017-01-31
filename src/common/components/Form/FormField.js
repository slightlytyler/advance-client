import cx from 'classnames';
import { capitalize } from 'lodash/fp';
import React, { PropTypes } from 'react';
import { Field as FormalField } from 'react-formal';

const FormField = ({ className, floatingLabelText, name, ...props }) => (
  <FormalField
    {...props}
    className={cx('FormField', className)}
    floatingLabelText={floatingLabelText || capitalize(name)}
    name={name}
  />
);

FormField.propTypes = {
  className: PropTypes.string,
  floatingLabelText: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FormField.defaultProps = {
  className: undefined,
  floatingLabelText: undefined,
};

FormField.componentName = 'Field';

export default FormField;