import React from "react";
import "./index.css";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import Search from "./components/Search";

export default function App() {
	const [notes, setNotes] = React.useState([]);

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

	const [searchText, setSearchText] = React.useState("");

	function handleSearchText(event) {
		const { value } = event.target;
		setSearchText(value);
	}

	return (
		<div className="app-container">
			<Search searchText={searchText} handleSearchText={handleSearchText} />
			<NoteList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText.toLowerCase())
				)}
				saveNote={saveNote}
				deleteNote={deleteNote}
			/>
		</div>
	);
}
