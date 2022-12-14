import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function NewOrderScreen({ navigation }) {
    return (
        <Background>
          <Logo />
          <Header>NewOrderScreen</Header>
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