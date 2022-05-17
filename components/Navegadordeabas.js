import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Teladepesquisa from "../screens/teladepesquisa";
import Teladetransacao from "../screens/teladetransacao";


var aba = createBottomTabNavigator();

export default class Navegadordeabas extends Component {
    render(){
        return(
         <NavigationContainer>
             <aba.Navigator>
                 <aba.Screen name="Transação" component={Teladetransacao}/>
                 <aba.Screen name="Pesquisa" component={Teladepesquisa}/>
             </aba.Navigator>
         </NavigationContainer>   
        )
    }
}

