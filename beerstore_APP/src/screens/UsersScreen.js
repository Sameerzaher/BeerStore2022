import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function UserScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>User Screen</Header>
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
            routes: [{ name: 'Dashboard' }],
          })
        }>back</Button>
     
    </Background>
  )
}
