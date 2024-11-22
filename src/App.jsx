/* eslint-disable react/prop-types */
import { useState } from 'react'


function App() {
  //defining the initial state.
  // const [count, setCount] = useState(0)

  const [todos,setTodos] = useState([{
    title : "go to gym",
    description : "gymming",
    completed : false
  },{
    title : "study dsa",
    description : "leetcode BC",
    completed : true
  },{
    title : "study dsa",
    description : "leetcode BC",
    completed : true
  }
])
//to add new todo.
function addTodo(){
  setTodos([...todos,{
    title:"New title",
    description:"New description"
  }
  ])
}


  return (
    
      <div>

            {/* <button onClick={onClickHandler}>Counter {count} </button> */}
            {/* <CustomButton count={count} setCount={setCount}/>
            write and JS in curly braces. */}
            <button onClick={addTodo}>Add a random todo</button>

            <Todo title={todos[0].title} description={todos[0].description}/>
            <br/>
            <Todo title={todos[1].title} description={todos[1].description}/>

                        {/* OR */}
                        <br/>
                        <br/>
                        <br/>
                        <br/>

            {todos.map(function(props){
              // eslint-disable-next-line react/jsx-key
              return <Todo title={props.title} description={props.description}/>
            })}            



      </div>

  )
}

// //component
// // eslint-disable-next-line no-unused-vars
// function CustomButton(props){// can take state variables as ip

//   // const onClickHandler = ()=>{
//   //   // let a = parseInt(state.count);
//   //  props.setCount(count+1);
//   //   // return state.count;
//   // }
//   function onClickHandler(){

//     // eslint-disable-next-line react/prop-types
//     props.setCount(props.count+1);
//   }
  
//   return <button onClick={onClickHandler}> 
//       Counter {props.count}
//   </button>
// }


//todo app,{}

function Todo(props){//a simple todo componenet to render title and description.
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}



export default App
