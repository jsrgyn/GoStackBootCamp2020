import React, { useCallback, useRef } from 'react';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';
import * as Yup from 'yup';


import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  // async function handleSubmit(data: object): void {
  //   console.log(data);
  //   try {
  //     const schema = Yup.object().shape({
  //       name: Yup.string().required('Nome obrigatório'),
  //       email: Yup.string().required().email('Digite um e-mail válido'),
  //       password: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 dígitos'),
  //     });

  //     await schema.validate(data);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const formRef = useRef(null);
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleSubmit = useCallback(async (data: object) => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        // password: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 dígitos'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({
        nome: 'Nome obrigatório',
      });

    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        {/* <form> */}
        {/* <Form initialData={{ name: 'Diego' }} onSubmit={handleSubmit}> */}
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
          {/* </form> */}
        </Form>

        <a href="Login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
