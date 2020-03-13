import styled, { css } from 'styled-components';
import { border, ifProp, ifNotProp, getColorFromTheme, Colors } from '../Theme';
import { Input } from '../components/Inputs/index.styles';
import { transition } from '../Theme';
import { FlexRow } from './Flex';

const isNotEditing = css`
  ${ transition('border-color') };
  cursor: pointer;
  text-align: center;
  
  &:hover {
    border-bottom-color: ${ getColorFromTheme(Colors.Black) };
  }
`;

export const Wrapper = styled.div`
  border: 1px solid ${ ifProp('isEditing', 'transparent', getColorFromTheme(Colors.PrimaryColor)) };
  border-radius: 3px;
  padding: ${ ifProp('isEditing', 0, '2px 4px') };
  margin: 2px;
  min-height: 20px;
  min-width: 75px;
  ${ ifNotProp('isEditing', isNotEditing) };
  
  ${ Input } {
    border-color: ${ getColorFromTheme(Colors.Black) };
  }
`;

export const Container = styled(FlexRow)`
  ${ border(Colors.Black) };
  padding: 3px;
  align-items: baseline;
  
  > * {
    margin: auto 0;
  }
  
  > ${ Wrapper } {
    margin-right: 4px;
  }
`;
