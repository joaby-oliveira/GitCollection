import React from 'react';

import { Title, Form, Repos } from './styles';
import {FiChevronRight} from 'react-icons/fi'
import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do Github</Title>
      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
      <Repos>
        <a href="/repositories">
          <img src="https://avatars.githubusercontent.com/u/55921991?v=4" alt="Repositorio"/>
          <div>
            <strong>Usuário do Github</strong>
            <p>Repositorio de uma usuario do github</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repos>
    </>
  )
}