import React from "react";
import "../css/addnote.css";
import TextareaAutosize from "react-textarea-autosize";
import { MdClose } from "react-icons/md";
import { useCloseAddNote } from "../App";

export default function AddNote({ saveNote }) {
	const closeAddNote = useCloseAddNote();

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
		<div className="add-note animation notes-margin">
			<div className="addnote-title">
				<div className="add-close-btn-container">
					<button onClick={closeAddNote} className="addnote-close-btn">
						<MdClose className="addnote-close-icon" />
					</button>
				</div>
				<div className="addnote-text-container">
					<p className="addnote-text">Create a note</p>
				</div>
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
