import React from "react";
import "./index.css";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import NoteList from "./components/NoteList";
import PinNoteList from "./components/PinNoteList";

export default function App() {
	const [notes, setNotes] = React.useState(
		JSON.parse(localStorage.getItem("notes-data")) || []
	);

	React.useEffect(() => {
		localStorage.setItem("notes-data", JSON.stringify(notes));
	}, [notes]);

	function saveNote(noteData) {
		// noteData is an object containing id,data,text
		// If noteData.id exists then the existing note is being edited
		if (noteData.id) {
			setNotes((prevNotes) =>
				prevNotes.map((note) => {
					if (note.id === noteData.id) {
						return {
							...noteData,
						};
					} else {
						return {
							...note,
						};
					}
				})
			);
		}
		// noteData.id does not exist => create a new note
		else {
			const currentDate = new Date();
			const convertedTime = currentDate.toLocaleString("en-US", {
				day: "numeric",
				month: "numeric",
				year: "numeric",
			});
			const newNote = {
				id: nanoid(),
				date: convertedTime,
				text: noteData.text,
			};

			setNotes((prevNotes) => [...prevNotes, newNote]);
		}
	}

	function deleteNote(id) {
		console.log("note deleted", id);
		setNotes((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== id;
			})
		);
	}

	const [searchNote, setNoteSearch] = React.useState("");

	function handleNoteSearch(event) {
		const { value } = event.target;
		setNoteSearch(value);
	}

	const [pinNoteData, setPinNoteData] = React.useState(
		JSON.parse(localStorage.getItem("pin-data")) || []
	);

	React.useEffect(() => {
		localStorage.setItem("pin-data", JSON.stringify(pinNoteData));
	}, [pinNoteData]);

	function getPinNoteData(pinData) {
		const newPinData = {
			id: nanoid(),
			...pinData,
		};

		setPinNoteData((prevPinData) => {
			const pinDataArr = [...prevPinData, newPinData];

			// Prevent the same note from being pinned
			const filteredData = pinDataArr.filter(
				(noteData, i, arr) =>
					i === arr.findIndex((position) => position.id === noteData.id)
			);
			console.log(filteredData);
			return filteredData;
		});
	}

	console.log(pinNoteData);

	function unpinNotes(id) {
		setPinNoteData((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== id;
			})
		);
	}

	return (
		<div className="app-container">
			<Search searchNote={searchNote} handleNoteSearch={handleNoteSearch} />
			<div className="notes-container">
				<PinNoteList pinNoteData={pinNoteData} unpinNotes={unpinNotes} />

				<NoteList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchNote.toLowerCase())
					)}
					saveNote={saveNote}
					deleteNote={deleteNote}
					getPinNoteData={getPinNoteData}
				/>
			</div>
		</div>
	);
}

let ex = [
	{
		id: "EWZP-BFGgTjmZnSDbyrde",
		date: "2/10/2022",
		text: "Add ability to pin notes or make important and fix css resident sleeper.",
	},
	{
		id: "EWZP-BFGgTjmZnSDbyrde",
		date: "2/10/2022",
		text: "Add ability to pin notes or make important and fix css resident sleeper.",
	},
	{ id: "two" },
	1,
];

// setPinNoteData((prevPinData) => [...prevPinData, newPinData])
ex = ex.filter((ex, i, arr) => i === arr.findIndex((t) => t.id === ex.id));
console.log(ex);
