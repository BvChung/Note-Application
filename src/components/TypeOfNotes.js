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

	const [pinNote, setPinNote] = React.useState(false);
	function togglePinNote() {
		setPinNote((prevPin) => !prevPin);
	}

	return (
		<div>
			{!edit ? (
				<NewNote
					id={id}
					text={text}
					date={date}
					saveNote={saveNote}
					deleteNote={deleteNote}
					toggleEdit={toggleEdit}
					completedNote={completedNote}
					toggleCompleted={toggleCompleted}
					togglePinNote={togglePinNote}
					getPinNoteData={getPinNoteData}
				/>
			) : (
				<EditNote
					id={id}
					text={text}
					date={date}
					saveNote={saveNote}
					toggleEdit={toggleEdit}
				/>
			)}
		</div>
	);
}
