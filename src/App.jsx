import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [text, setText] = useState("");

 useEffect(()=>{
  const storageText = localStorage.getItem("text");
  if(storageText){
    setText(storageText);
  }
 },[])

 const handleSave = ()=>{
  localStorage.setItem("text",text); //zapisuje do localStoreage
 };


  return (
    <div>
      <form>
        <h1>{text || "Sentencja"}</h1>
        <input 
        type="text" 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        placeholder='podaj tekst'
        />

      <button onClick={handleSave}>Dodaj</button>

      </form>
    </div>
  )
}

export default App
