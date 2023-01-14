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
    .catch(err => {console.log(err.message)})
  }

  function apiCallShiba(){
    fetch(`https://api-project-dogpics.up.railway.app/shiba`)
    .then((res) => res.json())
    .then((data)=> setShibaData(data))
    .catch(err => {console.log(err.message)})
  }
  function apiCallHusky(){
    fetch(`https://api-project-dogpics.up.railway.app/husky`)
    .then((res) => res.json())
    .then((data)=> setHuskyData(data))
    .catch(err => {console.log(err.message)})
  }
  function apiCallCorgi(){
    fetch(`https://api-project-dogpics.up.railway.app/corgi`)
    .then((res) => res.json())
    .then((data)=> setCorgiData(data))
    .catch(err => {console.log(err.message)})
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
      <img src={pugs.length? pugs[0].message[0]: null} alt="Dog"></img>
      <img src={shibas.length? shibas[0].message[0]: null} alt="Dog"></img>
      <img src={huskies.length? huskies[0].message[0]: null} alt="Dog"></img>
      <img src={corgis.length? corgis[0].message[0]: null} alt="Dog"></img>  
    </div>
  );
}

export default App;