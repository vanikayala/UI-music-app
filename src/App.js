import "./App.css";
import MusicApp from "./MusicApp";
import "./css/style.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Heading from "./components/Heading";
function App() {
	return (
		<div className="App">
			{/* <header className="App-header"> */}
			<Heading />
			<Switch>
				<Route path="/" exact strict sensitive>
					<h1>Homepage</h1>
				</Route>
				{/* <Redirect from="/v1" to="/v2" /> */}
				<Redirect from="/logout" to="/signup" />
				<Route path="/music/:id/:name">
					<MusicApp song="song1.mp3" />
				</Route>
				<Route path="/music">
					<MusicApp song="song1.mp3" />
				</Route>
				<Route path="/v2">
					<h1>Latest Version</h1>
				</Route>
				<Route path="/signup">
					<h1>Sign Up</h1>
				</Route>
				<Route path="/music2" component={MusicApp} />
				<Route path="/notfound" render={() => <h1>404 Not Found!</h1>} />
				<Route path="/priority" component={MusicApp} render={() => <h1>Heading 3</h1>}>
					<h1>Heading 1</h1>
				</Route>
				<Route path="/home">
					<h1>Dashboard</h1>
				</Route>
				<Route path="*">
					<h1>404 Not Found!</h1>
				</Route>
			</Switch>
			{/* </header> */}
		</div>
	);
}

export default App;
