import React from "react";

export default function EditNote({
	id,
	text,
	date,
	day,
	saveNote,
	toggleEdit,
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
				rows="8"
				cols="10"
				placeholder="Type to add a note"
			></textarea>
			<div className="note-details">
				<small>date</small>

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
