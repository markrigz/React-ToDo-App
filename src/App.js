import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, deleteTodo }) {
	return (
		<div
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
			className="todo"
		>
			<li>{todo.text}</li>
			<div>
				<button onClick={() => completeTodo(index)}>Mark as Complete</button>
        <button onClick={() => deleteTodo(index)}>X</button>
			</div>
		</div>
	);
}

function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;

		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder="Add New ToDo"
			/>
		</form>
	);
}

function App() {
	const [todos, setTodos] = useState([
		{
			text: "Learn about React",
			isCompleted: false
		},
		{
			text: "Meet friend, little joey dineski",
			isCompleted: false
		},
		{
			text: "Peel an orange for a laugh",
			isCompleted: false
		}
	]);

	const addTodo = text => {
		const NewTodos = [...todos, { text }];
		setTodos(NewTodos);
	};

	const deleteTodo = index => {
		const newTodos = [...todos];
    newTodos.splice(index, 1);
		setTodos(newTodos);
  };
  
  const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
            deleteTodo={deleteTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
