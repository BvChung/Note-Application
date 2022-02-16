import React from "react";
import { BsPinAngle } from "react-icons/bs";
import "../css/pinnotes.css";

export default function PinNote({ pinNoteData, unpinNotes }) {
	const displayPinnedNote = pinNoteData.map((data) => {
		return (
			<div key={data.id} className="notes pin-note ">
				<div>
					<p>{data.text}</p>
				</div>
				<div className="note-details">
					<small>{data.date}</small>
					<BsPinAngle onClick={() => unpinNotes(data)} />
				</div>
			</div>
		);
	});

	return (
		<div className="pin">
			<div className="pin-container">
				{pinNoteData ? displayPinnedNote : ""}
			</div>
		</div>
	);
}
