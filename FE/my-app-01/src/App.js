import './App.css';
// import LearningComp from './componint/learningExamples/LearningComp';
// import Counter from './componint/counter/Counter';
import TodoApp from './componint/todo/TodoApp'


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <TodoApp/>
    </div>
  );
}

// function PlayWithProps({property1,property2}){
//   console.log(property1)
//   console.log(property2)
//   return(
//     <div>Props </div>
//   ) 
// }



export default App;
