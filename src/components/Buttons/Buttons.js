import React, {useState} from 'react'
import './Button.css'
function Buttons({ onclick, setHuman, click }) {
   

    
  return (
    <div className="button">
      <div className="first-btn">
        <button
          onClick={onclick}
          onMouseUp={() => {
            setHuman("Rock");
          }}
          className="btn one"
        >
          Rock
        </button>
        <button
          onClick={onclick}
          onMouseUp={() => {
            setHuman("Paper");
          }}
          className="btn two"
        >
          Paper
        </button>
        <button
          onClick={onclick}
          onMouseUp={() => {
            setHuman("Scissors");
          }}
          className="btn three"
        >
          Scissors
        </button>
      </div>
      <div className='b2'>
        <button onClick={click} className="second-btn">
          RESET
        </button>
      </div>
    </div>
  );
}

export default Buttons
