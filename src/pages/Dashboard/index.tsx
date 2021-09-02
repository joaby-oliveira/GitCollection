import React, { useState, FC, ChangeEvent } from 'react';

import { Title, Form, Repos, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';


interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export const Dashboard: FC = () => {
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
    console.log(newRepo);
  }

  async function handleAddRepo(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    if(!newRepo) {
      setInputError('Informe o username/repositório');
      return;
    }

    const response = await api.get<GithubRepository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepos([...repos, repository]);
    setNewRepo('');
    setInputError('')
  }

  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do Github</Title>
      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
        <input placeholder="username/repository_name" value={newRepo} onChange={handleInputChange} />
        <button type="submit">Buscar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repos>
        {repos.map(repository => (
          <a href="/repositories" key={repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repos>
    </>
  )
}