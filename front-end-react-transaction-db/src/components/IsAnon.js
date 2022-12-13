
import {  useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import React from 'react'

function IsAnon({children}) {

    const { isLoggedIn, isLoading} = useContext(AuthContext);

    if(isLoading) return <p>Loading　・・・</p>

    if(isLoggedIn) {
//don't send them to "hompage" because you are allowed to whether you are logged in or not
//so the redirect below won't work cause it isn't on that page.
        return <Navigate to="/parts"/>

    } else {
        return children
    }

}



export default  IsAnon;