import styled from 'styled-components';

export const Container = styled.div`
  margin-top: var(--space-md);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > form {
    width: 100%;
  }

  & > form > div {
    margin-top: var(--space-md);
  }

  & > form > button {
    margin-top: var(--space-md);
  }
`;
