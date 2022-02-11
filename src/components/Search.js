import React from "react";
import "../css/search.css";
import { BiSearch } from "react-icons/bi";

export default function Search({ searchNote, handleNoteSearch }) {
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
		</div>
	);
}
