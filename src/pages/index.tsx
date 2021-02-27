import React from 'react';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChalenges from '../components/CompletedChalenges';

import { Container } from './styles';
import Countdown from '../components/Countdown';

export default function Home() {
  return (
  <Container>
    <ExperienceBar />
    <section>
      <div>
        <Profile />
        <CompletedChalenges />
        <Countdown />
      </div>
      <div>
        
      </div>
    </section>
    
  </ Container>
   
  );
}
