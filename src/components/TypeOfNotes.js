import React from "react";
import EditNote from "./EditNote";
import Note from "./Note";

export default function Notes({
	id,
	title,
	text,
	date,
	noteColor,
	dayCreated,
	deleteNote,
	saveNote,
	saveNoteColor,
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

	const [saveColor, setSaveColor] = React.useState(noteColor || "");
	function changeColor(color) {
		setSaveColor(color);
	}

	React.useEffect(() => {
		saveNoteColor({
			id: id,
			noteColor: saveColor,
		});
	}, [saveColor]);
	// console.log(noteColor);

	return (
		<div>
			{!edit ? (
				<Note
					id={id}
					title={title}
					text={text}
					date={date}
					noteColor={noteColor}
					saveColor={saveColor}
					saveNoteColor={saveNoteColor}
					dayCreated={dayCreated}
					saveNote={saveNote}
					deleteNote={deleteNote}
					toggleEdit={toggleEdit}
					completedNote={completedNote}
					toggleCompleted={toggleCompleted}
					togglePin={togglePin}
					getPinNoteData={getPinNoteData}
					changeColor={changeColor}
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
					changeColor={changeColor}
				/>
			)}
		</div>
	);
}
