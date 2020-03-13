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

  getKeyValuePair (option) {
    if (option.hasOwnProperty('key') && option.hasOwnProperty('value')) {
      return option;
    }

    let key, value;

    if (Array.isArray(option)) {
      key = option[0];
      value = option[1];
    } else {
      key = option;
      value = option;
    }

    return { key, value }
  }

  renderOption (option, index) {
    const keyValue = this.getKeyValuePair(option);
    return <option key={index} value={ keyValue.key }>{ keyValue.value }</option>
  }

  render () {
    const { options, value, ...props } = this.props;

    return (
      <select
        { ...props }
        value={ Array.isArray(value) && !this.props.multiple ? value[0] : value }
        onChange={ this.onChange.bind(this) }
      >
        { options && options.map(this.renderOption.bind(this)) }
      </select>
    )
  }
}

SelectInput.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
      value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    })),
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

export default SelectInput;