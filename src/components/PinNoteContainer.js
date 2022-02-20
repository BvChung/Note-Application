import { React } from "react";
import PinNote from "./PinNote";
import "../css/pinnotes.css";
import { Drawer } from "@mantine/core";

export default function PinNoteList({
	pinNoteData,
	unpinNotes,
	opened,
	openPinNotes,
}) {
	function pinNoteDrawer() {
		return (
			<>
				<Drawer
					opened={opened}
					onClose={() => openPinNotes()}
					title="Pinned Notes"
					size="xl"
					padding="xl"
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
						unpinNotes={unpinNotes}
					/>
				</Drawer>
			</>
		);
	}

	return <div className="pin-container">{pinNoteDrawer()}</div>;
}
