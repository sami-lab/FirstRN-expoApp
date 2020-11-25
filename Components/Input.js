import React from 'react';
import {StyleSheet,Switch,View,Text} from 'react-native'
import {TextInput} from 'react-native-paper'

const Input=(props)=>{
    const styles= {
        root:{
            flex:1,
         },
         inputStyle:{
             margin:5
         },
        Invalid:{
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: "rgba(256, 0, 0, 0.3)"        
        },
    }
    const theme = {
        colors:{
            primary:"#006aff"
        }
    }
    let inputElement = null;
    const inputclasses = [styles.inputStyle];
    if(props.invalid && props.shouldValidate && props.touched){
        inputclasses.push(styles.Invalid);
    }
    switch(props.elementType){
        case ( 'input' ):
             inputElement =  <TextInput
                 label={props.label}
                 {...props.elementConfig}
                 style={inputclasses.join(' ')}
                 value={props.value}
                theme={theme}
                mode="outlined"
               onChangeText={text => props.inputchangehandler(text,props.label)}
                />
             break;
        case ( 'switch' ):
            inputElement = (
                <View style= {{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 18}}>{props.label}</Text>
                <Switch value={props.value}
                onValueChange={text=> props.inputchangehandler(text,props.label)}/>
                </View>
            )
            break;
         default:
            inputElement = <TextInput
            label={props.label}
            {...props.elementConfig}
           style={inputclasses.join(' ')}
            value={props.value}
           theme={theme}
           mode="outlined"
          onChangeText={text => props.inputchangehandler(text,props.label)}/>
    }
    

   
    return (
        <View>
                {inputElement}
        </View>
       
    )
    
}

export default Input;