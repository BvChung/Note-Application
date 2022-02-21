import React from "react";
import { FiTrash, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";
import { Menu, createStyles, Tooltip, ColorSwatch, Group } from "@mantine/core";

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

			// color: theme.white,
		},
	}));

	const [opened, setOpened] = React.useState(false);

	function Tools() {
		const { classes } = useStyles();
		return (
			<Tooltip label="More" opened={opened} withArrow>
				<Menu
					// trigger="hover"
					delay={300}
					size="sm"
					classNames={classes}
					withArrow
					styles={{ body: { color: "red" } }}
					onMouseEnter={() => setOpened(true)}
					onMouseLeave={() => setOpened(false)}
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
		<div className="note">
			<div className="note-details">
				<small className="date">{date}</small>
				{Tools()}
			</div>
			<div className="text-container">
				<h3 className="note-title">{title}</h3>
				<p className={completedClassName}>{text}</p>
			</div>
		</div>
	);
}
