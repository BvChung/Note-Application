import React from "react";

export default function AddNote({ saveNote }) {
	const [noteText, setNoteText] = React.useState("");
	function handleChange(event) {
		const { name, value } = event.target;
		setNoteText(value);
	}
	console.log(noteText);

	return (
		<div className="note new">
			<textarea
				value={noteText}
				onChange={handleChange}
				rows="8"
				cols="10"
				placeholder="Type to add a note"
			></textarea>
			<div className="note-details">
				<small>date</small>

				<button onClick={() => saveNote(noteText)}>Save</button>
			</div>
		</div>
	);
}
