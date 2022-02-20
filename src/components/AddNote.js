import React from "react";

export default function AddNote({ saveNote, notes }) {
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

	const date = new Date();
	const currentDate = date.toLocaleString("en-US", {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	});

	return (
		<div className="note new">
			<div className="note-details">
				<small className="date">{currentDate}</small>
			</div>
			<textarea
				name="text"
				value={noteData.text}
				onChange={handleNoteChange}
				rows="6"
				cols="10"
				placeholder="Type to add a note"
			></textarea>
			<div className="note-save">
				<button
					onClick={() => {
						saveNote(noteData);
						resetAfterSubmit();
					}}
				>
					+
				</button>
			</div>
		</div>
	);
}
