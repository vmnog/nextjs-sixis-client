import styled from 'styled-components';

export const Container = styled.button`
  margin: 0;
  padding: 0;

  & > strong {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 15px;

    border-radius: 8px;

    color: var(--red);

    cursor: pointer;

    transition: opacity 0.2s ease;

    &:hover {
      background: rgba(1, 1, 1, 0.03);
      /* opacity: 0.7; */
    }
  }
`;
