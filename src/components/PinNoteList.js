import { React, useState } from "react";
import PinNote from "./PinNote";
import "../css/pinnotes.css";
import { Drawer, createStyles, Group, Button } from "@mantine/core";

export default function PinNoteList({ pinNoteData, unpinNotes }) {
	const [opened, setOpened] = useState(false);
	const useStyles = createStyles((theme) => ({
		drawer: {
			// backgroundColor: "blue",
			fontFamily: "inherit",
		},
	}));

	function Demo() {
		const { classes } = useStyles();

		return (
			<>
				<Drawer
					opened={opened}
					onClose={() => setOpened(false)}
					title="Pinned Notes"
					size="xl"
					padding="xl"
					shadow="xs"
					classNames={classes}
					transition="rotate-left"
					transitionDuration={1000}
					transitionTimingFunction="ease"
				>
					<PinNote
						key={pinNoteData.id}
						pinNoteData={pinNoteData}
						unpinNotes={unpinNotes}
					/>
				</Drawer>
			</>
		);
	}

	return (
		<div className="pin-container">
			{Demo()}
			<Group position="center">
				<Button onClick={() => setOpened(true)}>Open drawer</Button>
			</Group>
			{/* {pinNoteData.length > 0 ? (
				<PinNote
					key={pinNoteData.id}
					pinNoteData={pinNoteData}
					unpinNotes={unpinNotes}
				/>
			) : (
				""
			)} */}
		</div>
	);
}
