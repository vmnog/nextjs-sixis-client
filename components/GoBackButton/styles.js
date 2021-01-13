import styled from 'styled-components';

export const Container = styled.button`
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  align-self: flex-start;

  width: 110px;
  height: 40px;
  padding: 10px;

  border-radius: 8px;

  transition: opacity 0.2s ease;

  &:hover {
    cursor: pointer;
    background: rgba(1, 1, 1, 0.03);
  }

  & > strong {
    color: var(--red);
  }
`;
