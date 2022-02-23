import React from "react";
import { BsPinAngle } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { ScrollArea } from "@mantine/core";
import "../css/pinnotes.css";

export default function PinNote({ pinNoteData, unpinNote, deletePinNote }) {
	const displayPinnedNote = pinNoteData.map((data) => {
		return (
			<div key={data.id} className={`notes pin-note ${data.noteColor}`}>
				<div className="note-details">
					<small className="date">{data.date}</small>
					<BsPinAngle onClick={() => unpinNote(data)} />
					<FiTrash onClick={() => deletePinNote(data.id)} />
				</div>
				<div>
					<h3>{data.title}</h3>
					<p>{data.text}</p>
				</div>
			</div>
		);
	});

	return (
		<ScrollArea>
			<div className="pin">
				<div className="notes-list">{pinNoteData ? displayPinnedNote : ""}</div>
			</div>
		</ScrollArea>
	);
}
