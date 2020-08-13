import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// const Input: React.FC<InputProps> = () => (
// const Input: React.FC<InputProps> = props => (
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  // <Container>
  //   {/* <input type="text" /> */}
  //   <input {...props} />
  // </Container>
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
