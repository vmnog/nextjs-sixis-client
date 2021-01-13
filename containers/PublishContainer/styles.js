import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 var(--space-sm);

  margin-bottom: var(--space-md);

  width: 100vw;
  height: 100%;

  & > form {
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
  }
`;
