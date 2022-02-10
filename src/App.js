import React, { useState } from "react";
import Form from "./components/AddNote";
import "./index.css";
import NoteList from "./components/NoteList";
import CreateTask from "./components/Notes";
import { nanoid } from "nanoid";

export default function App() {
	const [notes, setNotes] = React.useState([]);

	function saveNote(noteText) {
		// console.log(`Saved text: ${noteText}`);
		const currentDate = new Date();
		const convertedTime = currentDate.toLocaleString("en-US", {
			day: "numeric",
			month: "numeric",
			year: "numeric",
		});
		const newNote = {
			id: nanoid(),
			date: convertedTime,
			text: noteText,
		};

		setNotes((prevNotes) => [...prevNotes, newNote]);
	}

	function deleteNote(id) {
		console.log("note deleted", id);
		setNotes((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== id;
			})
		);
	}

	function editNote(id) {
		console.log("note edit", id);
		const find = notes.find((note) => note.id === id);
		console.log(find);
	}

	return (
		<div className="app-container">
			<NoteList
				notes={notes}
				saveNote={saveNote}
				deleteNote={deleteNote}
				editNote={editNote}
			/>
		</div>
	);
}
