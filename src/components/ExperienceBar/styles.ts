import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1rem;
  }
`;

export const Bar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray);
  margin: 0 1.5rem;
  position: relative;
`;

export const Level = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);

  span {
    position: absolute;
    top: 12px;
    transform: translateX(-50%)
  }
`;

export const CurrentExperience = styled.div`
    position: absolute;
    top: 12px;
    transform: translateX(-50%)
  
`;