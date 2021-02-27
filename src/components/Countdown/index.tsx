import React, { useState, useEffect } from 'react';

import { Container, Count, CountContainer, CountdownButton } from './styles';

const Countdown: React.FC = () => {
  
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown () {
    setActive(true);
  }

  useEffect(() => {
   if (active && time > 0) {
     setTimeout(() => {
       setTime(time - 1);
     }, 1000)
   }
  }, [active, time])

  return (
    <Container>
      <CountContainer>
        <Count>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Count>
        <div>:</div>
        <Count>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </Count>
      </CountContainer>
   
      <CountdownButton>
      <button type="button" onClick={startCountdown}>Iniciar ciclo</button>
      </CountdownButton>
    </Container>
   
  )
}

export default Countdown;