// 1. 함수형 컴포넌트
// 2. input과 button을 가짐
import { useState } from "react";
// import "../styles/Todo.scss";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    // props로 받아온 addItem 함수 실행
    addItem(todoItem);
    setTodoItem({ title: "" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => {
          setTodoItem({ title: e.target.value });
        }}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
};

export default AddTodo;
