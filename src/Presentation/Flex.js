import styled from 'styled-components';
import { defaultProp } from '../Theme';

function getDirection (key) {
  return props => props.direction && props.direction === 'reverse' ? `${key}-reverse` : key;
}

export const FlexParent = styled.div`
  display: flex;
  justify-content: ${ defaultProp('justifyContent', 'flex-start') };
  flex-wrap: ${ defaultProp('flexWrap', 'nowrap') };
  align-items: ${ defaultProp('align', 'flex-start') };
`;

export const FlexRow = styled(FlexParent)`
  flex-direction: ${ getDirection('row') };
`;

export const FlexCol = styled(FlexParent)`
  flex-direction: ${ getDirection('column') };
`;

export const FlexChild = (component) => styled(component)`
  order: ${ defaultProp('order', 0) };
  flex-grow: ${ defaultProp('grow', 0) };
  flex-shrink: ${ defaultProp('shrink', 0) };
  align-self: ${ defaultProp('align', 'auto') };
`;