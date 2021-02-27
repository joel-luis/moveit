import React from 'react';

import { Container, Avatar, InfoProfile } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img src="https://avatars.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4f" />
      </Avatar>
      <InfoProfile>
        <strong>Joel Luis</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level 1
          </p>
      </InfoProfile>
    </Container>
  )
}

export default Profile;