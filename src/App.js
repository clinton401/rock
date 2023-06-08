import React, {useState, useEffect} from 'react';
import './App.css';

import Scores from './components/Scores/Scores';
import Choices from './components/Choices/Choices';
import Buttons from './components/Buttons/Buttons';

function App() {
  const [choices] = useState(["Rock", "Paper", "Scissors"]);
  const [choice, setChoice] = useState("");
  const [human, setHuman] = useState("");
  const [aiScore, setAiScore] = useState(0);
  const [humanScore, setHumanScore] = useState(0);
  const [re] = useState(['You Won', 'Ai Won', 'Draw']);
  const [winner, setWinner] = useState("");
  
  const AI = () => {
    
    
    const randomChoice = Math.floor(Math.random() * 3);

    const selectedChoice = choices[randomChoice];
    

    setChoice(selectedChoice);
    
   
  };
  useEffect(() => { 
     if (winner === re[0]) {
       setHumanScore((prev) => prev + 1);
     } else if (winner === re[1]) {
       setAiScore((prev) => prev + 1);
     } else if (winner === re[2]) {
       setHumanScore((prev) => prev);
       setAiScore((prev) => prev);
     }
  }, [winner, re])
    useEffect(() => {
      if (humanScore === 10) {
        alert(`Congrats You beat me ${humanScore} - ${aiScore} 😢`);
        setChoice("");
        setHuman("");
        setHumanScore(0);
        setAiScore(0);
        window.location.reload(true);
      } else if (aiScore === 10) {
        alert(
          `I beat you ${aiScore} - ${humanScore}, better luck next time 🙂`
        );
        setChoice("");
        setHuman("");
        setHumanScore(0);
        setAiScore(0);
        window.location.reload(true);
      }
    }, [humanScore, aiScore]);
   const click = () => {
     setChoice("");
     setHuman("");
     setHumanScore(0);
     setAiScore(0);
     window.location.reload(true);
   };


 console.log(re)
   console.log(`human=${humanScore} and ai=${aiScore}`);

  console.log(choice);
  console.log(`human: ${human}`);
  return (
    <div className="App">
      <Scores
        
        aiScore={aiScore}
        humanScore={humanScore}
        
      />
      <Choices
        choice={choice}
        human={human}
        re={re}
        winner={winner}
        setWinner={setWinner}
        
      />
      <Buttons
        onclick={AI}
        setHuman={setHuman}
        click={click}
      />
    </div>
  );
}

export default App;
