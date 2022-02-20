import React from "react";
import { FiTrash2, FiEdit, FiCheck, FiXCircle } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";
import { Menu, createStyles, Tooltip, ColorSwatch, Group } from "@mantine/core";

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
	const completedClassName = completedNote
		? "completed text-container"
		: "text-container";

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
			<Tooltip label="Tools" opened={opened} withArrow>
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
					<Menu.Label>Application</Menu.Label>
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
								day: day,
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
						icon={<FiTrash2 className="trash-icon" />}
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
			<div className={completedClassName}>
				<p>{text}</p>
			</div>
		</div>
	);
}
