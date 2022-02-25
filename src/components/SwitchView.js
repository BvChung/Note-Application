import React from "react";
import { BiNote } from "react-icons/bi";
import { BsPinAngle } from "react-icons/bs";

export default function SwitchView({ switchNoteView, toggleNoteView }) {
	const activePinnedNotes = switchNoteView ? "active-btn" : "";
	const activeAllNotes = !switchNoteView ? "active-btn" : "";

	return (
		<div className=" note-switch-display">
			<button
				className={`switch-btn ${activeAllNotes}`}
				onClick={toggleNoteView}
			>
				<div className="note-switch-btn-container">
					<BiNote className="switch-icon" />
					<p className="switch-text">All Notes</p>
				</div>
			</button>

			<button
				className={`switch-btn ${activePinnedNotes}`}
				onClick={toggleNoteView}
			>
				<div className="note-switch-btn-container">
					<BsPinAngle className="switch-icon" />
					<p className="switch-text">Pinned Notes</p>
				</div>
			</button>
		</div>
	);
}
