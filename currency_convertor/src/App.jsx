import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import CurrencyData from './hooks/CurrencyData';
function App() {

  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);
  let [from, setFrom] = useState('usd');
  let [to, setTo] = useState('inr');


  let currencyList = CurrencyData(from)
  let options = Object.keys(currencyList);

  function convert(){
    setConvertedAmount(amount*currencyList[to])
  }
  
  function swap(){
    setTo(from)
    setFrom(to)
  }
  document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/26839177/pexels-photo-26839177/free-photo-of-black-and-white-close-up-photo-of-coins.jpeg?auto=compress&cs=tinysrgb&w=600)'
  return (
    <>
      <div className="container bg-secondary rounded-3 text-light">
        <div className="row p-3 ">
          <div className="col">
            <h1><span>Currency</span> Convertor</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <InputBox 
            label={'From'} 
            onAmountChange={(amount) =>  setAmount(amount) } 
            onCurrencyChange={(curr) =>  setFrom(curr) } 
            amount={amount} 
            selectCurrency={from} 
            selectListOfCurrency={options} />
            <button className='btn btn-dark' onClick={swap}>Swap</button>
            <InputBox 
            label={'To'} 
            onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount) } 
            onCurrencyChange={(curr) => setTo(curr) } 
            amount={convertedAmount} 
            selectCurrency={to} 
            selectListOfCurrency={options} 
            amountDisable={true}/>
            

          </div>
        </div>

        <div className="row p-4">
            <button className='btn btn-dark px-5 py-3' onClick={convert}>Convert {from.toUpperCase()} TO {to.toUpperCase()}</button>
        </div>
      </div>
    </>
  )
}

export default App
