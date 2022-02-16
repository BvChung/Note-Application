import React from "react";

export default function AddNote({ saveNote }) {
	const [noteData, setNoteData] = React.useState({
		id: null,
		date: "",
		text: "",
	});

	function handleNoteChange(event) {
		const { name, value } = event.target;
		setNoteData((prevNoteData) => {
			return {
				...prevNoteData,
				[name]: value,
			};
		});
	}

	function resetAfterSubmit() {
		setNoteData({
			id: null,
			date: "",
			day: "",
			text: "",
		});
	}

	return (
		<div className="note new">
			<textarea
				name="text"
				value={noteData.text}
				onChange={handleNoteChange}
				rows="6"
				cols="10"
				placeholder="Type to add a note"
			></textarea>
			<div className="note-details">
				<button
					onClick={() => {
						saveNote(noteData);
						resetAfterSubmit();
					}}
				>
					Save
				</button>
			</div>
		</div>
	);
}
