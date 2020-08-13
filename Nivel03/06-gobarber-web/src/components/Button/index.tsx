import React, { ButtonHTMLAttributes } from 'react';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

// }
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// const Button: React.FC<ButtonProps> = () => (
// const Button: React.FC<ButtonProps> = props => (
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  // <button type="button">teste</button>
  // <button type="button" {...rest}>
  //   {/* teste */}
  //   {children}
  // </button>
  <Container type="button" {...rest}>
    {/* teste */}
    {children}
  </Container>
);

export default Button;
