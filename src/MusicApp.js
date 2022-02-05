import { useState } from "react";
import { Route, Switch, useLocation, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Albums from "./components/MusicApp/Albums/Albums";
import Header from "./components/MusicApp/Header/Header";
import PlayerMusic from "./components/MusicApp/PlayMusic/PlayMusic";
import "./css/style.css";
function MusicApp(props) {
	const [ song, setSong ] = useState("song1.mp3");
	const [ loggedin, setLoggedin ] = useState(false);
	const { id, name } = useParams();
	const location = useLocation();
	console.log(id, name);
	console.log(new URLSearchParams(location.search).get("moviename"));
	console.log(new URLSearchParams(location.search).get("songname"));
	let { path } = useRouteMatch();
	// alert(id);
	// initial song
	return (
		<div>
			{/* Header */}
			{props.children}
			<Link to={`${path}/homepage2`}>Sub Link</Link>
			<Switch>
				<Route path={`${path}/homepage2`}>
					<h1>Inner route</h1>
				</Route>
				<Route path={`${path}/homepage2`}>
					<h1>Inner route</h1>
				</Route>
			</Switch>
			<Header setLoggedin={(status) => setLoggedin(status)} />
			<h1>
				Currently Playing {id} and {name}
			</h1>
			{loggedin && (
				<div>
					{/* Albums */}
					<Albums setSong={(song) => setSong(song)} />
					{/* Player */}
					<PlayerMusic song={song} />
				</div>
			)}
		</div>
	);
}

export default MusicApp;
