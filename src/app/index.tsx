import {Pressable,Image,StyleSheet,Text, View} from "react-native"

import Button from "../../components/ui/button"
import { router } from "expo-router"
import { push } from "expo-router/build/global-state/routing"
const tarefa = [
    {id: 1, texto: "Limpar a casa"},
    {id: 2, texto: "Limpar a louça"}
]
export default function Index(){
    return (
        
        <View style={styles.container}>
       
        <Image   style={styles.Image}   source={require("../app/Group.png")}></Image>
        
        <Button   title="Click aqui"     onPress={() => router.push("/")}></Button>
        <Button     title="Click"   onPress={() => router.push("/login")}></Button>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        height:400,
        flex:1,
    },
    btn: {

        justifyContent: "center",
        alignContent: 'center',
        marginTop:20,
        textAlign:"center",
        height:'5%',
        borderRadius: 20,
        backgroundColor: "white",
        width:'20%',

    },
    Image: {
        marginBottom:100,
    }
})