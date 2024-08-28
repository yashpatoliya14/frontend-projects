import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState(null);
  let [reaction,setReaction] =useState('weak');

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "123456789"
      setReaction('Good')
    }else{
      if(charAllowed){
        setReaction('Good')
      }else{
        setReaction('Weak')
      }
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+-={}[]:;?/"
      if(numberAllowed){
        setReaction('Strong')
      }else{
        setReaction('Good')

      }
    }else{
      if(numberAllowed){
        setReaction('Good')
      }else{
        setReaction('Weak')
      }
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
    

  }, [length, numberAllowed, charAllowed])

  let passwordRef = useRef(null)

  function copyPassword() {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    navigator.clipboard.writeText(password);
  }


  useEffect(() => {
    passwordGenerator();

  }, [length, numberAllowed, charAllowed]);



  document.body.style.backgroundColor = "black"

  return (
    <>

      <div className="container bg-light p-5">
        <div className="row  text-dark rounded ">
          <div className="col my-3">
            <h1>Password Generator</h1>
          </div>
        </div>

        <div className='row my-3'>
          <div className="col">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Password" readOnly value={password} ref={passwordRef} />
              <button className="btn btn-primary" type="button" onClick={copyPassword}>Copy</button>
            </div>
          </div>
        </div>

        <div className="row mb-3 justify-content-around">
          <div className='col-4'>
            <label className="form-label">Length {length}</label>
            <input type="range" className="form-range" min={6} max={50} onChange={(e) => {
              setLength(e.target.value)
            }} defaultValue={length}></input>
          </div>
          <div className="col-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" defaultChecked={numberAllowed} onClick={() => {
                setNumberAllowed(numberAllowed = (!numberAllowed))
              }} />
              <label className="form-check-label">
                Numbers
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" defaultChecked={charAllowed} onClick={() => {
                setCharAllowed(charAllowed = (!charAllowed))
              }} />
              <label className="form-check-label">
                Characters
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3>Status : {reaction}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
