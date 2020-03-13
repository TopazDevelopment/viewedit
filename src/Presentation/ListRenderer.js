import PropTypes from 'prop-types';

export const ListRenderer = props => {
  if (Array.isArray(props.children)) {
    return props.children.map(props.lookup).join(', ');
  }
  return props.children || null;
};

ListRenderer.propTypes = {
  lookup: PropTypes.func,
};

ListRenderer.defaultProps = {
  lookup: item => item,
};