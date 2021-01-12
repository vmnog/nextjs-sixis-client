import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: var(--maxwidth-global);

  & > label {
    font-weight: bold;
    font-size: 1rem;
  }

  & > input {
    outline: none;
    width: 100%;
    height: 40px;

    background: transparent;

    border: none;
    border-bottom: 1px solid;

    font-size: 1.1rem;
  }
`;
