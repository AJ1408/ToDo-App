import React, { useState } from 'react';
import { useTodo } from '../Context';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div className='flex border border-black rounded-3xl mb-2 bg-white/20 text-black px-3 py-1.5 gap-x-3 items-center'>
            <input
                type='checkbox'
                className='w-5 h-5 accent-blue-500 cursor-pointer'
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type='text'
                className={`w-full bg-transparent outline-none 
                    ${isTodoEditable ? 'border-b border-black' : ''} 
                    ${todo.completed ? 'line-through text-gray-500' : ''}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit Button */}
            {!isTodoEditable && (
                <button
                    className='bg-green-500 text-white px-3 py-1 rounded-3xl hover:bg-green-600 duration-150 disabled:opacity-50'
                    onClick={() => !todo.completed && setIsTodoEditable(true)}
                    disabled={todo.completed}
                >
                    Edit
                </button>
            )}

            {/* Save Button */}
            {isTodoEditable && (
                <button
                    className='bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 duration-150'
                    onClick={editTodo}
                    disabled={!todoMsg.trim()}
                >
                    Save
                </button>
            )}

            {/* Delete Button */}
            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-red-500 text-white hover:bg-red-600 duration-150'
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
