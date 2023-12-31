import React from "react";
import { useState } from "react";
import {StyleSheet, View , Text ,Button,TextInput,Image,SafeAreaView,TouchableOpacity,StatusBar,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
const instafood3 = require("../assets/instafood2.png");

export default function CrearUsuario({ navigation }){

        const [email , setEmail] = useState("");
        const [pasword , setPaswor] = useState("");
        const [pasword2 , setPaswor2] = useState("");
        
        const onHandleCrearUsuario = () => {
            if(email !== "" && pasword !== "" && pasword2 !== ""  ){
                
            }

        };
        return(
            <View style={styles.container}>
                <Image source={instafood3} style={styles.instafood3}/>
                <View style={styles.whiteSheet}/>
                <SafeAreaView style={styles.from}>
                    <Text  style={styles.title}> Crear Usuario  </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="ingrese correo"
                      autoCapitalize="none"
                      keyboardType="email-address"
                      textContentType="emailAddress"
                      autoFocus={true}
                      value={email}
                      onChangeText={(Text) => setEmail(Text) }
                    />
                    <TextInput 
                      style={styles.input}
                      placeholder="ingrese contraseña"
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry={true}
                      textContentType="password2"
                      value={pasword2}
                      onChangeText={(Text) => setPaswor2(Text)}
                    />

                    <TextInput 
                      style={styles.input}
                      placeholder="confirmar  contraseña"
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry={true}
                      textContentType="password"
                      value={pasword}
                      onChangeText={(Text) => setPaswor(Text)}
                    />
                     
                <TouchableOpacity style={styles.button} onPress={onHandleCrearUsuario}>
                    <Text style={{fontWeight: 'bold' , color: '#fff', fontSize: 18}}>Registrar</Text>
                </TouchableOpacity>   
                <View style={{marginTop:20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Registrate a hora?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("login")}>
                        <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}>ir al Inico</Text>
                    </TouchableOpacity>

                </View>
               </SafeAreaView>

            </View>
        )
    }       

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        title:{
            fontSize:36,
            fontWeight: 'bold',
            color:"orange",
            alignSelf: "center",
            paddingBottom: 24,
        },
        input: {
            backgroundColor: '#F6F7FB',
            height: 58,
            marginBottom: 20,
            fontSize: 16,
            borderRadius: 10,
            padding: 12,
          },
        instafood3:{
            width: "100%",
            height: 340,
            position: "absolute",
            top: 0,
            resizeMode: 'cover',   
        },
        whiteSheet:{
            width: '100%',
            height: '75%',
            position:"absolute",
            bottom:0,
            backgroundColor: '#fff',
            borderTopEndRadius: 60,
        },
        from:{
            flex:1,
            justifyContent:'center',
            marginHorizontal: 30,
        },
        button:{
            backgroundColor:'#f57c00',
            height:58,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems:'center',
            marginTop:40,
        },

      });
      