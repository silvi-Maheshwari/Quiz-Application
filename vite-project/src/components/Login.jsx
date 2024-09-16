import { Card ,FormControl, Input,Button,CardBody,Text, Heading} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CheckLogin from './Featchdata';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
const Login = () => {
    const dispatch=useDispatch();
    const {isLoading, isError,token}=useSelector((state)=>state.auth)
    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('')
    console.log("token ===>", token)
      const navigate=useNavigate();
    useEffect(()=>{
      if(token){
        navigate('/quiz')
      }
    },[token,navigate])
    const handleSubmit=(e)=>{
            e.preventDefault();
            console.log("Form Clicked")
            dispatch(CheckLogin(email, password ));
    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        if(name=='email'){
            setEmail(value);
        }
       else if(name=='password'){
            setPassword(value)
        }
    }
    return (
        <Card borderRadius={30}  m={'auto'} w={650} h={400} mt={100} textAlign={'center'} bg={'lightpink'} >
             <Heading m={'10px'}>Login Form</Heading>
            <CardBody justify={'center'} margin={10}>
                <FormControl  >
                    <Input fontSize={'large'} fontWeight={'bold'} m={5} type="email" name='email' onChange={handleChange} value={email} placeholder='Enter your email' required/>
                    <Input fontSize={'large'} fontWeight={'bold'} m={5} type="password" name='password' value={password} placeholder='Enter Password' required onChange={handleChange} />
                    <Button mt={7} bg={'pink'}fontSize={'larger'} fontWeight={'bold'} type='submit' onClick={handleSubmit} isLoading={isLoading}>Login</Button>
                </FormControl>
                {isError && < Text color="red" fontSize={20} fontWeight={'bold'}>Error logging in. Please try again.</Text>}
                {token && <Text color="green" fontSize={20} fontWeight={'bold'}>Login successful! Token: {token}</Text>}
            </CardBody>
        </Card>
    )
}
export default Login