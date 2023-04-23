import "./App.css";
import { useEffect, useRef, useState } from "react";
import Completed from "./Components/Completed";
import Cancelled from "./Components/Cancelled";

function App() {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus();
  }, [])
  
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todosDid, setTodosDid] = useState([]);
  const [todosCan, setTodosCan] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, {id: Date.now(), text:todo, status:false}]);
      setTodo('');
    }
  };

  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input">
      
        <form onSubmit={(e) => { e.preventDefault(); addTodo(); }}>

        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
          id="inp"
          ref={inputRef}
          />
          <button type="submit" onClick={() => addTodo()} hidden></button>
          </form>
        <i
          className="fas fa-plus"
          onClick={() => addTodo()
          }
        ></i>
      </div>

      <div className="main-div">
        <div>
          <h2>Current Tasks</h2>
          {todos.map((to,i) => {
            return (
              <p key={i} className="current">
                <input
                  onChange={()=>{
                    setTodosDid([...todosDid,...todos.filter(obj=>{
                      return obj.id === to.id
                    })])
                    setTodos([...todos.filter(obj=>{
                      return obj.id !== to.id
                    })])
                  }}
                  checked={false}
                  type="checkbox"
                  name=""
                  id=""
                  className="cursorPointer"
                />
                {to.text}
                <i className="fas fa-times cursorPointer" onClick={()=>{
                  setTodosCan([...todosCan,...todos.filter(obj=>{
                    return obj.id === to.id
                  })])
                  setTodos([...todos.filter(obj=>{
                    return obj.id !== to.id
                  })])
                }}></i>
              </p>
            );
          })}
        </div>

        <Completed todosDid={todosDid}/>
        
        <Cancelled todosCan={todosCan}/>
        
      </div>
    </div>
  );
}

export default App;
