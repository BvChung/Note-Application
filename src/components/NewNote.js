import React from "react";
import { FiTrash2, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";

export default function NewNote({
	id,
	text,
	date,
	deleteNote,
	toggleEdit,
	completedNote,
	toggleCompleted,
	togglePinNote,
	getPinNoteData,
}) {
	return (
		<div className="note">
			<div className={completedNote ? "completed" : ""}>
				<p>{text}</p>
			</div>
			<div className="note-details">
				<small>{date}</small>
				<BsPinAngle
					onClick={() => {
						togglePinNote();
						getPinNoteData({
							id: id,
							date: date,
							text: text,
						});
					}}
				/>
				{completedNote ? (
					<FiXCircle onClick={toggleCompleted} />
				) : (
					<FiCheck onClick={toggleCompleted} />
				)}
				<FiEdit
					onClick={() => {
						toggleEdit();
					}}
				/>
				<FiTrash2 onClick={() => deleteNote(id)} className="trash-icon" />
			</div>
		</div>
	);
}
