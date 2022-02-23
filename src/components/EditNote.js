import React from "react";
import { FiTrash2, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import Color from "./Color";

export default function EditNote({
	id,
	title,
	text,
	date,
	noteColor,
	dayCreated,
	saveNote,
	toggleEdit,
	deleteNote,
	changeColor,
}) {
	const [editedText, setEditedText] = React.useState({
		id: id,
		date: date,
		dayCreated: dayCreated,
		title: title,
		text: text,
		noteColor: noteColor,
	});

	function handleEdit(event) {
		const { name, value } = event.target;
		setEditedText((prevEditText) => {
			return {
				...prevEditText,
				[name]: value,
			};
		});
	}

	return (
		<div className="note new">
			<div className="note-details">
				<FiTrash2 onClick={() => deleteNote(id)} className="trash-icon" />
				<button
					onClick={() => {
						saveNote(editedText);
						toggleEdit();
					}}
				>
					Done edit
				</button>
			</div>
			<textarea
				name="title"
				value={editedText.title}
				onChange={handleEdit}
				rows="1"
				cols="2"
				maxLength="20"
				placeholder="Title"
			></textarea>
			<textarea
				name="text"
				value={editedText.text}
				onChange={handleEdit}
				rows="6"
				cols="10"
				placeholder="Type to add a note"
			></textarea>
		</div>
	);
}
