import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  width: 100%;
  /* max-width: var(--maxwidth-global); */

  margin-top: var(--space-md);

  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      & button + button {
        margin-left: var(--space-sm);
      }
    }
  }
`;
