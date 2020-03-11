import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {

  onChange (e) {
    const { options, value } = e.target;
    let newValue;

    if (this.props.multiple) {
      newValue = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) newValue.push(options[i].value);
      }
    } else {
      newValue = value;
    }

    this.props.onChange(newValue);
  }

  renderOption (option, index) {
    return <option value={option[1]} key={index}>{ option[0] }</option>
  }

  render () {
    const { options, value, ...props } = this.props;

    return (
      <select
        { ...props }
        value={ Array.isArray(value) && !this.props.multiple ? value[0] : value }
        onChange={ this.onChange.bind(this) }
      >
        { options && options.map(this.renderOption) }
      </select>
    )
  }
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

export default SelectInput;