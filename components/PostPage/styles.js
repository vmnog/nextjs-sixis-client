import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxwidth-global);

  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    align-self: flex-start;
  }

  & > h1 {
    font-size: var(--text-lgx2);
  }

  & > span {
    font-size: var(--text-md);

    align-self: flex-end;
    margin: var(--space-sm);

    opacity: 0.5;
  }

  & > p {
    align-self: flex-start;
    font-size: var(--text-lg);
    padding-bottom: var(--space-lg);
    text-align: justify;
  }
`;
