import React from 'react';
import type {Node} from 'react';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Products,
  AddUserScreen,
  NewOrderScreen,
  Orders,
  EditOrderScreen,
  Suppliers,
  AddSupplierScreen,
  EditSupplierScreen,
  UserScreen,
  DeleteUserScreen,
  AddProductScreen,
  DeleteProductScreen,
  EditProductScreen,
  AllUsersScreen,
  AllProductScreen,
  EditProd,
  AllSupplierScreen,
  DeleteSupplierScreen,
  DeleteOrderScreen,
  AllOrderScreen,

} from './src/screens'
import {

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
const isDarkMode = useColorScheme() === 'dark';
return (
  <View style={styles.sectionContainer}>
    <Text
      style={[
        styles.sectionTitle,
        {
          color: isDarkMode ? Colors.white : Colors.black,
        },
      ]}>
      {title}
    </Text>
    <Text
      style={[
        styles.sectionDescription,
        {
          color: isDarkMode ? Colors.light : Colors.dark,
        },
      ]}>
      {children}
    </Text>
  </View>
);
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


const Stack = createStackNavigator()

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
          <Stack.Screen name='NewOrderScreen' component={NewOrderScreen} />
          <Stack.Screen name='Orders' component={Orders} />
          <Stack.Screen name='EditOrderScreen' component={EditOrderScreen} />
          <Stack.Screen name='Suppliers' component={Suppliers}/>
          <Stack.Screen name='AddSupplierScreen' component={AddSupplierScreen}/>
          <Stack.Screen name='EditSupplierScreen' component={EditSupplierScreen}/>
          <Stack.Screen name='UserScreen' component={UserScreen}/>
          <Stack.Screen name='DeleteUserScreen' component={DeleteUserScreen}/>
          <Stack.Screen name='AddProductScreen' component={AddProductScreen}/>
          <Stack.Screen name='EditProductScreen' component={EditProductScreen}/>
          <Stack.Screen name='EditProd' component={EditProd}/>
          <Stack.Screen name='DeleteProductScreen' component={DeleteProductScreen}/>
          <Stack.Screen name='AllUsersScreen' component={AllUsersScreen}/>
          <Stack.Screen name='AllProductScreen' component={AllProductScreen}/>
          <Stack.Screen name='AllSupplierScreen' component={AllSupplierScreen}/>
          <Stack.Screen name='DeleteSupplierScreen' component={DeleteSupplierScreen}/>
          <Stack.Screen name='DeleteOrderScreen' component={DeleteOrderScreen}/>
          <Stack.Screen name='AllOrderScreen' component={AllOrderScreen}/> 
          <Stack.Screen 
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
  

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
