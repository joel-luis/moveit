import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: cnetter;
  font-size: 6.25rem;
  font-weight: 600;

  div {
    margin: 0 0.2rem;
  }
`;

export const CountContainer = styled.div`
  display: flex;
`;

export const Count = styled.div`
  flex: 1;
  display: flex;
  font-size: 8.5rem;
  align-items: center;
  justify-content: space-evenly;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  text-align: center;
  color: var(--secondary);

  span {
    color: var(--primary);
    padding: 2px;
  }

  span:first-child {
    border-right: 2px solid var(--gray)
  }
`;

export const CountdownButton = styled.button`
 display: flex;
 width: 100%;

  :hover {
    opacity: 0.8;
  }

  button {
    width: 100%;
    cursor: pointer;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    background: var(--green);
    transition: background-color 0.2s;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    font-size: 1.25rem;
    color: var(--white);
    font-weight: 500;
    border: 0;
  }
`;
