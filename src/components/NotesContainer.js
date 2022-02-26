import React from "react";
import "../index.css";
import "../css/addnote.css";
import AddNote from "./AddNote";
import TypeOfNotes from "./TypeOfNotes";
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
		<>
			{!switchNoteView ? (
				<div className="transition">
					{createNote && (
						<div className="addnote-bg animation">
							<AddNote notes={notes} saveNote={saveNote} />
						</div>
					)}

					<div className="notes-margin ">
						{/* Iterate through notes data and render Notes */}
						<Masonry
							columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
							spacing={3}
							className="mason-margin"
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
										openPinNotes={openPinNotes}
										saveNote={saveNote}
										deleteNote={deleteNote}
										getPinNoteData={getPinNoteData}
										saveNoteColor={saveNoteColor}
										pinNoteData={pinNoteData}
										unpinNote={unpinNote}
										deletePinNote={deletePinNote}
										switchNoteView={switchNoteView}
									/>
								);
							})}
						</Masonry>
					</div>
				</div>
			) : (
				<div className="notes-margin">
					<Masonry
						columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
						spacing={2}
						className="mason-margin"
					>
						{pinNoteData.map((pinNote) => {
							return (
								<TypeOfNotes
									key={pinNote.id}
									id={pinNote.id}
									title={pinNote.title}
									text={pinNote.text}
									noteColor={pinNote.noteColor}
									date={pinNote.date}
									dayCreated={pinNote.dayCreated}
									openPinNotes={openPinNotes}
									saveNote={saveNote}
									deleteNote={deleteNote}
									getPinNoteData={getPinNoteData}
									saveNoteColor={saveNoteColor}
									pinNoteData={pinNoteData}
									unpinNote={unpinNote}
									deletePinNote={deletePinNote}
									switchNoteView={switchNoteView}
								/>
							);
						})}
					</Masonry>
				</div>
			)}
		</>
	);
}
