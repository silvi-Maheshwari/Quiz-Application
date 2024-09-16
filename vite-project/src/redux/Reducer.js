import { quizsucess } from "./Action"
const initalvalue={
    quiz:[],

}

const reducers=(state=initalvalue,action)=>{
   switch(action.type){
    case quizsucess:{
        return{
            ...state,
            quiz:action.payload
        }
    }
    default:
        return state
   } 
}
export default reducers;
