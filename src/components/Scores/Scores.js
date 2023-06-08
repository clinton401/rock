import React from 'react';
import './Scores.css';

function Scores({ aiScore, humanScore, }) {
    
    
 

  return (
    <div className='score'>
      <h2 className='h2'>
        You <nav>{humanScore}</nav> - <nav>{aiScore}</nav> AI
      </h2>
    </div>
  );
}

export default Scores
