import React, { useEffect } from "react";

function List(props) {
	const taskElements = props.tasks.map((task, i) => {
		return (
			<div key={task.id}>
				<p>{task.taskText}</p>
			</div>
		);
	});
	console.log(taskElements);

	return <div>{taskElements}</div>;
}

export default List;
