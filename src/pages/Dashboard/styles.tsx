import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  max-width: 30rem;
  line-height: 3.5rem;
  margin-top: 4rem;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #33aaff;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border-right: 0;
    &::placeholder {
      color: #a8a8a8;
    }
    &:focus {
      z-index: 1000;
      border: 2px solid #33aaff;
      box-shadow : 0 0 1px 2px #1e7cbe;
    }
    outline: none;
  }
  button {
    width: 160px;
    background: #33aaff;
    border-radius: 0 5px 5px 0;
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    transition: 0.2s;
    outline: none;
    &:hover {
      background: #1e7cbe;
    }
    &:focus {
      box-shadow : 0 0 1px 2px #1e7cbe;
    }
  }
`;

export const Repos = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px)
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8d3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;