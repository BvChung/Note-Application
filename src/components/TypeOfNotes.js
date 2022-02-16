import React from "react";
import EditNote from "./EditNote";
import { FiTrash2, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";
import NewNote from "./NewNote";
import PinNoteList from "./PinNoteList";

export default function Notes({
	id,
	text,
	date,
	day,
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
				<NewNote
					id={id}
					text={text}
					date={date}
					day={day}
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
					text={text}
					date={date}
					day={day}
					saveNote={saveNote}
					toggleEdit={toggleEdit}
					completedNote={completedNote}
					deleteNote={deleteNote}
				/>
			)}
		</div>
	);
}
