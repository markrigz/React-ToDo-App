import React, { useState } from "react";
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

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
