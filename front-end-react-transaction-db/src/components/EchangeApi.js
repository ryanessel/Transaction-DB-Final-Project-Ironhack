import { useState, useEffect } from 'react';
import axios from 'axios';

const requestURL = 'https://api.exchangerate.host/convert?from=USD&to=JPY';


function EchangeApi() {
    const [ exchangeTest, setExchangeTest ] = useState("")



    const getExchange = () => {

        axios
        .get(`${requestURL}`)
        .then((response) => {
            console.log((response.data.result) )
            setExchangeTest(response.data.result)

        })

    }


    useEffect(() => {
        getExchange();

    }, [])



  return (
    <div className='exchangeApi'>

        <h1>Exchange Rate</h1>
            <h2>$1 = ￥{exchangeTest}</h2>


    </div>
  )
}


export default  EchangeApi;