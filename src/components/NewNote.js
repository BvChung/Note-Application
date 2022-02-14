import React from "react";
import { FiTrash2, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";

export default function NewNote({
	id,
	text,
	date,
	day,
	deleteNote,
	toggleEdit,
	completedNote,
	toggleCompleted,
	togglePin,
	getPinNoteData,
}) {
	const completedClassName = completedNote ? "completed" : "";
	return (
		<div className="note">
			<div className={completedClassName}>
				<p>{text}</p>
			</div>
			<div className="note-details">
				<small>{date}</small>
				<BsPinAngle
					onClick={() => {
						togglePin();
						getPinNoteData({
							id: id,
							date: date,
							day: day,
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
