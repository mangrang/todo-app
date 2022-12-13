import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "My Todo1",
      done: false,
    },
    {
      id: 2,
      title: "My Todo2",
      done: false,
    },
    {
      id: 3,
      title: "My Todo3",
      done: true,
    },
  ]);

  // AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems(state)에 접근 불가능
  // 상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능
  // => App 컴포넌트에 addItem() 함수를 정의하고, 해당 함수를 AddTodo props로 넘겨야 함
  // const [inputTodo, setInputTodo] = useState("");
  const addItem = (newItem) => {
    newItem.id = Object.keys(todoItems).length + 1;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);

    // {title: 'xx'} <- id, done
    // setTodoItems([A, B])
    // - A: 기존 배열
    // - B: newItem
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => {
        // console.log(item); // {id: 1, title: 'My Todo1', done: false}
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
};

export default App;
