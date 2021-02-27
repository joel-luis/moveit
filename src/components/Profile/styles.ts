import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const Avatar = styled.div`
  > img {
    border-radius: 50%;
    width: 5.5rem;
    height: 5.5rem;
  }

`;

export const InfoProfile = styled.div`
  margin-left: 1.5rem;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: var(--gray);
    font-weight: 500;

    > img {
      margin-right: 0.5rem;
    }
  }
`;
