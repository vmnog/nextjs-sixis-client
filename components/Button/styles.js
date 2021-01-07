import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  width: 100px;
  height: 40px;
  background: var(--red);
  border-radius: 7px;

  color: white;

  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background: var(--dark-red);
  }
`;
