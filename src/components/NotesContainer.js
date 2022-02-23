import React from "react";
import "../index.css";
import "../css/addnote.css";
import AddNote from "./AddNote";
import TypeOfNotes from "./TypeOfNotes";
import PinNote from "./PinNote";

export default function NoteList({
	notes,
	saveNote,
	deleteNote,
	getPinNoteData,
	createNote,
	saveNoteColor,
	pinNoteData,
	unpinNote,
	switchNoteView,
	openPinNotes,
	deletePinNote,
}) {
	return (
		<div>
			{!switchNoteView ? (
				<div className="transition">
					<div>
						{createNote && <AddNote notes={notes} saveNote={saveNote} />}
					</div>

					{/* Iterate through notes data and render Notes */}
					<div className="notes-list">
						{notes.map((note) => {
							return (
								<TypeOfNotes
									key={note.id}
									id={note.id}
									title={note.title}
									text={note.text}
									noteColor={note.noteColor}
									date={note.date}
									dayCreated={note.dayCreated}
									deleteNote={deleteNote}
									saveNote={saveNote}
									getPinNoteData={getPinNoteData}
									saveNoteColor={saveNoteColor}
									pinNoteData={pinNoteData}
									unpinNote={unpinNote}
									deletePinNote={deletePinNote}
									openPinNotes={openPinNotes}
								/>
							);
						})}
					</div>
				</div>
			) : (
				<div>
					<PinNote
						pinNoteData={pinNoteData}
						unpinNote={unpinNote}
						deletePinNote={deletePinNote}
						openPinNotes={openPinNotes}
					/>
				</div>
			)}
		</div>
	);
}
