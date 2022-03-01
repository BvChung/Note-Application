import React from "react";
import EditNote from "./EditNote";
import Note from "./Note";

export default function TypeOfNotes({
	id,
	title,
	text,
	date,
	noteColor,
	dayCreated,
	deleteNote,
	saveNote,
	saveNoteColor,
	getPinNoteData,
	switchNoteView,
	unpinNote,
	deletePinNote,
}) {
	const [edit, setEdit] = React.useState(false);
	function toggleEdit() {
		setEdit((prevEdit) => !prevEdit);
	}

	const [completedNote, setCompletedNote] = React.useState(false);
	function toggleCompleted() {
		setCompletedNote((prevCompletedNote) => !prevCompletedNote);
	}

	const [pin, setPin] = React.useState(false);
	function togglePin() {
		setPin((prevPin) => !prevPin);
	}

	return (
		<div>
			{!edit ? (
				<Note
					id={id}
					title={title}
					text={text}
					date={date}
					noteColor={noteColor}
					saveNoteColor={saveNoteColor}
					dayCreated={dayCreated}
					saveNote={saveNote}
					deleteNote={deleteNote}
					toggleEdit={toggleEdit}
					completedNote={completedNote}
					toggleCompleted={toggleCompleted}
					togglePin={togglePin}
					getPinNoteData={getPinNoteData}
					switchNoteView={switchNoteView}
					unpinNote={unpinNote}
					deletePinNote={deletePinNote}
					pin={pin}
				/>
			) : (
				<EditNote
					id={id}
					title={title}
					text={text}
					date={date}
					noteColor={noteColor}
					saveNoteColor={saveNoteColor}
					dayCreated={dayCreated}
					saveNote={saveNote}
					toggleEdit={toggleEdit}
					completedNote={completedNote}
					deleteNote={deleteNote}
					switchNoteView={switchNoteView}
				/>
			)}
		</div>
	);
}
