import React from 'react'

function InputBox(
    {
        label,
        onAmountChange,
        onCurrencyChange,
        amount,
        selectListOfCurrency=[],
        selectCurrency,
        amountDisable=false,
        currencyDisable=false,
    }
){
    return(
        <div className="row p-3">
              <div className="col-8 text-start">
                <label className="form-label fs-4">{label}</label>
                
                
                <input 
                type="number" 
                value={amount} 
                className="form-control" 
                disabled={amountDisable}
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
              </div>
              <div className="col-4">
                <label className="form-label fs-4">Currency</label>
                
                <select 
                className="form-select" 
                value={selectCurrency} 
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                  {selectListOfCurrency.map((curr)=>(
                    <option key={curr}>{curr}</option>
                  ))}
                </select>
              
              
              </div>
            </div>
    )
}

export default InputBox;