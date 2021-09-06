import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Header, RepoInfo } from './styles'
import logo from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={logo} />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      <RepoInfo>
        <header>
          <img src="" alt="joaby-oliveira" />
          <div>
            <strong>Joaby Oliveira</strong>
            <p>Repositorio do site de portfólio Joaby Oliveira</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>3</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>210</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>6</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>
    </>
  )
}
