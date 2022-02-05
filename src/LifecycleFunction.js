import React, { useEffect, useState } from "react";

export default function LifecycleFunction(props) {
	const [ song, updateSong ] = useState("");
	useEffect(
		() => {
			console.log("loaded");
			console.log("updating");
			return () => {
				console.log("unmount");
			};
		},
		[ song ],
	);
	return (
		<div>
			<button onClick={() => updateSong("new song")}>Click here</button>
		</div>
	);
}
