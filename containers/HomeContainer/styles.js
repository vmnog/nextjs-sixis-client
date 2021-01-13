import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: auto;
  max-width: var(--maxwidth-global);

  width: 100%;
  height: 100%;

  padding: 0 var(--space-sm);

  & > h1 {
    font-size: var(--text-lgx1);
  }

  & > ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: var(--space-sm) 0;
  }
`;
