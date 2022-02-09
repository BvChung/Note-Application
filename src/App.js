import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

export default function App() {
	const [inputData, setInputData] = useState({
		text: "",
	});

	const [addTask, setaddTask] = useState([]);

	// console.log(inputData);
	// console.log(addTask);
	function handleChange(event) {
		const { name, value } = event.target;

		setInputData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!inputData.text || /^\s*$/.test(inputData.text)) {
			return;
		}
		const todo = {
			id: nanoid(),
			taskText: inputData.text,
		};
		setaddTask((prevTask) => [todo, ...prevTask]);
	}

	return (
		<div>
			<Form
				inputData={inputData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<Todo />
			<List tasks={addTask} />
		</div>
	);
}

const ex = [];
ex.map((m) => m);
