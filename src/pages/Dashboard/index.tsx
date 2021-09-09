import React, { useState, FC, ChangeEvent, useEffect } from 'react';

import { Title, Form, Repos, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { Link } from 'react-router-dom'

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export const Dashboard: FC = () => {
  const [repos, setRepos] = useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem('@GitCollection:repositories');

    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return;
  });
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos))
  }, [repos])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    if (!newRepo) {
      setInputError('Informe o username/repositório');
      return;
    }

    try {
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepos([...repos, repository]);
      setNewRepo('');
      setInputError('')
    } catch {
      setInputError('Repositório não encontrado')
    }
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
          <Link to={`repositories/${repository.full_name}`} key={repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repos>
    </>
  )
}