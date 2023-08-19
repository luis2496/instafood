import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, View , Text ,Button,TextInput,Image,SafeAreaView,TouchableOpacity,StatusBar,Alert} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  

// importacion de screem
import CrearUsuario from './CrearUsuario';
import Submitperfil from './Submitperfil';
import Home  from './Home'
import Favorito from './Favorito';
import Buscar from './Buscar';
import PerfilUsuario from './PerfilUsuario';
import Login from './Login';


//iconos
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


const  HomeStakNavigator = createNativeStackNavigator();

function MyStak(){
  return(
    <HomeStakNavigator.Navigator >
      <HomeStakNavigator.Screen
       name="login"
       component={Login}
       options={{headerShown:false}
      }
      />

       <HomeStakNavigator.Screen
      name='Home'
      component={Home}
      options={{headerBackTitleVisible:false,}}
      />
      
      <HomeStakNavigator.Screen
      name='Favorito'
      component={Favorito}
      options={{headerBackTitleVisible:false,}}
      />
      <HomeStakNavigator.Screen
      name='Buscar'
      component={Buscar}
      options={{headerBackTitleVisible:false,}}
      />
      <HomeStakNavigator.Screen
      name='CrearUsuario'
      component={CrearUsuario}
      options={{headerBackTitleVisible:false}}     
       />

     <HomeStakNavigator.Screen
      name='Submitperfil'
      component={Submitperfil}
      options={{headerBackTitleVisible:false}}     
       />
    </HomeStakNavigator.Navigator>

  )
}


const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
  <Tab.Navigator  screenOptions={{tabBarActiveTintColor:'orange'}}>
    <Tab.Screen name="InstaFood" component={MyStak} options={{tabBarLabel: 'INICIO',tabBarIcon:({color , size})=> (<Ionicons name="home" size={30} color="orange" />)}}/>
    <Tab.Screen name="Buscar" component={Buscar} options={{tabBarLabel: 'Buscar',tabBarIcon:({color , size})=> (<Ionicons name="restaurant-sharp" size={30} color="orange" />)}}/>
    <Tab.Screen name="Favorito" component={Favorito} options={{tabBarLabel: 'favorito',tabBarIcon:({color , size})=> (<Ionicons name="heart-circle" size={35} color="orange" />)}}/>
    <Tab.Screen name="Perfil" component={PerfilUsuario} options={{tabBarLabel:'PERFIL',tabBarIcon:({color, size})=> (<FontAwesome name="user-circle-o" size={30} color="orange" />), headerShown:false,}}/>
  </Tab.Navigator>
  );
}
 
export default function Navigation(){
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}


 
  