import React from "react";
import PinNote from "./PinNote";
import "../css/pinnotes.css";

export default function PinNoteList({ pinNoteData, unpinNotes }) {
	return (
		<div className="pin-container">
			{pinNoteData.length > 0 ? (
				<PinNote
					key={pinNoteData.id}
					pinNoteData={pinNoteData}
					unpinNotes={unpinNotes}
				/>
			) : (
				""
			)}
		</div>
	);
}
