import React from 'react';

function Todo({ todo, index, markTodo, deleteTodo}) {
  
  const buttonText = todo.isCompleted ? "Mark inComplete" : "Mark Complete";


	return (
		<div
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
			className="todo"
		>
			<li>{todo.text}</li>
			<div>
				<button onClick={() => markTodo(index)}>{buttonText}</button>
				<button onClick={() => deleteTodo(index)}>X</button>
			</div>
		</div>
	);
}

export default Todo;

