import React from 'react';
import Header from './Header';
import Para from './Para';
import Footer from './Footer';


function AnswerPage() {

  
const fixedMessage = 'Hi CodeYogi , Please Answer My Questions'  

 const [question, setQuestion] = React.useState(''); 
const [petition, setPetition] = React.useState('');
const [answer, setAnswer] = React.useState('');

let [answerVisible, setAnswerVisible] = React.useState(false);
const [moment, setMoment] = React.useState(false); 
const [defaultAnswer, setDefaultAnswer] = React.useState([
  
  'I am Not Able To Answer This Questions',
])  

  
const onChangePetition = (event) => {
  
  const newPetition = event.target.value;
  const newLength = newPetition.length;
  const oldLength = petition.length;
  
  if(newPetition.includes('[')){
    
    setMoment(!moment);
    setPetition(fixedMessage.substring( 0, newLength ))
    
  } else if(moment) {
    
   setPetition(fixedMessage.substring( 0, newLength ));

    if(newLength < oldLength) {
      setAnswer(answer.substring(0, answer.length - 1));
    } else {
       setAnswer(answer + newPetition.substring(newPetition.length - 1));
    }
} else {
    setPetition(newPetition)
}
}

  const onChangeQuestion= (event) => {
    const newQuestion = event.target.value;
    setQuestion(newQuestion)
    if(newQuestion.includes('?')){
      setAnswerVisible(!answerVisible);
    }
  }

  const reset = () => {
    setAnswerVisible(false);
    setPetition('');
    setQuestion('');
    setAnswer('');
  }
  
  return (
    <div className="px-10 sm:px-96 py-16 h-screen ">
      
    <Header>Ask, CodeYogi</Header>

      <div className="mt-12">
      <Para></Para>
      </div>
        
    <div className="mt-12"> 
  <input value = {petition} onChange = {onChangePetition} className="w-full placeholder:text-xl py-2 px-4 border-4 border-green-500" placeholder="You Must Enter The Petition." />
  <input  value = {question} onChange = {onChangeQuestion}  className="w-full mt-4 placeholder:text-xl py-2 px-4 border-4 border-green-500" placeholder="What Can I Answer For You ?" />  
    </div>

      <div className="mt-12 text-center">
      <Footer></Footer>
      </div>
        
      {answerVisible && <div className="fixed flex justify-center items-center h-screen w-screen top-0 left-0">
        
        <div className="bg-white p-4">
          
          
            <div className=" text-center py-6 px-36 ">
        <h1 className="text-5xl text-green-600 mb-4">CodeYogi Answer's</h1>
          {answer && <h1>"{answer}".</h1>}
          {!answer && <h1>"{defaultAnswer}".</h1>}
        </div>

          <div className="flex items-end">
 <button onClick={reset} className="px-3 border-2 border-red-500 "><img 
className="w-14 h-12" src="https://www.siue.edu/~itoberm/Images/tryagain.gif" /></button>
          </div>
        
        </div>  
      </div>}
      
      </div>
  );
}



export default AnswerPage;