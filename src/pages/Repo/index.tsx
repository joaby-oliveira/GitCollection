import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Header, Issues, RepoInfo } from './styles'
import logo from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { api } from '../../services/api'

interface RepositoryParams {
  repository: string;
}

interface GithubRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

export const Repo: React.FC = () => {
  const [repository, setRepository] = useState<GithubRepository | null>(null)
  const [issues, setIssues] = useState<GithubIssue[]>([])

  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(() => {
    api.get(`repos/${params.repository}`)
      .then(res => setRepository(res.data))

    api.get(`repos/${params.repository}/issues`)
      .then(res => setIssues(res.data))

  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logo} />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepoInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepoInfo>
      )}
      <Issues>
        {issues.map((issue) => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
              <FiChevronRight size={20} />
            </div>
          </a>
        ))}
      </Issues>
    </>
  )
}
