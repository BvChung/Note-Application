import React from "react";
import Color from "./Color";
import { FiTrash, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";
import { Menu, Tooltip, Modal, ScrollArea } from "@mantine/core";

export default function NewNote({
	id,
	title,
	text,
	date,
	dayCreated,
	deleteNote,
	toggleEdit,
	completedNote,
	toggleCompleted,
	togglePin,
	getPinNoteData,
	changeColor,
	saveNoteColor,
	noteColor,
}) {
	const completedClassName = completedNote ? "completed" : "";

	const [tooltipOpened, setTooltipOpened] = React.useState(false);

	function Tools() {
		return (
			<Tooltip label="More" opened={tooltipOpened}>
				<Menu
					// trigger="hover"
					delay={300}
					size="sm"
					className="size"
					withArrow
					styles={{
						root: {
							fontFamily: "inherit",
							color: "#212529",
						},
						itemHovered: {
							backgroundColor: "#f1f3f5",
						},
						body: { color: "red" },
					}}
					onMouseEnter={() => setTooltipOpened(true)}
					onMouseLeave={() => setTooltipOpened(false)}
				>
					<Menu.Label>Tools</Menu.Label>
					<Menu.Item
						icon={completedNote ? <FiXCircle /> : <FiCheck />}
						onClick={toggleCompleted}
					>
						Strikethrough
					</Menu.Item>
					<Menu.Item
						icon={<BsPinAngle />}
						onClick={() => {
							togglePin();
							getPinNoteData({
								id: id,
								date: date,
								dayCreated: dayCreated,
								title: title,
								text: text,
								noteColor: noteColor,
							});
						}}
					>
						Pin Note
					</Menu.Item>
					<Menu.Item
						icon={<FiEdit />}
						onClick={() => {
							toggleEdit();
						}}
					>
						Edit Note
					</Menu.Item>
					<Menu.Item
						icon={<FiTrash className="trash-icon" />}
						onClick={() => deleteNote(id)}
					>
						Delete Note
					</Menu.Item>
				</Menu>
			</Tooltip>
		);
	}

	const [opened, setOpened] = React.useState(false);

	return (
		<div className={`note ${noteColor}`}>
			<div className="note-details">
				<small className="date">{date}</small>

				<div className="note-tools">
					<Color
						// key={id}
						id={id}
						changeColor={changeColor}
						noteColor={noteColor}
						saveNoteColor={saveNoteColor}
					/>

					{Tools()}
				</div>
			</div>
			<ScrollArea>
				<div className="text-container" onClick={() => setOpened(true)}>
					<p className="note-title">{title}</p>
					<p className={`note-text ${completedClassName}`}>{text}</p>
				</div>
			</ScrollArea>

			<Modal
				size="md"
				overflow="outside"
				opened={opened}
				centered
				// overlayOpacity={0.95}
				onClose={() => setOpened(false)}
				// className="transparent"
			>
				<div className={`note modal ${noteColor}`}>
					<div className="note-details">
						<small className="date">{date}</small>

						<div className="note-tools">
							<Color
								// key={id}
								id={id}
								changeColor={changeColor}
								noteColor={noteColor}
								saveNoteColor={saveNoteColor}
							/>

							{Tools()}
						</div>
					</div>
					<div className="text-container">
						<p className="modal-note-title">{title}</p>
						<p className={`modal-note-text ${completedClassName}`}>{text}</p>
					</div>
				</div>
			</Modal>
		</div>
	);
}
