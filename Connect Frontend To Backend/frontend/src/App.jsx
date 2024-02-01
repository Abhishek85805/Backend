import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(()=>{
    axios.get('/api/jokes').then((res)=>{
      setJokes(res.data);
    }).catch((err) => {
      console.log(err);
    });
  });

  return (
    <>
      <h1>Frontend</h1>
      {jokes.map(joke => {
        return (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
