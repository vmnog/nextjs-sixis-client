import styled from 'styled-components';

export const Container = styled.div`
  margin-top: var(--space-md);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > div + div {
    margin-top: var(--space-md);
  }

  & > button {
    margin-top: var(--space-md);
  }
`;
