import React, { useState } from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { API } from '../../../api-service'
import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform } from "react-native";
//import Popup from '../../components/popup'

//hooks or class component

export default function EditProductScreen({ navigation }) {
  const [Productname,setProductname] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
  const onSubmit = () => {
    API.getProdctByID(Productname)
    //setModalVisible(true)
   //console.log()
  }
  openAlert=()=>{
    alert('Alert with one button');
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Edit Product Screen</Header>
      <TextInput
       label="Product ID "
       returnKeyType="next"
       value={Productname}
       onChangeText={(value) => setProductname(value)}
       autoCapitalize="none"
      />
      <View>
     <Button title='1 button salert' onPress={this.openAlert}/>
    </View>
      <Button mode="outlined" onPress={onSubmit } >Submit</Button>
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

