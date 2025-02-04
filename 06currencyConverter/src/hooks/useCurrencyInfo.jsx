import { useState , useEffect } from "react";

function UseCurrencyInfo(currency){
  const [data , setDate] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((resp)=>resp.json())
        .then((resp)=>setDate(resp[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}
export default UseCurrencyInfo;