import React from "react";
import "./index.css";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import NoteList from "./components/NoteList";
import PinNoteContainer from "./components/PinNoteContainer";

export default function App() {
	const [notes, setNotes] = React.useState(
		JSON.parse(localStorage.getItem("notes-data")) || []
	);

	React.useEffect(() => {
		localStorage.setItem("notes-data", JSON.stringify(notes));
	}, [notes]);

	function saveNote(noteData) {
		if (!noteData) return;

		const date = new Date();
		const currentDate = date.toLocaleString("en-US", {
			day: "numeric",
			month: "numeric",
			year: "numeric",
		});

		// noteData is an object containing id,data,text
		// If noteData.id exists then the existing note is being edited
		if (noteData.id) {
			setNotes((prevNotes) =>
				prevNotes.map((note) => {
					if (note.id === noteData.id) {
						return {
							...noteData,
							date: currentDate,
							day: +date.getDate(),
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
			const newNote = {
				id: nanoid(),
				date: currentDate,
				day: +date.getDate(),
				text: noteData.text,
			};

			// Prevent blank notes from being added
			if (newNote.text === "") return;

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

	function sortDateAscending() {
		setNotes((prevNotes) => [...prevNotes].sort((a, b) => a.day - b.day));
	}

	function sortDateDescending() {
		setNotes((prevNotes) => [...prevNotes].sort((a, b) => b.day - a.day));
	}

	const [pinNoteData, setPinNoteData] = React.useState(
		JSON.parse(localStorage.getItem("pin-data")) || []
	);

	React.useEffect(() => {
		localStorage.setItem("pin-data", JSON.stringify(pinNoteData));
	}, [pinNoteData]);

	function getPinNoteData(pinData) {
		// Pin button clicked -> note from main section is removed
		setNotes((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== pinData.id;
			})
		);

		// Add data to pinned note array
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

			return filteredData;
		});
	}

	function unpinNotes(data) {
		// Removes pinned note from arr
		setPinNoteData((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== data.id;
			})
		);

		// Returns note to main section
		const returnNote = {
			id: data.id,
			date: data.date,
			day: data.day,
			text: data.text,
		};

		setNotes((prevNotes) => [...prevNotes, returnNote]);
	}

	const [opened, setOpened] = React.useState(false);
	function openPinNotes() {
		setOpened((prevSet) => !prevSet);
	}

	return (
		<div className="app-container">
			<Search
				searchNote={searchNote}
				handleNoteSearch={handleNoteSearch}
				sortDateAscending={sortDateAscending}
				sortDateDescending={sortDateDescending}
				openPinNotes={openPinNotes}
			/>
			<div className="notes-container">
				<PinNoteContainer
					pinNoteData={pinNoteData}
					unpinNotes={unpinNotes}
					opened={opened}
					openPinNotes={openPinNotes}
				/>

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
