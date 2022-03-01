import React from "react";
import "../css/search.css";
import { BiSearch } from "react-icons/bi";
import { FiTrash, FiPlus } from "react-icons/fi";
import { BsSortNumericDown, BsSortNumericUp } from "react-icons/bs";
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
	switchNoteView,
}) {
	const tooltipOpened = false;
	const clearSearchText = useClearSearchText();

	return (
		<>
			<div className="nav-search">
				<div className="nav-content">
					<div className="nav-searchbar">
						<input
							type="text"
							className="searchbar"
							placeholder="Search for note..."
							aria-label="search"
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
									zIndex="999"
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
							zIndex="999"
						>
							<button
								className="search-btn"
								onClick={() => {
									if (!switchNoteView) toggleCreateNote();
								}}
							>
								<FiPlus className="logo" />
							</button>
						</Tooltip>

						<Tooltip
							label="Sort Ascending"
							tooltipId={tooltipOpened}
							withArrow
							color="gray"
							zIndex="999"
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
							zIndex="999"
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
							zIndex="999"
						>
							<button className="search-btn" onClick={deleteAllNotes}>
								<FiTrash className="logo" />
							</button>
						</Tooltip>
					</div>
				</div>
			</div>
			<div className="nav-content-bot sticky">
				<div className="sort">
					<Tooltip
						label="Create Note"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
						zIndex="999"
					>
						<button
							className="search-btn"
							onClick={() => {
								if (!switchNoteView) toggleCreateNote();
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
						>
							<FiPlus className="logo" />
						</button>
					</Tooltip>

					<Tooltip
						label="Sort Ascending"
						tooltipId={tooltipOpened}
						withArrow
						color="gray"
						zIndex="999"
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
						zIndex="999"
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
						zIndex="999"
					>
						<button className="search-btn" onClick={deleteAllNotes}>
							<FiTrash className="logo" />
						</button>
					</Tooltip>
				</div>
			</div>
		</>
	);
}
