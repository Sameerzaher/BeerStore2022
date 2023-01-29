import React, { useState , useEffect , useCookies} from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { SelectList } from 'react-native-dropdown-select-list'
import {API} from '../../../api-service'
export default function AddSupplierScreen({ navigation ,route }) {
  const {username} = route.params;
  const [ suppliername, setsuppliername] = useState('');
  const [ productname, setproductname] = useState('');
  //const [ password, setPassword] = useState('');
  const [ productsList, setProducts] = useState('');
  //const [token] = useCookies(['mr-token']);
  const [selected, setSelected] = React.useState("");
  const [data,setData] = React.useState([]);
  useEffect(() =>{ 
    API.getAllProducts()
        .then( resp => setProducts(resp))
        .catch( error => console.log(error))      
  }, [])
  
  
  console.log(productsList);

  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Add Supplier Screen</Header>
      <TextInput
       label="Supplier Name "
       returnKeyType="next"
       value={suppliername}
       onChangeText={(value) => setsuppliername(value)}
       autoCapitalize="none"
      />
     
      <SelectList
       label = "Products" 
       setSelected={setSelected}
       data={productsList[1]} 
       onSelect={() => setproductname(selected)}
        >
       
      </SelectList>
      <Button mode="outlined">Submit</Button>
      
    </Background>
  )
}