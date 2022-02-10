import React from "react";
import "../index.css";
import AddNote from "./AddNote";
import Notes from "./Notes";

export default function NoteList({ notes, saveNote, deleteNote, editNote }) {
	console.log(notes);
	return (
		<div className="notes-list">
			{notes.map((note) => {
				return (
					<Notes
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						deleteNote={deleteNote}
						editNote={editNote}
					/>
				);
			})}
			<AddNote notes={notes} saveNote={saveNote} />
		</div>
	);
}
