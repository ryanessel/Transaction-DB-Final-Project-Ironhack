//NAVBAR POSTION IS FIXED
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddQuote from '../components/AddQuote';
import AddPart from '../components/AddPart';


const API_URL = "http://localhost:5005"

 function QuotesPage() {
    const [quotes, setQoutes] = useState("")


    const getAllQuotes = () => {

        axios
        .get(`${API_URL}/quotes`)
        .then((response) => {
            console.log(response.data)
            setQoutes(response.data)

        })


    }


useEffect(() => {

getAllQuotes();

}, [])




  return (
    <div>
        <h1 id="shadow">Quotes Page</h1>
        <AddQuote updateQuotes={getAllQuotes}/>
        <AddPart/>

    {quotes.length > 0 && quotes.map((quote) => {
        return (
            <div>
                <div key={quote._id} className='quoteBox'>
                    <h2>Quote # {quote.quoteNumber}</h2>
                      <h2>Customer: {quote.customer}</h2>  
                    <div className='quotedParts'>
                        {quote.quoteParts.map((quotePart) => {
                            return(
                                <div className='quotePart'>
                                    <hr />
                                    <div>PN: {quotePart.partNumber}</div>
                                    <div>Description: {quotePart.partDescription}</div>
                                    <div>Material: {quotePart.material}</div>
                                    <div>Sell: {quotePart.sell}</div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>

        )

    })}
  

  

    </div>
  )
}

export default QuotesPage;