import React from 'react'
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';


 function QuoteFormSignatureLine() {

const {user} = useContext(AuthContext);


  return (
    <div>
    
    <h4>SIGN HERE <i>{user && user.name}</i>  _____________________________</h4>

    </div>
  )
}


export default QuoteFormSignatureLine;
