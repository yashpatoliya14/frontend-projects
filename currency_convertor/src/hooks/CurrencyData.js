import { useState } from "react";
import { useEffect } from "react"


function CurrencyData(currency){
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

    let [data , setData] = useState({})
    useEffect(()=>{
        fetch(url).then((ans)=>{
            return ans.json();
        }).then((ans)=>{
            return setData(ans[currency]);
        })
    },[currency])
    
    return data;    
}


export default CurrencyData;