import styled, { css } from 'styled-components';

const outlinedButton = css`
  border: 1px solid;
  height: 40px;
  background: transparent;
  border-radius: 7px;

  color: var(--red);

  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background: var(--red);
    color: white;
  }
`;

const filledButton = css`
  border: 0;
  height: 40px;
  background: var(--red);
  border-radius: 7px;

  color: white;

  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background: var(--dark-red);
  }
`;

export const Container = styled.button`
  ${(props) => props.buttonStyle === 'filled' && filledButton};
  ${(props) => props.buttonStyle === 'outlined' && outlinedButton};
`;
