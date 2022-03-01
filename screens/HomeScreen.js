import React from "react";
import {View, SafeAreaView, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Products from "../Products";

const width=Dimensions.get("window").width/2-30;

export default function HomeScreen(props){

    const {navigation,onAdd, noOfCartItems} = props; // object destructuring 

    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const categories = ["POPULAR" , "ORGANIC"];
    
    const CategoryList = ()=>{
      return(
        <View style={style.categoryContainer}>
          {categories.map((item,index)=>(
           <TouchableOpacity
           key={index}
           activeOpacity={0.8}
           onPress={()=>{setCategoryIndex(index)}}
           >
             <Text style={[style.categoryText, catergoryIndex === index && style.categoryTextSelected,]}>
               {item}
             </Text>
           </TouchableOpacity> 
          ))}
        </View>
      )
    }

    const Card = ({product})=>{
      return(
        <View style={{ flex: 1 }}>
          <TouchableOpacity
          activeOpacity = {0.8}
          onPress={()=>navigation.navigate("Product" , product)}>
            <View style={style.card}>
              <View style={{ alignItems: "flex-end" }} >
                <View  style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                </View>
              </View>

              <View
              style={{
                height: 100,
                alignItems: "center",
              }}
            >
            <Image source = {product.img}
             style={{ flex: 1, resizeMode: "contain" }}
            />
            <Text 
              style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
              {product.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text style={{ fontSize: 19, fontWeight: "bold" }}> 
              Rs.{product.price}
               </Text>
              
            </View>
            </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity
           style={{
            backgroundColor: "grey",
            width: 100,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={()=>{onAdd(product)}}
          
          >
          
            <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>
              Add to cart
            </Text>
          </TouchableOpacity>

          
        </View>
      )
    }

    
    return(
        <SafeAreaView
        style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: "white",
          }}
        >
              <View style={style.header}>
           <View><Text> La dea Shopping App </Text></View> 
           <Icon name="shopping-cart" 
           size={28}
           onPress={()=>navigation.navigate("Cart")}/>
           <Text>{noOfCartItems}</Text>
           <View style={{ marginTop: 30, flexDirection: "row" }}>
             <View style={style.searchContainer}> 
                 <Icon name="search" style= {{ marginLeft: 20 }} />
                 <TextInput placeholder="Search" style={style.input} />
             </View>  
             <View style={style.sortBtn}>
               <Icon name="sort" size={30} color="white"/>
             </View>
           </View>
           <CategoryList/>
           <FlatList 
           columnWrapperStyle={{justifyContent:"space-between"}}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{marginTop:10, paddingBottom:50}}
           numColumns={2}
           data={Products}
           renderItem={({item})=>{
             return <Card product={item}/>
           }}
           />
           </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: { 
    fontSize: 16, 
    color: "grey", 
    fontWeight: "bold" 
  },
  categoryTextSelected: {
    color: "pink",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "pink",
  },
  card: {
    height: 225,
    backgroundColor: "#F1F1F1",
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchContainer: {
    height: 50,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: "black",
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
});