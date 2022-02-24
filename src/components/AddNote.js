import React from "react";
import "../css/addnote.css";
import TextareaAutosize from "react-textarea-autosize";

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

	const [show, setShow] = React.useState(false);
	function toggleShow() {
		setShow(true);
	}

	return (
		<div
			className="noted animation"
			// onMouseEnter={() => setShow(true)}
			// onMouseLeave={() => setShow(false)}
		>
			<div className="addnote-title">
				<p>Create a note</p>
			</div>
			<TextareaAutosize
				className={`title ${show ? "" : "hidden"}`}
				name="title"
				value={noteData.title}
				onChange={handleNoteChange}
				placeholder="Add a title..."
			/>
			<TextareaAutosize
				className="text"
				name="text"
				value={noteData.text}
				onChange={handleNoteChange}
				onClick={toggleShow}
				placeholder="Take a note..."
			/>
			<div className={`note-btns animation${show ? "" : "hidden"}`}>
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

{
	/* <textarea
				className={`title ${show ? "" : "hidden"}`}
				name="title animation"
				value={noteData.title}
				onChange={handleNoteChange}
				rows="1"
				cols="2"
				maxLength="40"
				placeholder="Title"
			></textarea> */
}
{
	/* <textarea
				className="text"
				name="text"
				value={noteData.text}
				onChange={(event) => {
					handleNoteChange(event);
					// autosizeTextarea(event);
				}}
				onClick={(event) => {
					toggleShow();
					autosizeTextarea(event);
				}}
				placeholder="Take a note"
			></textarea> */
}
