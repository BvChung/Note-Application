import React from "react";
import "../css/addnote.css";

export default function AddNote({ saveNote }) {
	const [noteData, setNoteData] = React.useState({
		id: null,
		date: "",
		text: "",
		title: "",
		noteColor: "",
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
			title: "",
		});
	}

	function autosizeTextarea(e) {
		e.target.style.height = "inherit";
		e.target.style.height = `${e.target.scrollHeight}px`;
		// In case you have a limitation
		// e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
	}

	const [show, setShow] = React.useState(false);
	function toggleShow() {
		setShow(true);
	}

	return (
		<div className="noted ">
			<textarea
				className={`title ${show ? "" : "hidden"}`}
				name="title"
				value={noteData.title}
				onChange={handleNoteChange}
				rows="1"
				cols="2"
				maxLength="40"
				placeholder="Title"
			></textarea>
			<textarea
				className="text"
				name="text"
				value={noteData.text}
				onChange={(event) => {
					handleNoteChange(event);
					autosizeTextarea(event);
				}}
				onClick={() => toggleShow()}
				placeholder="Take a note"
			></textarea>
			<div className={`note-btns ${show ? "" : "hidden"}`}>
				<button
					className={`save ${show ? "" : "hidden"}`}
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
