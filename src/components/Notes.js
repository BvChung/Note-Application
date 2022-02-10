import React from "react";
import EditNote from "./EditNote";
import { FiTrash2, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";

export default function Notes({
	id,
	text,
	date,
	deleteNote,
	saveNote,
	toggleEdit,
}) {
	const [edit, setEdit] = React.useState(false);
	function toggleEdit() {
		setEdit((prevEdit) => !prevEdit);
	}

	const [completed, setCompleted] = React.useState(false);
	function toggleCompleted() {
		setCompleted((prevCompleted) => !prevCompleted);
	}

	return (
		<div>
			{!edit ? (
				<div className="note">
					<div className={completed ? "completed" : ""}>
						<p>{text}</p>
					</div>
					<div className="note-details">
						<small>{date}</small>
						{completed ? (
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
			) : (
				<EditNote
					id={id}
					text={text}
					date={date}
					saveNote={saveNote}
					toggleEdit={toggleEdit}
				/>
			)}
		</div>
	);
}
