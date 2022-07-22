import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

import ShowCounter from './ShowCounter';
import DateTimeDisplay from './DateTimeDisplay';
import ExpiredNotice from './ExpiredNotice'

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;