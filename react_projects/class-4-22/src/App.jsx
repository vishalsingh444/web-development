import { useState } from 'react'
import './App.css'



//todo application 
//todo
// {
//    todos: [{title:"todo1",description:"first todo",completed: false}]
// }
function App() {
  const [todos, setCount] = useState([{
    title:"Go to gym",
    description: "go to gym from 7-9",
    completed: false
  },{
    title:"study DSA",
    description: "Study DSA from 9-10",
    completed: true
  }]);
  console.log(setCount);
 
  
  return (
    <div>
      
    </div>
  )
}

function Todo(props){
  
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
