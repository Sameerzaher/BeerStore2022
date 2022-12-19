import React, { useState , useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, Switch } from 'react-native'
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

export default function LoginScreen({ navigation }) {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const[ token, setToken] = useCookies(['mr-token']);
  const redirectToDashboard = () => {
    return navigate("Dashboard");
  }

  const loginClicked = () => {
    API.loginUser(username, password)
    .then( resp => resp)
    .then(resp => setToken('mr-token', resp.token))
    .catch( error => console.log(error))
    redirectToDashboard(); 
   }
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="User Name"
        returnKeyType="next"
        value={username}
       onChange={evt => setUsername(evt.target.value)}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChange={evt => setPassword(evt.target.value)}
      
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
