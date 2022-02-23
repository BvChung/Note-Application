import React from "react";
import Color from "./Color";
import { FiTrash, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";
import { Menu, createStyles, Tooltip } from "@mantine/core";

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

	const useStyles = createStyles((theme) => ({
		root: {
			fontFamily: "Inter",
			color: "#212529",
			fontSize: theme.fontSizes.md,
		},
		itemHovered: {
			backgroundColor: "#f1f3f5",
		},
	}));

	const [tooltipOpened, setTooltipOpened] = React.useState(false);

	function Tools() {
		const { classes } = useStyles();
		return (
			<Tooltip label="More" opened={tooltipOpened}>
				<Menu
					// trigger="hover"
					delay={300}
					size="sm"
					classNames={classes}
					className="size"
					withArrow
					styles={{ body: { color: "red" } }}
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
			<div className="text-container">
				<h4 className="note-title">{title}</h4>
				<p className={completedClassName}>{text}</p>
			</div>
		</div>
	);
}
