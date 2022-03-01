import "react-native-gesture-handler";
import React from "react";
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react';

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./screens/Cart";

const Stack = createStackNavigator();

export default function App() {

  const [cartItems, setCartItems] = useState ([]);

    const onAdd = (product)=>{
      const exist = cartItems.find((x)=>{x.id===product.id})
      if(exist){
        setCartItems(
          cartItems.map(
            (x)=>{
              x.id===product.id ? {...exist,qty:exist.qty+1} : x
            } 
          )
        )
      }
      else{setCartItems([...cartItems,{...product,qty:1}])}
    }
    
    const onRemove = (product)=>{
      const exist = cartItems.find((x)=>{x.id===product.id})
      if(exist.qty===1){
        setCartItems(cartItems.filter((x)=>{x.id!==product.id}))
      } 
      else{
        setCartItems(
          cartItems.map((x)=>{x.id===product.id ? {...exist,qty:exist.qty-1}:x})
        )
      }
    }

  return (
   <NavigationContainer>
     <StatusBar barStyle="dark-content" backgroundColor="white"/>
     <Stack.Navigator screenOptions={{header:()=>null}}>
     <Stack.Screen name="Home"> 
        {(props) => {<HomeScreen {...props} 
        onAdd= {onAdd} 
        cartItems ={cartItems } 
        noOfCartItems={cartItems.length}/>}}  
     </Stack.Screen>
     <Stack.Screen name="product" component={ProductScreen}/>
      <Stack.Screen name="cart">
    
      {props=><Cart {...props} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}
      </Stack.Screen>




     </Stack.Navigator>
   </NavigationContainer>
  );
}

