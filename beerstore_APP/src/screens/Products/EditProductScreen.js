import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'

export default function EditProductScreen({ navigation }) {
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Edit Product Screen</Header>
      <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Products' }],
          })
        }>back</Button>
    </Background>
  )
}