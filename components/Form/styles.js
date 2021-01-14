import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin-top: var(--space-md);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > form {
    width: 100%;

    & > div {
      margin-bottom: var(--space-md);
    }

    & > span {
      color: var(--red);
      position: absolute;
      margin-top: -25px;
    }
  }
`;
