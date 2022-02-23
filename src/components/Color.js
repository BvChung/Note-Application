import React from "react";
import "../css/color.css";
import { Tooltip, Popover } from "@mantine/core";
import { MdOutlineColorLens } from "react-icons/md";
import { displayColors } from "../helper/helperFunctions";

export default function Color({ changeColor }) {
	const [opened, setOpened] = React.useState(false);
	const [tooltipOpened, setTooltipOpened] = React.useState(false);

	return (
		<div>
			<Tooltip label="Background Colors" tooltipId={tooltipOpened} color="gray">
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
				>
					<div className="color-picker">
						{displayColors.map((color) => {
							return (
								<Tooltip
									key={color.label}
									label={color.label}
									onClick={() => {
										changeColor(color.background);
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
