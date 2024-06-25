import { useRef } from 'react'
import './App.css'
import toast from 'react-hot-toast'

//redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function App() {
  const dispatch = useDispatch()
  const inputText = useRef()

  const {todos} = useSelector((state) => state.todos)
  
  

  const handeSubmit = (e) =>{
    e.preventDefault();
    const InputValue = inputText.current.value.trim;
    if (InputValue) {
      dispatch(addTodo(InputValue));
      toast.success("Added succes")
    } else {
      alert("Error")
      toast.error("Please, Write something!")
    }

    inputText.current.value = ""
  }

  return (
    <>
      <h1>Todo List - {todos.length}</h1>
      <form onSubmit={handeSubmit}>
        <div className='form-input'>
          <span>Text:</span>
          <input ref={inputText} type="text" />
        </div>
        <button>Add</button>
      </form>
    </>
  )
}

export default App
