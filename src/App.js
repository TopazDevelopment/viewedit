import React from 'react';
import { Page } from './App.styles';
import { NumberInput, SelectInput, TextInput } from './components/Inputs';
import ViewEdit from './Presentation/ViewEdit';
import { ListRenderer } from './Presentation/ListRenderer';
import { FlexRow } from './Presentation/Flex';
import Icon from './Presentation/Icon';

class App extends React.Component {
  state = {
    item: '',
    items: ['1'],
    string: 'Test',
    value: 123,
    multiple: [],

    selectItems: [
      ['1', 'one'],
      ['2', 'two'],
      ['3', 'three'],
      ['4', 'four'],
    ],

    selectItemStrings: [
      'one', 'two', 'three', 'four', 'five'
    ],

    selectItemObjects: [
      {key: 1, value: 'test'},
      {key: 2, value: 'testing'},
      {key: 3, value: 'tester'},
    ]
  };

  updateState (key) {
    return (val) => {
      console.log('update app state', val);
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
          multiple
          options={ this.state.selectItemObjects }
          value={ this.state.items }
          onChange={ this.updateState('items').bind(this) }
        />
        <SelectInput
          onChange={ this.updateState('item').bind(this) }
          value={ this.state.item }
          options={ this.state.selectItemStrings }
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
              lookup: val => {
                console.debug('val', val);
                return this.state.selectItems.find(i => {
                  console.debug('i', i);
                  return i[0] === val;
                })[1];
              }
            }
          }
        />
        <ViewEdit
          editComponent={ SelectInput }
          editComponentProps={
            {
              onChange: this.updateState('item').bind(this),
              value: this.state.item,
              options: this.state.selectItemObjects,
            }
          }
          viewComponent={ ListRenderer }
          viewComponentProps={
            {
              options: this.state.selectItemObjects,
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
        <br />
        <ViewEdit
          multiple
          editComponent={ NumberInput }
          editComponentProps={ {
            onChange: this.updateState('multiple').bind(this),
            value: this.state.multiple,
          } }

        />
      </Page>
    )
  }
}

export default App;
