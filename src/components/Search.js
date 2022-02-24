import React from "react";
import "../css/search.css";
import { BiSearch, BiNote } from "react-icons/bi";
import { FiTrash, FiPlus } from "react-icons/fi";
import { BsSortNumericDown, BsSortNumericUp, BsPinAngle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Tooltip } from "@mantine/core";
import { useClearSearchText } from "../App";

export default function Search({
	searchNote,
	handleNoteSearch,
	toggleCreateNote,
	sortDateAscending,
	sortDateDescending,
	deleteAllNotes,
	toggleNoteView,
	switchNoteView,
}) {
	const [tooltipOpened, setTooltipOpened] = React.useState(false);
	const clearSearchText = useClearSearchText();

	return (
		<div className="nav-search">
			<div className="nav-content">
				{/* <div className="search">
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
				</div> */}
				<div className="nav-searchbar">
					<input
						type="text"
						className="searchbar"
						placeholder="Search for note..."
						aria-label="search"
						placeholder="Search for note"
						value={searchNote}
						onChange={handleNoteSearch}
					></input>

					<div className="searchbar-icon-container">
						<div className="close-container">
							<Tooltip
								label="Clear"
								tooltipId={tooltipOpened}
								withArrow
								color="gray"
							>
								<MdClose
									onClick={clearSearchText}
									className="searchbar-icon close-icon"
								/>
							</Tooltip>
						</div>
						<BiSearch className="searchbar-icon" />
					</div>
				</div>

				<div className="sort">
					<Tooltip
						label="Create Note"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="search-btn" onClick={toggleCreateNote}>
							<FiPlus className="logo" />
						</button>
					</Tooltip>

					{switchNoteView ? (
						<Tooltip
							label="All Notes"
							tooltipId={tooltipOpened}
							withArrow
							color="gray"
						>
							<button className="search-btn" onClick={toggleNoteView}>
								<BiNote className="logo" />
							</button>
						</Tooltip>
					) : (
						<Tooltip
							label="Pinned Notes"
							tooltipId={tooltipOpened}
							withArrow
							color="gray"
						>
							<button className="search-btn" onClick={toggleNoteView}>
								<BsPinAngle className="logo" />
							</button>
						</Tooltip>
					)}

					<Tooltip
						label="Sort Ascending"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="search-btn">
							<BsSortNumericUp onClick={sortDateAscending} className="logo" />
						</button>
					</Tooltip>

					<Tooltip
						label="Sort Descending"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
					>
						<button className="search-btn">
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
						<button className="search-btn" onClick={deleteAllNotes}>
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
				<button className="search-btn">
					<BsSortNumericUp onClick={sortDateAscending} className="logo" />
				</button>

				<button className="date-btn">
					<BsSortNumericDown onClick={sortDateDescending} className="logo" />
				</button>
			</div> */}
		</div>
	);
}
