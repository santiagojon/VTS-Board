import React from 'react'

import DateTimeDisplay from './DateTimeDisplay';

const ShowCounter = ({ minutes, seconds }) => {
    return (
      <div className="show-counter">
        <div className='countdown-link'>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          </div>
      </div>
    );
  };

  export default ShowCounter;