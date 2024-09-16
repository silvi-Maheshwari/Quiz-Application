import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { quizsucess } from '../redux/Action';
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer,grid,Grid,Heading,Text } from '@chakra-ui/react'



const Quiz = () => {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quiz1);
  const[page,setpage]=useState(1)
  const [selectedAnswers, setSelectedAnswers] = useState({}); 
  const[score,setscore]=useState(0)
  const[total,setotal]=useState(0)
  const[check,setcheck]=useState(true)



  const getdata = () => {
    
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz?page=${page}&limit=1`)
      .then((res) => {
        console.log(res.data.data);
        dispatch({ type: quizsucess, payload: res.data.data }); 
      })
      .catch((err) => {
        console.log(err);
       
      });
  };

  useEffect(() => {
    getdata();
  }, [page]); 

  const handleNext=()=>{
    setpage((prev)=>prev+1)
  }
  const handleprev=()=>{
    setpage((prev)=>prev-1)
  }
  const handleButton = (e) => {
   
    let currentScore = 0;
    for (key in selectedAnswers) {
      if (selectedAnswers[key]) {
        currentScore += 1;
      }
    }
setscore(currentScore)
  
    setscore(currentScore);
    setotal(total + currentScore);
    console.log("Score:", currentScore);
  };

  
  const handlechange = (questionId, correctOptionIndex, index) => {
    setSelectedAnswers({
      ...selectedAnswers,
    
      
        isCorrect: index === correctOptionIndex,
      
    });
    
  };
  console.log(selectedAnswers)

  const handleSkip=()=>{
    setpage(page+1)
  }
  
  const handlereset=()=>{
    setpage(1)
    setotal(0)
  }

  return (
    <>
    <Box margin={'20px'}>
     <Flex justifyContent={'space-between'}>
    <Heading as='h6' size='2xl' >
   Quiz App
  </Heading>
  <Button   colorScheme='teal' onClick={handleButton}>Finish</Button>
  </Flex>

    <Box>
        {quiz.map((el) => (
          <Box key={el.id} marginTop={'50px'} marginLeft={'20px'}>
             <Heading as='h2' size='xl'>
             {el.id}. {el.question}
  </Heading>
           
            {el.options.map((option, index) => (
              <div key={index} style={{marginTop:"30px",display:"flex", marginLeft:"5px",gap:"10px"}}>
                <input type="checkbox" value={option}  onChange={()=>handlechange(el.id,el.correctOptionIndex,index)} />
                  <Text >
 {option}
  </Text>
              </div>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
   
   
    <Flex justifyContent={'space-between'} marginTop={'50px'} margin={'40px'}  > 
     
    <Button  colorScheme='teal' onClick={handleprev} isDisabled={page==1}>Prev Page</Button>
    <Button colorScheme='teal' onClick={handleSkip}>Skip</Button>
<Button  colorScheme='teal' onClick={handleNext} isDisabled={page==10}>Next Page</Button>




</Flex>

<Heading as='h2' size='lg'  marginTop={'20px'} textAlign={'center'}>
    Total Score:- {total}/10
  </Heading>
  <Box textAlign={'center'} marginTop={'10'}>
 <Button colorScheme='teal'onClick={handlereset} >restart the quiz</Button>
 </Box> 

        </>
  );
};

export default Quiz;
