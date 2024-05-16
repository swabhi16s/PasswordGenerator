import { useState } from 'react';
import './App.css';
import { LC, NUM, SYM, UC } from './Data/PassChar';

function App() {
  let[uppercase,setUppercase]=useState(false)
  let[lowercase,setLowercase]=useState(false)
  let[number,setNumber]=useState(false)
  let[symbols,setSymbol]=useState(false)
  let[passlength,setPasslen]=useState(8)
  let[fpass,setPass]=useState()
  let createPassword=()=>{
    let finalPass=''
    let charSet=''
   
  
      if(uppercase||lowercase||number||symbols){
        if(uppercase)charSet+=UC;
        if(lowercase)charSet+=LC;
        if(number)charSet+=NUM;
        if(symbols)charSet+=SYM;

        for(let i=0;i<passlength;i++){
          finalPass+= charSet.charAt(Math.floor(Math.random()*charSet.length))

        }
        setPass(finalPass)

        
      }
      else{
        alert('Select atleast one checkbox')
      }
    

  }
  let copyPassword = () => {
    navigator.clipboard.writeText(fpass)
      .then(() => alert('Password copied to clipboard'))
      .catch((error) => console.error('Failed to copy password: ', error));
  };
  return (
    <div className="PasswordBox">
      <h1>Password Generator </h1>
      <div className="PasswordBoxin">
        <input type='text'value={fpass}/>
        <button onClick={copyPassword}>Copy </button>
      </div>
      <div className="passlength">
        <label>Password length</label>
        <input type='number' max={16} min={8} value={passlength} onChange={(event)=>setPasslen(event.target.value)} />
      </div>
      <div className="passlength">
        <label>Include uppercase letters</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>
      <div className="passlength">
        <label>Include lowercase letters</label>
        <input type='checkbox'checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
      </div>
      <div className="passlength">
        <label>Include special characters</label>
        <input type='checkbox'checked={number} onChange={()=>setNumber(!number)}/>

      </div>
      <div className="passlength">
        <label>Include numbers</label>
        <input type='checkbox' checked={symbols} onChange={()=>setSymbol(!symbols)}/>
      </div>
      <button onClick={createPassword}>Generate Password</button>

      

     
    </div>
  );
}

export default App;
