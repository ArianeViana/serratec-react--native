import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';



const Login = () => {
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
        <View style={{height:300, width:300, backgroundColor: "grey"}}>
          <Text style={{textAlign:"center", fontSize:30, fontWeight:"bold", padding:10}}>Login</Text>
          <View style={{marginTop:20}}>
            <View style={{height:50, width:270, backgroundColor: "white", alignSelf:"center",borderRadius: 10}}/>
            <View style={{marginTop:10, height:50, width:270, backgroundColor: "white", alignSelf:"center", borderRadius: 10}}/>
        
            <Pressable 
            style = {styles.input}
            ><Text style={{color: "white",fontSize:20}}>
              Entrar
            </Text>
              </Pressable> 
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 120,
    backgroundColor: "black", 
    alignSelf: 'center',
    marginTop:25,
    borderRadius: 10,
    fontWeight: "bold",
    alignItems: "center", 
    justifyContent: "center",

    
  }
  
  
})

export default Login;
