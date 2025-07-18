import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { use } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 1",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "React 2",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "React 3",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
