import React from 'react';
async function getToken() {
    try {
      const response = await fetch('http://127.0.0.1:8000/getToken');
      const data = await response.json();
      const token = data.token;
      return token;
    } catch (error) {
      console.error(error);
    }
  }
  async function makeRequest() {
    const token = await getToken();
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

export class API extends React.Component{
    
    static loginUser(body){ 
        console.log(body)
        return fetch(`http://127.0.0.1:8000/auth/login/`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
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