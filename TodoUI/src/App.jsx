import { useState , useEffect, use } from 'react'
import './App.css'
import TodoItem from './Components/TodoItem'
import { TodoProvider } from './Context'
import TodoFrom from './Components/TodoFrom'
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from './Api/MainAPI';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then((response) => {
      setTodos(response.data);
    }).catch((error) => {
      console.error("Error fetching todos:", error);
    });
  }, []);

  const addTodo = async (todo) => {
    try {
      const response = await createTodo(todo);
      setTodos((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const updateTodoHandler = async (id, updatedTodo) => {
    try {
      const response = await updateTodo(id, updatedTodo);
      setTodos((prev) => prev.map((todo) => todo.id === id ? response.data : todo));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodoHandler = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    const updatedTodo = { ...todo, completed: !todo.completed };
    await updateTodoHandler(id, updatedTodo);
  };
  return (
    <TodoProvider value={{
      todos,
      addTodo,
      updateTodo: updateTodoHandler,
      deleteTodo: deleteTodoHandler,
      toggleComplete
    }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoFrom />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>

  )
}

export default App
