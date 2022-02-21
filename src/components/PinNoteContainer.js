import { React } from "react";
import PinNote from "./PinNote";
import "../css/pinnotes.css";
import { Drawer } from "@mantine/core";

export default function PinNoteList({
	pinNoteData,
	unpinNote,
	opened,
	openPinNotes,
	deletePinNote,
}) {
	function pinNoteDrawer() {
		return (
			<>
				<Drawer
					opened={opened}
					onClose={() => openPinNotes()}
					title="Pinned Notes"
					position="right"
					size="xl"
					padding="lg"
					shadow="xs"
					styles={{
						drawer: { backgroundColor: "#f8f9fa" },
						title: {
							color: "#212529",
							fontFamily: "inherit",
							fontWeight: "600",
							fontSize: "1.6rem",
						},
					}}
				>
					<PinNote
						key={pinNoteData.id}
						pinNoteData={pinNoteData}
						unpinNote={unpinNote}
						deletePinNote={deletePinNote}
					/>
				</Drawer>
			</>
		);
	}

	return <div className="pin-container">{pinNoteDrawer()}</div>;
}
