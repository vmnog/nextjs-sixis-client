import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100%;

  padding: 0 var(--space-sm);

  & > h1 {
    font-size: var(--text-lgx1);
  }

  & > ul {
    padding: 0 var(--space-sm);

    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
