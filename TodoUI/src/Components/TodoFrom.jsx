import React ,{useState} from 'react'
import { useTodo } from '../Context'

function TodoFrom() {
    const [todo ,setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) =>{
        e.preventDefault()
        
        if(!todo) return 

        addTodo ({todo ,completed :false})
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={add} className='flex gap-2 mb-4'>
            <input type='text' className='w-full border border-black rounded-3xl px-3 outline-none duration-150 bg-white/20'
            placeholder='Write Todo'            
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit' className='bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 duration-150'>Add</button>
        </form>
      
    </div>
  )
}

export default TodoFrom
