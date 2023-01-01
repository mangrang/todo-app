import { useState, useEffect } from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("첫 렌더링 완료!");

    const getTodos = async () => {
      let result = await axios.get("http://localhost:8080/todos");
      console.log(result.data);
      return setTodoItems(result.data);
    };
    getTodos();
  }, []);

  // AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems(state)에 접근 불가능
  // 상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능
  // => App 컴포넌트에 addItem() 함수를 정의하고, 해당 함수를 AddTodo props로 넘겨야 함
  // const [inputTodo, setInputTodo] = useState("");
  const addItem = (newItem) => {
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    if (newItem.title.trim() === "") {
      return;
    }

    const postTodo = async () => {
      let create = await axios.post("http://localhost:8080/todo", {
        title: newItem.title,
      });
      return setTodoItems([...todoItems, create.data]);
    };
    postTodo();
    // setTodoItems([...todoItems, newItem]);

    // {title: 'xx'} <- id, done
    // setTodoItems([A, B])
    // - A: 기존 배열
    // - B: newItem
  };

  const deleteItem = async (targetItem) => {
    // [Before]
    // let newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // setTodoItems(newTodoItems);

    // [After]
    // console.log(targetItem); // {id:x, title: xx, done: x}
    await axios.delete(`http://localhost:8080/todo/${targetItem}`);
    let newTodoItems = todoItems.filter((item) => item.id !== targetItem);
    setTodoItems(newTodoItems);
  };

  const updateItem = async (targetItem) => {
    console.log(targetItem);
    // axios.patch(url, data)
    await axios.patch(
      `http://localhost:8080/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <div className="App">
      <header>✌My Todo App</header>
      <AddTodo addItem={addItem} />
      {todoItems.length ? (
        <div className="todoNum">🚀{todoItems.length} Todos</div>
      ) : (
        <div className="todoNum">🚀 현재 할일이 없습니다.</div>
      )}

      {todoItems.map((item) => {
        // console.log(item); // {id: 1, title: 'My Todo1', done: false}
        return (
          <Todo
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        );
      })}
    </div>
  );
};

export default App;
