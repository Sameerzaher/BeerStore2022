import {React, useState, useEffect} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Text } from 'react-native-paper'
import API from '../../api-service'
import { useCookies } from 'react-cookie'
export default function Dashboard({ navigation }) {
  const [token, deleteToken] = useCookies(['mr-token']);
  console.log(token);
    const [user,setUser] = useState([]);
    const logoutUser = () => {
      console.log("inside logoutUser");
      console.log(token);
      deleteToken(['mr-token']);
      console.log(token);
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
}
  return (
    <Background>
      <Logo />

      <Header>Let’s start</Header>
      <Text>username: {}</Text>
      <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Orders' }],
          })
        }>Orders</Button>
      <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'AddUserScreen' }],
          })
        }>Add User</Button>
      <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Products' }],
          })
        }> Products</Button>
         <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Suppliers' }],
          })
        }> Suppliers</Button>
      <Button
        mode="outlined"
        onPress={(logoutUser)
         
        }
      >
        Logout
      </Button>
    </Background>
  )
}