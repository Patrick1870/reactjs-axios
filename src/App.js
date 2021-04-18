import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {

  const [joke, setJoke] = useState(null);
  const [punchline, setPunchline] = useState(null);
  const [showPunchline, setShowpunchline] = useState(false);

  const getJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke').then(res => {
      setJoke(res.data.setup);
      setPunchline(res.data.punchline);
      setShowpunchline(false)
    });
  }

  const switchVisibility = () => {
    setShowpunchline(!showPunchline);
  }

  return (
    <div className="App">
      
       Jokes: <br/>
       <div>{joke}</div><br/>
       {showPunchline ? <div>{punchline}</div> : <div></div>}
       
       <button onClick={getJoke}>Get joke</button>

       <button onClick={switchVisibility}>Show punchline</button>

    </div>
  );
}

export default App;
