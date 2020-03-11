import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ViewEdit.styles';

class ViewEdit extends Component {
  state = {
    editing: false,
  };

  toggle () {
    this.setState({ editing: !this.state.editing });
  }

  preventChildClick (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  renderComponent() {
    let result = null;
    if (this.state.editing) {
      result = this.renderEdit();
    } else if (this.props.viewComponent) {
      result = this.renderView();
    }
    return result;
  }

  renderEdit () {
    return (
      <this.props.editComponent
        autoFocus
        onClick={ this.preventChildClick }
        onBlur={ this.toggle.bind(this) }
        { ...this.props.editComponentProps }
      />
    )
  }

  renderView () {
    return (
      <this.props.viewComponent { ...this.props.viewComponentProps }>
        { this.props.editComponentProps.value }
      </this.props.viewComponent>
    );
  }

  renderValue () {
    return <>{ this.props.editComponentProps.value }</>;
  }

  render () {
    return (
      <Wrapper onClick={ this.toggle.bind(this) } isEditing={ this.state.editing }>
        { this.renderComponent() || this.renderValue() }
      </Wrapper>
    );
  }
}

ViewEdit.propTypes = {
  editComponent: PropTypes.any.isRequired,
  editComponentProps: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  }),

  viewComponent: PropTypes.any,
  viewComponentProps: PropTypes.object,
};

export default ViewEdit;