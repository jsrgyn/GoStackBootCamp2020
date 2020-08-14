import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// const Input: React.FC<InputProps> = () => (
// const Input: React.FC<InputProps> = props => (
// const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // <Container>
  //   {/* <input type="text" /> */}
  //   <input {...props} />
  // </Container>
  // <Container>
  //   {Icon && <Icon size={20} />}
  //   <input {...rest} />
  // </Container>
  // const inputRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  // function handleInputBlur() {
  //   setIsFocused(false);
  // }

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // if (inputRef.current?.value) {
    //   setIsFilled(true);
    // } else {
    //   setIsFilled(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
  // );
};

export default Input;
