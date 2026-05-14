import { Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
    title: string,
    onPress: () => void
}

export default function Button({title, onPress}: Props){
    return (
        <View>
           

            <Pressable  style={styles.button} onPress={onPress}> <Text style={styles.text}>{title}</Text></Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 24,
    },
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "white",
        height: 300,
        width: 300,
        
    },
    button: {
        marginTop:20,
        width: "100%",
        backgroundColor: "rgba(45, 168, 184, 0.2)",
        paddingVertical: 12,
        textAlign: "center",
        borderRadius: 20,
        padding: 20,
        fontWeight: 700,  
    },
    Image: {
        width: 200,
        height: 200,
        
    }
})