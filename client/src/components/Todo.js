// 1. 함수형 컴포넌트
// 2. input(checkbox) 와 label을 렌더링하는 컴포넌트!
// 3. App (부모 컴포넌트)에서 Todo (자식 컴포넌트) 1개를 렌더링
import { useState } from "react";
// import "../styles/Todo.scss";

const Todo = (props) => {
  const { item, deleteItem } = props;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);
  const deleteBtn = (id) => {
    deleteItem(id);
  };

  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  const readChange = (e) => {
    setReadOnly(false);
    console.log("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };
  const checkedChange = (e) => {
    const { done, ...rest } = todoItem;

    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onClick={checkedChange}
      />
      {/* <label htmlFor={`todo${item.id}`}>{item.title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onChange={editEventHandler}
        onClick={readChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => deleteBtn(item.id)}>DELETE</button>
    </div>
  );
};

export default Todo;
