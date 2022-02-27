import React from "react";
import Color from "./Color";
import { FiTrash, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { Menu, Tooltip, ScrollArea } from "@mantine/core";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

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
	saveNoteColor,
	noteColor,
	switchNoteView,
	unpinNote,
	deletePinNote,
}) {
	const completedClassName = completedNote ? "completed" : "";

	const [tooltipOpened, setTooltipOpened] = React.useState(false);

	function Tools() {
		return (
			<Tooltip
				label="More"
				opened={tooltipOpened}
				withArrow
				color="gray"
				zIndex="999"
			>
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
							backgroundColor: "#ECEAEB",
						},
						body: { backgroundColor: "#f9fafb" },
						itemBody: {
							color: "#212529",
						},
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
					{!switchNoteView ? (
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
					) : (
						<Menu.Item
							icon={<BsPinAngle />}
							onClick={() =>
								unpinNote({
									id: id,
									noteColor: noteColor,
									date: date,
									dayCreated: dayCreated,
									title: title,
									text: text,
								})
							}
						>
							Unpin Note
						</Menu.Item>
					)}
					<Menu.Item
						icon={<FiEdit />}
						onClick={() => {
							toggleEdit();
						}}
					>
						Edit Note
					</Menu.Item>

					<Menu.Item
						icon={<FaRegCopy />}
						onClick={() => {
							navigator.clipboard.writeText(text);
						}}
					>
						Copy Text
					</Menu.Item>

					<Menu.Item
						icon={<FiTrash className="trash-icon" />}
						onClick={() => {
							if (!switchNoteView) {
								deleteNote(id);
							} else {
								deletePinNote(id);
							}
						}}
					>
						Delete Note
					</Menu.Item>
				</Menu>
			</Tooltip>
		);
	}

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 350,
		boxShadow: 26,
	};

	return (
		<div className={`note ${noteColor}`}>
			<div className="note-details">
				<small className="date">{date}</small>

				<div className="note-tools">
					<Color
						// key={id}
						id={id}
						noteColor={noteColor}
						saveNoteColor={saveNoteColor}
					/>

					{Tools()}
				</div>
			</div>
			<ScrollArea>
				<div className="text-container" onClick={handleOpen}>
					<p className="note-title">{title}</p>
					<p className={`note-text ${completedClassName}`}>{text}</p>
				</div>
			</ScrollArea>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<div className={`note modal ${noteColor}`}>
							<div className="note-details">
								<small className="date">{date}</small>
							</div>
							<div className="text-container">
								<p className="modal-note-title">{title}</p>
								<p className={`modal-note-text ${completedClassName}`}>
									{text}
								</p>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
