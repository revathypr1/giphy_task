import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({component:Component,...rest}) {
  const user_data=JSON.parse(localStorage.getItem("user_data"))
  console.log(user_data);

  return <Route {...rest} render={(props)=>{
    if (user_data?.access){
      return <Component {...props}/>
    }
    else{
      return <Redirect to ={{pathname: "/"}}/>
    }
  }}
        />;
}

