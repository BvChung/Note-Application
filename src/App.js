import React from "react";
import "./index.css";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import NotesContainer from "./components/NotesContainer";
import SwitchView from "./components/SwitchView";

const ClearSearchText = React.createContext();
export function useClearSearchText() {
	return React.useContext(ClearSearchText);
}
const CloseAddNote = React.createContext();
export function useCloseAddNote() {
	return React.useContext(CloseAddNote);
}

export default function App() {
	// Note ----------------------------
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
			month: "short",
			year: "numeric",
		});

		// noteData is an object containing id,data,text
		// If noteData.id exists then the existing note is being edited
		if (!switchNoteView && noteData.id) {
			setNotes((prevNotes) =>
				prevNotes.map((note) => {
					if (note.id === noteData.id) {
						return {
							...noteData,
							date: currentDate,
							dayCreated: +date.getTime(),
						};
					} else {
						return {
							...note,
						};
					}
				})
			);
		} else if (switchNoteView && noteData.id) {
			setPinNoteData((prevNotes) =>
				prevNotes.map((note) => {
					if (note.id === noteData.id) {
						return {
							...noteData,
							date: currentDate,
							dayCreated: +date.getTime(),
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
				dayCreated: +date.getTime(),
				text: noteData.text,
				title: noteData.title,
				noteColor: noteData.noteColor,
			};

			// Prevent blank notes from being added
			if (newNote.title === "" && newNote.text === "") return;

			setNotes((prevNotes) => [newNote, ...prevNotes]);
		}
	}

	function deleteNote(id) {
		setNotes((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== id;
			})
		);
	}

	function saveNoteColor(noteData) {
		const { noteColor, id } = noteData;

		if (switchNoteView) {
			setPinNoteData((prevNotes) =>
				prevNotes.map((note) => {
					if (note.id === id) {
						return {
							...note,
							noteColor: noteColor,
						};
					} else {
						return {
							...note,
						};
					}
				})
			);
		} else {
			setNotes((prevNotes) =>
				prevNotes.map((note) => {
					if (note.id === id) {
						return {
							...note,
							noteColor: noteColor,
						};
					} else {
						return {
							...note,
						};
					}
				})
			);
		}
	}

	// Navbar ----------------------------
	const [searchNote, setNoteSearch] = React.useState("");
	function handleNoteSearch(event) {
		const { value } = event.target;
		setNoteSearch(value);
	}

	function clearSearch(event) {
		event.target.value = "";
		setNoteSearch("");
	}

	const [switchNoteView, setSwitchNoteView] = React.useState(false);
	function toggleNoteView() {
		setSwitchNoteView((prevSet) => !prevSet);
	}

	const [createNote, setCreateNote] = React.useState(false);
	function toggleCreateNote() {
		setCreateNote((prevCreate) => !prevCreate);
	}

	function sortDateAscending() {
		if (switchNoteView) {
			setPinNoteData((prevNotes) =>
				[...prevNotes].sort((a, b) => a.dayCreated - b.dayCreated)
			);
		} else {
			setNotes((prevNotes) =>
				[...prevNotes].sort((a, b) => a.dayCreated - b.dayCreated)
			);
		}
	}

	function sortDateDescending() {
		if (switchNoteView) {
			setPinNoteData((prevNotes) =>
				[...prevNotes].sort((a, b) => b.dayCreated - a.dayCreated)
			);
		} else {
			setNotes((prevNotes) =>
				[...prevNotes].sort((a, b) => b.dayCreated - a.dayCreated)
			);
		}
	}

	function deleteAllNotes() {
		if (switchNoteView) {
			setPinNoteData([]);
		} else {
			setNotes([]);
		}
	}

	// PinnedNotes ----------------------------
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
			const pinDataArr = [newPinData, ...prevPinData];

			// Prevent the same note from being pinned
			const filteredData = pinDataArr.filter(
				(noteData, i, arr) =>
					i === arr.findIndex((position) => position.id === noteData.id)
			);

			return filteredData;
		});
	}

	function unpinNote(data) {
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
			dayCreated: data.dayCreated,
			title: data.title,
			text: data.text,
			noteColor: data.noteColor,
		};

		setNotes((prevNotes) => [returnNote, ...prevNotes]);
	}

	function deletePinNote(id) {
		console.log("note deleted", id);
		setPinNoteData((prevNotes) =>
			prevNotes.filter((note) => {
				return note.id !== id;
			})
		);
	}

	// console.log(notes);
	// console.log(pinNoteData);
	// console.log(switchNoteView);

	return (
		<div className="app-container">
			<ClearSearchText.Provider value={clearSearch}>
				<Search
					searchNote={searchNote}
					handleNoteSearch={handleNoteSearch}
					toggleCreateNote={toggleCreateNote}
					sortDateAscending={sortDateAscending}
					sortDateDescending={sortDateDescending}
					deleteAllNotes={deleteAllNotes}
					toggleNoteView={toggleNoteView}
					switchNoteView={switchNoteView}
				/>
			</ClearSearchText.Provider>
			<SwitchView
				switchNoteView={switchNoteView}
				toggleNoteView={toggleNoteView}
			/>
			<div className="notes-container-padding">
				<CloseAddNote.Provider value={toggleCreateNote}>
					<NotesContainer
						notes={notes.filter((note) =>
							note.text.toLowerCase().includes(searchNote.toLowerCase())
						)}
						createNote={createNote}
						saveNote={saveNote}
						saveNoteColor={saveNoteColor}
						deleteNote={deleteNote}
						getPinNoteData={getPinNoteData}
						pinNoteData={pinNoteData.filter((note) =>
							note.text.toLowerCase().includes(searchNote.toLowerCase())
						)}
						unpinNote={unpinNote}
						deletePinNote={deletePinNote}
						switchNoteView={switchNoteView}
						toggleNoteView={toggleNoteView}
					/>
				</CloseAddNote.Provider>
			</div>
		</div>
	);
}
