import React from "react";
import "../css/search.css";
import { BiSearch, BiSortUp, BiSortDown } from "react-icons/bi";

export default function Search({
	searchNote,
	handleNoteSearch,
	sortDateAscending,
	sortDateDescending,
	openPinNotes,
}) {
	return (
		<div className="search-c">
			<div className="open-notes">
				<button className="open-btn" onClick={openPinNotes}>
					Pinned Notes
				</button>
			</div>
			<div className="content">
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
