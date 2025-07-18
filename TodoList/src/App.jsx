import "./App.css";
import { useState } from "react";
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
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
