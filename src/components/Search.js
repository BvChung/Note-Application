import React from "react";

export default function Search({ searchText, handleSearchText }) {
	return (
		<div>
			<input
				value={searchText}
				onChange={handleSearchText}
				type="text"
				placeholder="Search for note"
			></input>
		</div>
	);
}
