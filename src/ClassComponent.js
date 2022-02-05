import { Component } from "react";

export class ClassComponent extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		song: "",
	// 	};
	// }
	state = {
		song: "",
	};
	render() {
		return (
			<h1>
				{this.props.song} {this.state.song} <button onClick={() => this.setState({ song: "song1.mp3" })}>Click</button>
			</h1>
		);
	}
}
export class ClassComponent3 extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<h1>
				Class3
				{/* {this.props.song} */}
			</h1>
		);
	}
}
export function ClassComponent2() {
	return <h1>Multiple</h1>;
}
// export {ClassComponent};
