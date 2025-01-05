import { ToDoContextProvider } from "./context/ToDoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]); // we can take access of previous values using callback
  };

  const deleteToDo = (id) => {
    setTodos((prevTodos) => {
      prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const updateToDo = (id, todo) => {
    setTodos((prevTodos)=>{
      prevTodos.map((prevTodo)=>{
        return (prevTodo.id === id) ? todo : prevTodo;
      })
    })
  };

  const toggleComplete =(id) => {
    setTodos((prevTodos)=>{
      prevTodos.map((prevTodo)=>{
        return (prevTodo.id === id) ? {...prevTodo, comleted: !prevTodo.cpmpleted} : prevTodo;
      })
    })
  };

  return (
    <ToDoContextProvider
      value={{ todos, addTodo, deleteToDo, updateToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
