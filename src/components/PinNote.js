import React from "react";
import { BsPinAngle } from "react-icons/bs";
import "../css/pinnotes.css";

export default function PinNote({ pinNoteData, unpinNotes }) {
	const displayPinnedNote = pinNoteData.map((data) => {
		return (
			<div key={data.id} className="note">
				<div>
					<p>{data.text}</p>
				</div>
				<div className="note-details">
					<small>{data.date}</small>
					<BsPinAngle onClick={() => unpinNotes(data.id)} />
				</div>
			</div>
		);
	});

	return (
		<div className="pin">
			<h1>Pinned Notes</h1>
			{pinNoteData ? displayPinnedNote : ""}
		</div>
	);
}
