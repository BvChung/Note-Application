import React from "react";
import "../css/color.css";
import { Tooltip, Popover } from "@mantine/core";
import { MdOutlineColorLens } from "react-icons/md";
import { displayColors } from "../helper/helperFunctions";

export default function Color({
	currentlyEditing,
	handleEdit,
	saveNoteColor,
	id,
}) {
	const [opened, setOpened] = React.useState(false);
	const tooltipOpened = false;

	return (
		<div>
			<Tooltip
				label="Background Colors"
				tooltipId={tooltipOpened}
				color="gray"
				withArrow
				zIndex="999"
			>
				<Popover
					opened={opened}
					onClose={() => setOpened(false)}
					target={
						<button
							className="color-btn"
							onClick={() => setOpened((open) => !open)}
						>
							<MdOutlineColorLens className="color-icon" />
						</button>
					}
					width={170}
					position="bottom"
					withArrow
					styles={{ body: { backgroundColor: "#f9fafb" } }}
				>
					<div className="color-picker">
						{displayColors.map((color) => {
							return (
								<Tooltip
									key={color.label}
									label={color.label}
									onClick={(event) => {
										// changeColor(color.background);
										saveNoteColor({
											noteColor: color.background,
											id: id,
										});

										if (currentlyEditing) {
											handleEdit(event, color.background);
										}
									}}
								>
									<div className={color.className}>&nbsp;</div>
								</Tooltip>
							);
						})}
					</div>
				</Popover>
			</Tooltip>
		</div>
	);
}
