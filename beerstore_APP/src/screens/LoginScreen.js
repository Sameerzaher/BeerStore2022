import React, { useState , useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, Switch} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { API } from '../../api-service';
import { useCookies } from 'react-cookie';
import { navigate } from "react-navigation";
import Dashboard from './Dashboard';
import axios from 'axios';
//import axiosAPI from '../services/api-axios'
import { Formik } from "formik";

//import { checkPluginState } from 'react-native-reanimated/lib/reanimated2/core'

import AsyncStorage from "@react-native-community/async-storage";
export default function LoginScreen({ navigation }) {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const[ token, setToken] = useCookies(['mr-token']);
  const [success, setSuccesss] = useState(false);

  useEffect( () =>{
    console.log(token);
     if(token['mr-token'] )  
        if(token['mr-token'] === 'undefined' )
        setErrorMessage('שם משתמש או סיסמא לא נכונים');
        else
           {
            navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
           }      
      
  }, [token])
 
  function redirectToDashboard(){
    navigate("Dashboard");
  }

  //const csrftoken = getCookie('csrftoken');
  //console.log(token);
  const loginClicked = () =>  {
    console.log(username, password)
    API.loginUser({username, password})
        //.then( resp => console.log(resp.username))
        .then( resp => setToken('mr-token', resp.token))
        .catch( error => console.log(error))  
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        }) 
}
 

  return (
    <Formik  initialValues={{ username: " ", password: " " }} 
    
    onSubmit={(values) =>
      
      axios({
        
        method: "GET",
        url: `http://127.0.0.1:8000/mainApp/users/1/`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: getFormData(values),
        
      })
        .then((response) => {
          console.log(data);

          if (response.status === 200) {
            AsyncStorage.setItem(
              "user_token",
              JSON.stringify(response.data.access_token)
            );
            Alert.alert("Sucesso", "Login realizado com sucesso");
            setSuccesss(true);
            console.log(values.username);
            console.log(data);

            redirectToDashboard();
          }
        })
        
        .catch((error) => {
          console.log(values.username);
         // console.log(data);

          console.log("error", error);
          // console.log(`Error: ${error.response.data['error_description']}`)
        })
        
    }>
      
      {({ handleChange ,values , handleSubmit})=>(
        
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      
      <TextInput
      
        label="User Name"
        returnKeyType="next"
       // value={username}
       onChangeText={(value) => setUsername(value)}

        autoCapitalize="none"
      />
       <Text>Welcome: {username}</Text>
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(value) => setPassword(value)}
      
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={loginClicked}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
