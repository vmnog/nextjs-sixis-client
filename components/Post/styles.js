import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;

  @media (max-width: 1200px) {
    max-width: 100vw;
  }

  border-radius: 16px;

  background: white;

  padding: var(--space-md);
  margin-top: var(--space-md);

  -webkit-box-shadow: 10px 9px 16px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 9px 16px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 9px 16px 0px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-black);

    & > strong {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 80%;
    }
  }

  & > p {
    color: var(--text-black);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
  }
`;
