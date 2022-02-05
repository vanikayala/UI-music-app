import { Button, Container, TextField } from "@material-ui/core";
import React from "react";

export default function SignUp(props) {
	return (
		<div>
			<Container maxWidth="sm">
				<div style={{ ...props.styles }}>
					<form onSubmit={props.submit}>
						<h1 style={{ color: "black" }}>Sign Up Form</h1>
						<TextField
							type="text"
							placeholder="username"
							name="username"
							value={props.username}
							onChange={(e) => props.updateData(e)}
						/>
						<br />
						<TextField
							type="password"
							placeholder="password"
							name="password"
							value={props.password}
							onChange={(e) => props.updateData(e)}
						/>
						<br />

						<Button color="primary" variant="contained" type="submit">
							Sign Up
						</Button>
					</form>
					<br />
				</div>
			</Container>
		</div>
	);
}
