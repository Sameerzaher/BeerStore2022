import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { StyleSheet,Text, View,FlatList} from 'react-native';
import BackButton from '../../components/BackButton'
import Button from '../../components/Button'
export default function AllProductScreen({navigation, route}) {
  const {username} = route.params;
  const [products,setProducts] = useState('');
  useEffect(()=>{
    fetchData()
},[]);
    const fetchData = ()=>{
       fetch("http://127.0.0.1:8000/mainApp/Products/")
       .then(response => response.json())
      .then(jsonResponse => setProducts(jsonResponse))
      .catch(error => console.log(error))    
    };
const renderProduct = ({item}) => {
  return(  
    <View style={{margin:10,borderWidth:0.5,padding:10}}>
    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>
      product {item.id}
    </Text>
    <Text style={{color:"black"}}>name : {item.name}</Text>
    <Text style={{color:"black"}}>supplier : {item.supplier_name}</Text>
    <Text style={{color:"black"}}>amount : {item.amount}</Text>
    <Text style={{color:"black"}}>price : {item.price}</Text>
  </View>

  )
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>All Product Screen</Header>
    <View style={{flex:1,backgroundColor:"white"}}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item,index) => index.toString()}
        />
    </View>
    </Background>
  )
};
            


