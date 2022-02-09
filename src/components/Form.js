import React from "react";

export default function Form(props) {
	return (
		<div>
			<h1>What to do today?</h1>
			<form className="form" onSubmit={props.handleSubmit}>
				<input
					type="text"
					placeholder="Input text"
					name="text"
					value={props.inputData.text}
					onChange={props.handleChange}
				></input>
				<button className="form-btn">Add todo</button>
			</form>
		</div>
	);
}
