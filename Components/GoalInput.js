import React,{useState} from 'react';
import {View,Button,TextInput,StyleSheet,Modal} from 'react-native';
const textInput = (props)=>{
    const [inputState,setInputState] = useState(null)
   
    return (
        <Modal visible= {props.showModal} animationType ="slide" >
          <View style={styles.inputContainer}>
              <TextInput style= {styles.inputElement}
                      placeholder= "Course Goals"
                      onChangeText={text => setInputState(text)}
                      value={inputState} />
            <View style={{flexDirection: 'row' ,justifyContent: 'space-around',width:'50%'}}>
              <View style={styles.button}>
                  <Button title="Cancel" color= 'red' onPress={props.hideModel}/>   
               </View>
               <View style={styles.button}>
                  <Button title= "Add" onPress= {props.addItem.bind(this,inputState,()=> setInputState(null))}/> 
              </View>
            </View>
          </View>
        </Modal>
    )
}

const styles= StyleSheet.create({
    inputElement:{
        width: '80%' ,
        borderColor: 'black',
         borderWidth: 1 ,
         padding: 10,
         marginBottom: 10
      },
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      button: {
          width: '40%'
      }
})
export default textInput;