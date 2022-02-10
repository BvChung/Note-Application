import React from "react";
import "../index.css";
import AddNote from "./AddNote";
import Notes from "./Notes";

export default function NoteList({
	notes,
	saveNote,
	deleteNote,
	findNoteId,
	currentId,
}) {
	return (
		<div className="notes-list">
			{/* Iterate through notes data and render Notes */}
			{notes.map((note) => {
				return (
					<Notes
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						deleteNote={deleteNote}
						saveNote={saveNote}
						findNoteId={findNoteId}
						currentId={currentId}
					/>
				);
			})}
			<AddNote notes={notes} saveNote={saveNote} />
		</div>
	);
}
