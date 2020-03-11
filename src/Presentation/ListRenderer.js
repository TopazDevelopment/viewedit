export const ListRenderer = props => {
  if (Array.isArray(props.children)) return props.children.join(', ');
  return props.children || null;
};