import React, { Component } from "react";

export default class Lifecycle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			song: "",
		};
		console.log("Constructor");
		// this.submit = this.submit.bind(this);
	}
	// static getDerivedStateFromProps() {
	// 	console.log("derivedstatefromprops");
	// }
	componentDidMount() {
		console.log("Didmount");
		this.setState({ song: "new" });
	}
	componentWillUnmount() {
		console.log("unmounting");
	}
	submit = () => {
		console.log("Submitted");
	};
	submit2(e) {
		console.log("Cancelled", e);
	}
	handleChange = (e) => {
		console.log("event ", e.target.value);
	};
	render() {
		console.log("Render");
		return (
			<div>
				<button onClick={this.submit}>Submit</button>
				<button onClick={(e) => this.submit2(e)}>Cancel</button>
				<input type="text" onChange={this.handleChange} />
			</div>
		);
	}
}
