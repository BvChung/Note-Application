import React from "react";
import PinNote from "./PinNote";
import "../css/pinnotes.css";

export default function PinNoteList({ pinNoteData, unpinNotes }) {
	return (
		<div className="pin-container">
			<PinNote
				key={pinNoteData.id}
				pinNoteData={pinNoteData}
				unpinNotes={unpinNotes}
			/>
		</div>
	);
}
