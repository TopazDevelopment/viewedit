import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './ViewEdit.styles';
import Button from './Button';

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

  addInput () {
    this.props.editComponentProps.onChange([
      ...this.props.editComponentProps.value,
      undefined
    ])
  }

  updateValue (index) {
    return (e) => {
      const val = [...this.props.editComponentProps.value];
      val.splice(index, 1, e);
      this.props.editComponentProps.onChange(val);
    }
  }

  renderMultiple () {
    return (
      <Container>
        { this.props.editComponentProps.value.map((val, key) => {
          const props = {
            onChange: this.updateValue(key).bind(this),
            value: val,
          };
          return <ViewEdit
            key={ key }
            editComponent={ this.props.editComponent }
            editComponentProps={ props }
          />
        }) }

        <Button
          icon="plus"
          label="Add"
          onClick={ this.addInput.bind(this) }
        />
      </Container>
    );
  }

  render () {
    if (this.props.multiple) return this.renderMultiple();

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
    value: PropTypes.any,
  }),

  viewComponent: PropTypes.any,
  viewComponentProps: PropTypes.object,

  multiple: PropTypes.bool,
};

export default ViewEdit;