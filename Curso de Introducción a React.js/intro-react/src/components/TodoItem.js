import React from "react";
import "../styles/TodoItem.css";
import { FiTrash2 } from "react-icons/fi";
import { FcCommandLine } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

function TodoItem(props) {
  const onComplete = () => {
    alert('Ya completaste el todo ' + props.text);
  };
  const onDelete = () => {
    alert('Borraste el todo ' + props.text);
  };
  
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete}>
      x
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        <FiTrash2 />
      </span>
    </li>
  );
}

export { TodoItem };