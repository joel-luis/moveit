import React from 'react';

import { Header, Bar, Level, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Header>
      <span>0 xp</span>
      <Bar>
        <Level style={{width: '50%'}} />
        <CurrentExperience style={{left: '50%'}}>300 xp</CurrentExperience>
      </Bar>
      <span>600 xp</span>
    </Header>
  )
}

export default ExperienceBar;