import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100%;

  min-height: 100vh;

  padding: var(--padding-global);

  & > h1 {
    font-size: var(--text-lgx1);
  }

  & > ul {
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1200px) {
      padding: 0 var(--space-md);
    }
  }
`;
