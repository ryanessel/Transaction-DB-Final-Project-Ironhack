import { useState, useEffect } from 'react';
import axios from 'axios';
import bigDecimal from 'js-big-decimal';

const requestURL = 'https://api.exchangerate.host/convert?from=USD&to=JPY';
const requestURL2 = 'https://api.exchangerate.host';

function EchangeApi() {
    const [ exchangeTest, setExchangeTest ] = useState("")
    const [ exchangeTest2, setExchangeTest2 ] = useState("")
const [usdBaseAllExRates, setUsdBaseAllExRates] = useState("")
        const [currencyCode, setCurrencyCode] = useState("")

    const getExchangeDollarToYen = () => {

        axios
        .get(`${requestURL}`)
        .then((response) => {
            console.log((response.data.info.rate) )
            setExchangeTest(response.data.info.rate)

        })

    }

    const getExchange = (fromCurrency, toCurrency) => {

        axios
        .get(`${requestURL2}/convert?from=${fromCurrency}&to=${toCurrency}`)
        .then((response) => {
            console.log(("the number 2",response.data.result) )
            setExchangeTest2(response.data.result)

        })

    }

    const getAllExchangePerDollar= () => {
        axios
        .get(`https://api.exchangerate.host/latest?base=usd`)
        .then((response) => {
            console.log(("ALL EX RATES",response.data.rates.currencyCode) )
            setUsdBaseAllExRates(response.data)
         

        })


    }

    useEffect(() => {
        getExchangeDollarToYen();
        getExchange("JPY", "USD")
        getAllExchangePerDollar();
    }, [currencyCode])





console.log(currencyCode)

  return (
    <div className='exchangeApi'>

      
            
<div> 1 USD →　{currencyCode} <span className='exApiCurrencyColor'> {usdBaseAllExRates && usdBaseAllExRates.rates[currencyCode] }</span> </div>
  
<input
placeholder='※type in currency code you want USD converted to'
type="text"
name="currencyCode"
value={currencyCode}
onChange={(e) => {setCurrencyCode(e.target.value)
                getAllExchangePerDollar()

}}

/>



    </div>
  )
}


export default  EchangeApi;