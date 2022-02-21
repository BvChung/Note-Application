import React from "react";
import EditNote from "./EditNote";
import Note from "./Note";

export default function Notes({
	id,
	title,
	text,
	date,
	dayCreated,
	deleteNote,
	saveNote,
	toggleEdit,
	getPinNoteData,
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
					dayCreated={dayCreated}
					saveNote={saveNote}
					deleteNote={deleteNote}
					toggleEdit={toggleEdit}
					completedNote={completedNote}
					toggleCompleted={toggleCompleted}
					togglePin={togglePin}
					getPinNoteData={getPinNoteData}
				/>
			) : (
				<EditNote
					id={id}
					title={title}
					text={text}
					date={date}
					dayCreated={dayCreated}
					saveNote={saveNote}
					toggleEdit={toggleEdit}
					completedNote={completedNote}
					deleteNote={deleteNote}
				/>
			)}
		</div>
	);
}
