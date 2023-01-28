import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import { theme } from '../../core/theme'
export default function Products({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack}/>
      <Logo />
      <Header>Products Screen</Header>
      <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'AllProductScreen' }],
          })
        }>All Products</Button>
      <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'AddProductScreen' }],
          })
        }>Add Product</Button>
      <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'EditProductScreen' }],
          })
        }>Edit Product</Button>
        <Button mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'DeleteProductScreen' }],
          })
        }>Delete Product</Button>  
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
