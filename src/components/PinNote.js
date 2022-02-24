import React from "react";
import { BsPinAngle } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import "../css/pinnotes.css";
import Masonry from "@mui/lab/Masonry";

export default function PinNote({
	id,
	noteColor,
	date,
	title,
	text,
	unpinNote,
	deletePinNote,
}) {
	// const displayPinnedNote = pinNoteData.map((data) => {
	// 	return (
	// 		<div key={data.id} className={`notes ${data.noteColor}`}>
	// 			<div className="note-details">
	// 				<small className="date">{data.date}</small>
	// 				{/* <BsPinAngle onClick={() => unpinNote(data)} /> */}
	// 				<FiTrash onClick={() => deletePinNote(data.id)} />
	// 			</div>
	// 			<div>
	// 				<h3>{data.title}</h3>
	// 				<p>{data.text}</p>
	// 			</div>
	// 		</div>
	// 	);
	// });

	return (
		<div>
			<div key={id} className={`notes ${noteColor}`}>
				<div className="note-details">
					<small className="date">{date}</small>

					<div className="pin-btns">
						<button className="color-btn">
							<BsPinAngle
								className="color-icon"
								onClick={() =>
									unpinNote({
										id: id,
										noteColor: noteColor,
										date: date,
										title: title,
										text: text,
									})
								}
							/>
						</button>
						<button className="color-btn">
							<FiTrash
								className="color-icon"
								onClick={() => deletePinNote(id)}
							/>
						</button>
					</div>
				</div>
				<div>
					<h3 className="note-title">{title}</h3>
					<p className="note-text">{text}</p>
				</div>
			</div>
		</div>
	);
}

// export default function PinNote({ pinNoteData, unpinNote, deletePinNote }) {
// 	const displayPinnedNote = pinNoteData.map((data) => {
// 		return (
// 			<div key={data.id} className={`notes ${data.noteColor}`}>
// 				<div className="note-details">
// 					<small className="date">{data.date}</small>
// 					<BsPinAngle onClick={() => unpinNote(data)} />
// 					<FiTrash onClick={() => deletePinNote(data.id)} />
// 				</div>
// 				<div>
// 					<h3>{data.title}</h3>
// 					<p>{data.text}</p>
// 				</div>
// 			</div>
// 		);
// 	});

// 	return (
// 		<div className="notes-list">
// 			<Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
// 				{displayPinnedNote}
// 			</Masonry>
// 		</div>
// 	);
// }
