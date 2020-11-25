import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const Goals = (props)=>{
    return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.OnDelete.bind(this,props.id)}>
      <View  style= {styles.listItem}>
            <Text >{props.title}</Text> 
      </View>
    </TouchableOpacity>
  )
}
const styles= StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical: 10,
        backgroundColor:'#ccc',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center'
      },
})
export default Goals;