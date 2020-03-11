import React from 'react';
import { Page } from './App.styles';
import { NumberInput, SelectInput, TextInput } from './components/Inputs';
import ViewEdit from './Presentation/ViewEdit';
import { ListRenderer } from './Presentation/ListRenderer';
import { FlexRow } from './Presentation/Flex';

class App extends React.Component {
  state = {
    item: '',
    items: ['1'],
    string: 'Test',
    value: 123,

    selectItems: [
      ['one', '1'],
      ['two', '2'],
      ['three', '3'],
      ['four', '4'],
    ]
  };

  updateState (key) {
    return (val) => {
      this.setState({ [key]: val })
    };
  }

  renderDefaultInputs () {
    return (
      <FlexRow justifyContent="space-around">
        <NumberInput
          value={ this.state.value }
          onChange={ this.updateState('value').bind(this) }
          error={ isNaN(this.state.value) }
        />
        <TextInput
          value={ this.state.string }
          onChange={ this.updateState('string').bind(this) }
          error={ !this.state.string || this.state.string === '' }
          warning={ /^\W+$/.test(this.state.string) }
        />
        <SelectInput
          multiple
          options={ this.state.selectItems }
          value={ this.state.items }
          onChange={ this.updateState('items').bind(this) }
        />
        <SelectInput
          onChange={ this.updateState('item').bind(this) }
          value={ this.state.item }
          options={ this.state.selectItems }
        />
      </FlexRow>
    );
  }

  renderViewEdits() {
    return (
      <FlexRow justifyContent="space-around">
        <ViewEdit
          editComponent={ NumberInput }
          editComponentProps={
            {
              onChange: this.updateState('value').bind(this),
              value: this.state.value,
            }
          }
        />
        <ViewEdit
          editComponent={ TextInput }
          editComponentProps={
            {
              onChange: this.updateState('string').bind(this),
              value: this.state.string,
            }
          }
        />
        <ViewEdit
          editComponent={ SelectInput }
          editComponentProps={
            {
              onChange: this.updateState('items').bind(this),
              value: this.state.items,
              options: this.state.selectItems,
              multiple: true,
            }
          }
          viewComponent={ ListRenderer }
          viewComponentProps={
            {
              options: this.state.selectItems,
            }
          }
        />
        <ViewEdit
          editComponent={ SelectInput }
          editComponentProps={
            {
              onChange: this.updateState('item').bind(this),
              value: this.state.item,
              options: this.state.selectItems,
            }
          }
          viewComponent={ ListRenderer }
          viewComponentProps={
            {
              options: this.state.selectItems,
            }
          }
        />
      </FlexRow>
    )
  }

  render () {
    return (
      <Page>
        { this.renderDefaultInputs() }
        <br /><br /><br />
        { this.renderViewEdits() }
      </Page>
    )
  }
}

export default App;
