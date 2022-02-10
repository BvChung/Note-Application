import React from "react";
import EditNote from "./EditNote";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function Notes({ id, text, date, deleteNote, editNote }) {
	const [edit, setEdit] = React.useState(false);
	function toggleEdit() {
		setEdit((prevEdit) => !prevEdit);
	}

	return (
		<div>
			{!edit ? (
				<div className="note">
					<span>{text}</span>
					<div className="note-details">
						<small>{date}</small>
						<FiEdit
							onClick={() => {
								editNote(id);
								toggleEdit();
							}}
						/>
						<FiTrash2 onClick={() => deleteNote(id)} className="trash-icon" />
					</div>
				</div>
			) : (
				<EditNote id={id} text={text} date={date} />
			)}
		</div>
	);
}
