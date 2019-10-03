import React, { useState } from 'react';

function Todo({ todo, index, completeTodo, deleteTodo }) {
	const [buttonText, setButtonText] = useState("Mark Complete");

	return (
		<div
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
			className="todo"
		>
			<li>{todo.text}</li>
			<div>
				<button onClick={() => completeTodo(index)}>{buttonText}</button>
				<button onClick={() => deleteTodo(index)}>X</button>
			</div>
		</div>
	);
}

export default Todo;

