import React from "react";
import "../css/search.css";
import { BiSearch } from "react-icons/bi";
import { FiTrash, FiPlus } from "react-icons/fi";
import { BsSortNumericDown, BsSortNumericUp, BsPinAngle } from "react-icons/bs";
import { GrNote } from "react-icons/gr";
import { Tooltip } from "@mantine/core";

export default function Search({
	searchNote,
	handleNoteSearch,
	toggleCreateNote,
	sortDateAscending,
	sortDateDescending,
	deleteAllNotes,
	openPinNotes,
}) {
	const [tooltipOpened, setTooltipOpened] = React.useState(false);

	return (
		<div className="nav-search">
			<div className="nav-content">
				<GrNote />
				<div className="search">
					<input
						type="text"
						className="search__input"
						aria-label="search"
						placeholder="Search for note"
						value={searchNote}
						onChange={handleNoteSearch}
					/>
					<button className="search__submit" aria-label="submit search">
						<BiSearch className="search-icon" />
					</button>
				</div>

				<div className="sort">
					<Tooltip
						label="Create Note"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="pin-btn" onClick={toggleCreateNote}>
							<FiPlus className="logo" />
						</button>
					</Tooltip>

					<Tooltip
						label="Pinned Notes"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="pin-btn" onClick={openPinNotes}>
							<BsPinAngle className="logo" />
						</button>
					</Tooltip>

					<Tooltip
						label="Sort Ascending"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="date-btn">
							<BsSortNumericUp onClick={sortDateAscending} className="logo" />
						</button>
					</Tooltip>

					<Tooltip
						label="Sort Descending"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="date-btn">
							<BsSortNumericDown
								onClick={sortDateDescending}
								className="logo"
							/>
						</button>
					</Tooltip>

					<Tooltip
						label="Delete All Notes"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="pin-btn" onClick={deleteAllNotes}>
							<FiTrash className="logo" />
						</button>
					</Tooltip>
				</div>
			</div>
			{/* <div className="open-notes">
				<button className="pin-btn" onClick={openPinNotes}>
					<BsPinAngle className="logo" />
				</button>
			</div>

			<div className="sort">
				<button className="date-btn">
					<BsSortNumericUp onClick={sortDateAscending} className="logo" />
				</button>

				<button className="date-btn">
					<BsSortNumericDown onClick={sortDateDescending} className="logo" />
				</button>
			</div> */}
		</div>
	);
}
