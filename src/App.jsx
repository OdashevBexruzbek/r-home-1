import { useRef } from 'react'
import './App.css'
import toast from 'react-hot-toast'

//redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo, changeStatusTodo } from './todoSlice'

function App() {
  const dispatch = useDispatch()
  const inputText = useRef()

  const {todos, completedCount, unCompletedCount} = useSelector((state) => state.todos)

  const handeSubmit = (e) =>{
    e.preventDefault();
    const InputValue = inputText.current.value.trim();
    if (InputValue) {
      dispatch(addTodo({
        id: Math.floor(Math.random() * 100),
        text: InputValue,
        completed: false,
      }));
      toast.success("Added succes")
    } else {
      alert("Error")
      toast.error("Please, Write something!")
    }

    inputText.current.value = ""
  }

  return (
    <>
    <div>
    {/* <video className='bg-video' src="./todo-bg.mp4" autoPlay muted loop></video> */}
      <h1>Todo List - {todos.length}</h1>
      <form onSubmit={handeSubmit}>
        <div className='form-input'>
          <span>Text:</span>
          <input ref={inputText} type="text" />
        </div>
        <button>Add</button>
      </form>

      {todos.map((todos) =>{
        return (
          <div key={todos.id} className={`todo-form ${todos.completed ? 'completed' : "" }`}>
            <h4>{todos.text}</h4>
            <div className='check-btn'>
              <input type="checkbox" onClick={() => dispatch(changeStatusTodo(todos.id))}
              checked={todos.completed} readOnly/>
              <button onClick={() =>dispatch(removeTodo(todos.id))}>Deleted</button>
            </div>
          </div>
        )
      })}

      <div>
        <h4>Completed: {completedCount}</h4>
        <h4>UnCompleted: {unCompletedCount}</h4>
      </div>
    </div>
    
    </>
  )
}

export default App
