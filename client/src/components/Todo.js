// 1. 함수형 컴포넌트
// 2. input(checkbox) 와 label을 렌더링하는 컴포넌트!
// 3. App (부모 컴포넌트)에서 Todo (자식 컴포넌트) 1개를 렌더링
import { useState } from "react";
import "../styles/Todo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
    console.log(e);
    console.log(e.target);

    let TodoText = e.target.nextSibling;
    if (e.target.checked) {
      TodoText.classList.add("cancelLine");
    } else {
      TodoText.classList.remove("cancelLine");
    }
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  let TodoTextCL;

  if (item.done) {
    TodoTextCL = "TodoText cancelLine";
  } else {
    TodoTextCL = "TodoText";
  }

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        className="TodoCheck"
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onClick={checkedChange}
      />
      {/* <label htmlFor={`todo${item.id}`}>{item.title}</label> */}

      <input
        type="text"
        className={TodoTextCL}
        value={todoItem.title}
        readOnly={readOnly}
        onChange={editEventHandler}
        onClick={readChange}
        onKeyPress={handleKeyPress}
      />

      <button onClick={() => deleteBtn(item.id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Todo;
