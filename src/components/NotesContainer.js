import React from "react";
import "../index.css";
import AddNote from "./AddNote";
import TypeOfNotes from "./TypeOfNotes";

export default function NoteList({
	notes,
	saveNote,
	deleteNote,
	getPinNoteData,
	createNote,
}) {
	return (
		<div className="notes-list">
			{createNote && <AddNote notes={notes} saveNote={saveNote} />}

			{/* Iterate through notes data and render Notes */}
			{notes.map((note) => {
				return (
					<TypeOfNotes
						key={note.id}
						id={note.id}
						title={note.title}
						text={note.text}
						date={note.date}
						dayCreated={note.dayCreated}
						deleteNote={deleteNote}
						saveNote={saveNote}
						getPinNoteData={getPinNoteData}
					/>
				);
			})}
		</div>
	);
}
