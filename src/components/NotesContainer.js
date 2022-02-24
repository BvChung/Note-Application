import React from "react";
import "../index.css";
import "../css/addnote.css";
import AddNote from "./AddNote";
import TypeOfNotes from "./TypeOfNotes";
import PinNote from "./PinNote";
import Masonry from "@mui/lab/Masonry";

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
					{createNote && (
						<div className="addnote-bg animation">
							<AddNote notes={notes} saveNote={saveNote} />
						</div>
					)}

					{/* Iterate through notes data and render Notes */}

					<div className="notes-list ">
						<Masonry
							columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
							spacing={2}
						>
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
						</Masonry>
					</div>
				</div>
			) : (
				<div className="notes-list">
					<Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={2}>
						{pinNoteData.map((pinNote) => {
							return (
								<PinNote
									key={pinNote.id}
									id={pinNote.id}
									noteColor={pinNote.noteColor}
									dayCreated={pinNote.dayCreated}
									date={pinNote.date}
									text={pinNote.text}
									title={pinNote.title}
									unpinNote={unpinNote}
									deletePinNote={deletePinNote}
									openPinNotes={openPinNotes}
								/>
							);
						})}
					</Masonry>
				</div>
			)}
		</div>
	);
}
