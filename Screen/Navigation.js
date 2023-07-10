import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, View , Text ,Button,TextInput,Image,SafeAreaView,TouchableOpacity,StatusBar,Alert} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  

// importacion de screem
import CrearUsuario from './CrearUsuario';
import Submitperfil from './Submitperfil';
import Home  from './Home'
import PerfilUsuario from './PerfilUsuario';
import Historias  from './Historias';
import Login from './Login';

//iconos
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const  HomeStakNavigator = createNativeStackNavigator();

function MyStak(){
  return(
    <HomeStakNavigator.Navigator initialRouteName="Login">
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
  <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarActiveTintColor:'orange'}}>
    <Tab.Screen name="InstaFood" component={MyStak} options={{tabBarLabel: 'INICIO',tabBarIcon:({color , size})=> (<Feather name="home" size={30} color="orange" />)}}/>
    <Tab.Screen name="Perfi" component={PerfilUsuario} options={{tabBarLabel:'PERFIL',tabBarIcon:({color, size})=> (<FontAwesome name="user-circle-o" size={30} color="orange" />), headerShown:false,}}/>
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


 
  