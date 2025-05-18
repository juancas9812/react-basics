import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()){
      setTodoList([...todoList, inputVal]);
      setInputVal("");
    }
  }
  
  const handleChange = (e) => {
    setInputVal(e.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add task" value={inputVal} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      
      <ul>
        {todoList.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>

    </div>
  )
}

export default TodoList;