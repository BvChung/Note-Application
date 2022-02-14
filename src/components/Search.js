import React from "react";
import "../css/search.css";
import { BiSearch, BiSortUp, BiSortDown } from "react-icons/bi";

export default function Search({
	searchNote,
	handleNoteSearch,
	sortDateAscending,
	sortDateDescending,
}) {
	return (
		<div className="search">
			<div className="search-container">
				<BiSearch className="search-icon" />
				<input
					className="search-box"
					value={searchNote}
					onChange={handleNoteSearch}
					type="text"
					placeholder="Search for note"
				></input>
			</div>
			<div className="sort">
				<button>
					<BiSortUp onClick={sortDateAscending} className="search-icon" />
				</button>

				<button>
					<BiSortDown onClick={sortDateDescending} className="search-icon" />
				</button>
			</div>
		</div>
	);
}
