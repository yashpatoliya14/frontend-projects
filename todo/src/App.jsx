import { useEffect, useState } from 'react';
import TodoContextProvider from './context/TodoContextProvider';
import TodoForm from './components/TodoFrom';
import TodoItem from './components/TodoItem';

function App() {

  let [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  function updateTodo(id, todo) {
    setTodos(prev => prev.map(prevEach => prevEach.id === id ? { ...todo, id } : prevEach));
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(prevEach => prevEach.id !== id));
  }

  function toggleCompleted(id) {
    setTodos(prev => 
        prev.map(prevEach => 
            prevEach.id === id ? { ...prevEach, completed: !prevEach.completed } : prevEach
        )
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App;
