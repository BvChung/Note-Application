import React from "react";
import "./index.css";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";

export default function App() {
	const [notes, setNotes] = React.useState([]);
	const [currentId, setCurrentId] = React.useState("");

	function findNoteId(noteId) {
		setCurrentId(noteId);
	}

	function saveNote(noteData) {
		// noteData is an object containing id,data,text
		// If noteData.id exists then the existing note is being edited
		if (noteData.id) {
			setNotes((prevNotes) =>
				prevNotes.map((note) => {
					if (note.id === noteData.id) {
						return {
							...noteData,
						};
					} else {
						return {
							...note,
						};
					}
				})
			);
		}

		// noteData.id does not exist => create a new note
		else {
			const currentDate = new Date();
			const convertedTime = currentDate.toLocaleString("en-US", {
				day: "numeric",
				month: "numeric",
				year: "numeric",
			});
			const newNote = {
				id: nanoid(),
				date: convertedTime,
				text: noteData.text,
			};

			setNotes((prevNotes) => [...prevNotes, newNote]);
		}
	}

	function deleteNote(id) {
		console.log("note deleted", id);
		setNotes((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== id;
			})
		);
	}

	return (
		<div className="app-container">
			<NoteList
				notes={notes}
				saveNote={saveNote}
				deleteNote={deleteNote}
				currentId={currentId}
				findNoteId={findNoteId}
			/>
		</div>
	);
}
