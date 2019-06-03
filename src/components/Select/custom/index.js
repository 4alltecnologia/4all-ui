import React, { Fragment } from 'react';
import { components } from 'react-select';
import IconCheck from '../../Icons/Check';
import IconArrow from '../../Icons/Arrow';
import * as stylesSelect from '../style';

export const Option = (option, customStyle) => {
  return (
    <components.Option {...option}>
      <label>{option.label}</label>
      {(option.isSelected) ? (
        <IconCheck color={customStyle.optionIconColor} />
      ) : null }
    </components.Option>
  );
};

export const DropdownIndicator = (props, customStyle) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <IconArrow color={customStyle.iconColor} />
    </components.DropdownIndicator>
  );
};

export const MultiValueLabel = (props, formatLabel) => {
  /* eslint-disable */
  const options = props.selectProps.value;
  const currOption = props.data;
  return formatLabel ? (
    <components.MultiValueLabel id={`multi-value-${currOption.value}`} {...props}>
      {formatLabel(currOption, options)}
    </components.MultiValueLabel>
  ) : (
    <Fragment>
      <components.MultiValueLabel id={`multi-value-${currOption.value}`} {...props} />
    </Fragment>
  );
  /* eslint-enable */
};

export const formatGroupLabel = data => (
  <div style={stylesSelect.groupStyles}>
    <span style={stylesSelect.GroupLabel}>{data.label}</span>
  </div>
);

export const ValueContainer = ({ children, ...props }) => (    // eslint-disable-line
  <components.ValueContainer {...props}>
    {children}
    <stylesSelect.QtdOptions className="multi-value-qtd-options" />
  </components.ValueContainer>
);
