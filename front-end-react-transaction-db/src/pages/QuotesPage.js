//NAVBAR POSTION IS FIXED
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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



const deleteQuote = (id) => {
    axios
    .delete(`${API_URL}/quote/${id}`, {new: true})
    .then(() => {
  
     
  getAllQuotes();
  
  
      
    })
  
  }
  return (
    <div>
        <h1 id="shadow">Quote List Page</h1>
        <h4>Click on the Number of the quote you would like to view</h4>
        

    {quotes.length > 0 && quotes.map((quote) => {
        return (
            <div>
                <div key={quote._id} className='quoteBox'>
                   <Link to={`/quote/${quote._id}`}> <h2>Quote # {quote.quoteNumber}</h2></Link>
                      <h2>Customer: {quote.customer}</h2>  
                      <button onClick={()=> deleteQuote(quote._id)}>DELETE QUOTE</button>
                    <div className='quotedParts'>
                     
                     
                    </div>


                </div>
            </div>

        )

    })}
  

  

    </div>
  )
}

export default QuotesPage;