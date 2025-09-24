import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let timer = useRef(null);

  function startTimer(){
    timer.current=setInterval(()=>{
      setCount(count=>count+1)
    },1000);
  }

  function stopTimer(){
    clearInterval(timer.current);
    timer.current=null;
  }

  function resetTimer() {
    stopTimer();
    setCount(0);
  }
  return (
    <div className='container'>
      
      <h1>Stop-Watch: {count} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default App
