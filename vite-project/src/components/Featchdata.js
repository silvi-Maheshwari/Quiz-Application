import axios from "axios"
import { LOGIN_FAILED,LOGIN_SUCCESSFULL,LOGIN_REQUEST } from "../redux/Action";
const CheckLogin=(email, password)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const response= await axios.post('https://reqres.in/api/login',{email,password} );
        dispatch({type:LOGIN_SUCCESSFULL,payload:response.data})
        console.log(response.data)
    }
    catch(error){
        dispatch({type:LOGIN_FAILED,payload:error.response.data.error})
    }
}
export default CheckLogin