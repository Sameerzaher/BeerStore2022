import React from 'react';

export class API extends React.Component{
static loginUser(body){ 
    return fetch(`http://127.0.0.1:8000/rest-auth/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Token ${token}`,
        },
        body: JSON.stringify( body )
        }).then( resp => resp.json())
    }
    static registerUser(body){ 
         console.log(body)
         return fetch(`http://127.0.0.1:8000/rest-auth/register/`, {
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json',
                     //'Authorization': `Token ${token}`
                },
                 body: JSON.stringify( body )
                 }).then( resp => resp.json())
             }
     static registerUserProfile(username, firstName, lastName){ 
            return fetch(`http://127.0.0.1:8000/mainApp/userProfile/1/createUserProfile/`, {
                method: 'POST',
                headers: {
                
                  'Content-Type': 'application/json',
                  //'Authorization': `Token ${token}` 
                     },
                     body: JSON.stringify({'username' : username, 'firstName' : firstName,'lastName' : lastName} )  
                        
                })
                  .then( resp => resp.json())
                
               } 
               
}