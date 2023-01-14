import './App.css';
import {useEffect, useState} from 'react'

function App() {
  
  const [pugs, setPugData] = useState([]);
  const [shibas, setShibaData] = useState([]);
  const [huskies, setHuskyData] = useState([]);
  const [corgis, setCorgiData] = useState([]);
  

  function apiCallPug(){
    
    fetch(`https://api-project-dogpics.up.railway.app/pug`)
    .then((res) => res.json())
    .then((data)=> setPugData(data))
  }

  function apiCallShiba(){
    fetch(`https://api-project-dogpics.up.railway.app/shiba`)
    .then((res) => res.json())
    .then((data)=> setShibaData(data))
  }
  function apiCallHusky(){
    fetch(`https://api-project-dogpics.up.railway.app/husky`)
    .then((res) => res.json())
    .then((data)=> setHuskyData(data))
  }
  function apiCallCorgi(){
    fetch(`https://api-project-dogpics.up.railway.app/corgi`)
    .then((res) => res.json())
    .then((data)=> setCorgiData(data))
  }



  
  
  useEffect(()=>{
    apiCallPug()
    apiCallShiba()
    apiCallCorgi()
    apiCallHusky()
  }, [])
  
  console.log(pugs)
  console.log(shibas)
  console.log(huskies)
  console.log(corgis)

  return (
    <div className="App">
      <img src={pugs[0].message[0]} alt="Dog"></img>
      <img src={shibas[0].message[0]} alt="Dog"></img>
      <img src={huskies[0].message[0]} alt="Dog"></img>
      <img src={corgis[0].message[0]} alt="Dog"></img>
    </div>
  );
}

export default App;