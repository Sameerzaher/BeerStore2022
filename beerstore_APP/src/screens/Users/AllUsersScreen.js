import React, { useState , useEffect } from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import BackButton from '../../components/BackButton'
import { API } from '../../../api-service';
import UserListItem from '../../components/UserListItem'
export default function AllUsersScreen({ navigation , route }) {
  const {username} = route.params;
  const [UserList, setUserList] = useState([]);
  useEffect(() => {
    console.log("aaaa");
    API.displayUsers();
  }, [UserList]);
  console.log(UserList);
  return (
    <Background>
    <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>AllUsersScreen</Header>

      <ScrollView>
                <View>
                    <Text>
                      {console.log(UserList)}
                    data={UserList}
       
                    renderItem={({item}) => (
                      
                      <UserListItem
                        //onMenuPressed={data => onMenuPressed(data)}
                        item={item}
                      />
                    )}
                    keyExtractor={item => item.id}
                    </Text>
                </View>
              </ScrollView>
     
     
    </Background>
  )
}
