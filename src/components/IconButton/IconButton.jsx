import PropTypes from 'prop-types';
import { ButtonStyled } from './IconButton.styled';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <ButtonStyled type="button" onClick={onClick} {...allyProps}>
    {children}
  </ButtonStyled>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propsTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
