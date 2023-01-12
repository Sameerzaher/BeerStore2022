import React from 'react';

export class API extends React.Component{
    
    static loginUser(body){ 
        console.log(body)
        
        return fetch(`http://127.0.0.1:8000/auth/`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify( body )
            }).then( resp => resp.json())
        }
    static registerUser(body){ 
         console.log(body)
         return fetch(`http://127.0.0.1:8000/mainApp/users/`, {
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json',
                     //'Authorization': `Token ${token}`
                },
                 body: JSON.stringify( body )
                 }).then( resp => resp.json())
             }
        static getUserDetails(token){

                return fetch(`http://127.0.0.1:8000/mainApp/userProfile/getUserDetails/`,{
                    method: 'POST',
                    headers: {  
                        'Content-Type':'application/json',
                        'Authorization': `Token ${token}` 
                    }
                })
            }
     static registerUserProfile(username, firstName, lastName){ 
        console.log(username,firstName,lastName);
            return fetch(`http://127.0.0.1:8000/mainApp/userProfile/`, {
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