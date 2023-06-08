import React, {useState} from 'react'
import './Choices.css'
function Choices({ choice, human, setWinner, re, winner }) {
  



     
   const result = () => {
       if (choice === "Rock" && human === "Rock") {
         setWinner(re[2])
         return <h1>{winner}</h1>;
         
       } else if (choice === "Paper" && human === "Paper") {
           setWinner(re[2]);
       return <h1>{winner}</h1>;
       } else if (choice === "Scissors" && human === "Scissors") {
           setWinner(re[2]);
       return <h1>{winner}</h1>;
       } else if (choice === "Rock" && human === "Paper") {
           setWinner(re[0]);
       return <h1>{winner}</h1>;
       } else if (choice === "Rock" && human === "Scissors") {
                      setWinner(re[1]);

       return <h1>{winner}</h1>;
       } else if (choice === "Paper" && human === "Rock") {
                      setWinner(re[1]);

       return <h1>{winner}</h1>;
       } else if (choice === "Paper" && human === "Scissors") {
                      setWinner(re[0]);

       return <h1>{winner}</h1>;
       } else if (choice === "Scissors" && human === "Paper") {
                      setWinner(re[1]);

       return <h1>{winner}</h1>;
       } else if (choice === "Scissors" && human === "Rock") {
                      setWinner(re[0]);

       return <h1>{winner}</h1>;
     } else {
       return <h1>...</h1>;
     }
   };
  return (
    <div className="choices">
      <h2>
        AI Choice:  <nav> {choice ? choice : ` I'm waiting`}</nav>
      </h2>

      <h1>{result()}</h1>

      <h2>
        YOUR Choice: <nav>{human ? human : "Make a choice"}</nav>
      </h2>
    </div>
  );
}

export default Choices
