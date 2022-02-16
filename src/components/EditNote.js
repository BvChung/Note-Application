import React from "react";
import { FiTrash2, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import TextareaAutosize from "react-textarea-autosize";

export default function EditNote({
	id,
	text,
	date,
	day,
	saveNote,
	toggleEdit,
	deleteNote,
}) {
	const [editedText, setEditedText] = React.useState({
		id: id,
		date: date,
		day: day,
		text: text,
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
	// console.log(editedText.id);

	return (
		<div className="note new">
			<textarea
				name="text"
				value={editedText.text}
				onChange={handleEdit}
				rows="6"
				cols="10"
				placeholder="Type to add a note"
			></textarea>
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
		</div>
	);
}
