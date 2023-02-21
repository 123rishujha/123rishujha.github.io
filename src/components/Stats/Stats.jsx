import React from 'react';
import './Stats.css';

import GitHubCalendar from 'react-github-calendar';


const Stats = () => {
  return (
    <div className='stats_container'>
        <GitHubCalendar
         username="123rishujha"
         blockMargin={7}
         blockSize={15}
         color={'#5B8FB9'}
         hideColorLegend={true}
         font-fontSize={10}
        style={{display:'flex',flexDirection:'column',margin:'auto'}} 
     />
    </div>
  )
}

export default Stats;

