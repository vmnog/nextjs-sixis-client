import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100vw;
  height: 100%;

  min-height: 100vh;

  padding: var(--padding-global);

  & > strong {
    color: var(--red);

    cursor: pointer;

    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;
