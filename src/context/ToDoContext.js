import { createContext, useContext } from "react";

export default ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "First Task",
            completed: false,
        }
    ],
    addToDo: (todo) => {},
    deleteToDo: (id) => {},
    updateToDo: (id, todo) => {},
    toggleComplete: (id) => {},
});

export const ToDoContextProvider = ToDoContext.Provider;

export const useToDo = () => {
    return useContext(ToDoContext);
}