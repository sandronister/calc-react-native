import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { redBright } from 'colorette'

const styles = StyleSheet.create({
    
    display:{
        flex:1, 
        padding:20, 
        justifyContent:'center', 
        backgroundColor:'rgba(0,0,0,0.6)', 
        alignItems:'flex-end'
    }, 
    displayValues:{
        fontSize:60, 
        color:'#FFF'
    }
})

export default props => 
    <View style={styles.display}>
        <Text
            style={styles.displayValues}
            numberOfLines={1}>
            {props.displayValue}
        </Text>
    </View>