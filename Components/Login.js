import React,{Component} from 'react';
import Input from './Input';
import {Button,View} from 'react-native'
import {checkvalidity} from './checkValidity'

class login extends Component{
    state={
        LoginForm:{
            email: {
                elementType : 'input',
                elementConfig:{
                      type:'email',
                      placeholder: 'Your Email'
                },
                value: '',
                validation:{
                    required : true,
                    isEmail: true
                },
                isValid : false,
                touched: false
            },
            Password: {
                elementType : 'input',
                elementConfig:{
                      type:'Password',
                      placeholder: 'Password'
                },
                value: '',
                validation:{
                    required : true,
                },
                isValid : false,
                touched: false
            },
            RememberMe:{
                elementType :'switch',
                elementConfig:{
                     
                },
                value: false,
                isValid:true
            },            
        },
        formvalidated: false
    }
    inputchangehandler = (text,inputIdentifier) =>{
        const updatedOrderForm ={
            ...this.state.LoginForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        console.log(text,inputIdentifier)
        updatedFormElement.value = text;
        updatedFormElement.isValid=  checkvalidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched= true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].isValid && formIsValid
           
        }
        this.setState({LoginForm:updatedOrderForm,formvalidated:formIsValid})
    }
    render(){
        const formData = [];
      
        for(let inputKey in this.state.LoginForm){
            formData.push({
                id:inputKey,
                config: this.state.LoginForm[inputKey]
            });
        }
        let form =  formData.map(formElement=>(
            <Input key = {formElement.id}
            label= {formElement.id}
            elementType = {formElement.config.elementType}
            elementConfig= {formElement.config.elementConfig}
            value = {formElement.config.value}
            invalid= {!formElement.config.isValid}
            shouldValidate= {formElement.config.validation}
            touched = {formElement.config.touched}
            inputchangehandler = {this.inputchangehandler}
            />
            ))
        return(
            <View>
              
                    {form}
                    <Button title= "Add" /> 
                    
           </View>
        );
    }
}
export default login;