import React from "react";

export default function EditNote({ id, text, date }) {
	const [editedText, setEditedText] = React.useState({
		id: id,
		text: text,
		date: date,
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
	console.log(editedText);

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

				<button onClick={console.log(editedText)}>Save</button>
			</div>
		</div>
	);
}
