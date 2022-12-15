import React from 'react'
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';


 function QuoteFormSignatureLine() {

const {user} = useContext(AuthContext);


  return (
    <div className='signatureLine'>
    
    <h4>Signed by, <i>{user && user.name}</i>  ______________________________________</h4>

    </div>
  )
}


export default QuoteFormSignatureLine;
