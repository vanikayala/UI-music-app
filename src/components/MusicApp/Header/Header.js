import { useState, useEffect } from "react";
import { Button, Container, TextField } from "@material-ui/core";
import "./style.css";
import SignUp from "./SignUp";
import axios from "axios";
export default function Header(props) {
	const [ userData, setData ] = useState({
		username: "",
		password: "",
	});
	const [ status, setStatus ] = useState("player");
	const [ loggedin, setLoggedin ] = useState(false);
	const styles = {
		backgroundColor: "white",
	};
	// const styles2 = {
	// 	color: "red",
	// };
	const updateData = (e) => {
		let obj = {};
		obj[e.target.name] = e.target.value;
		setData((prevData) => {
			return { ...prevData, ...obj };
		});
	};
	const submit = (e) => {
		e.preventDefault();
		localStorage.setItem("userData", JSON.stringify(userData));
	};
	const login = (e) => {
		e.preventDefault();
		// let username = localStorage.getItem("userData") !== null && JSON.parse(localStorage.getItem("userData")).username;
		// let password = localStorage.getItem("userData") !== null && JSON.parse(localStorage.getItem("userData")).password;
		// if (username === userData.username && password === userData.password) {
		alert("Login successful");
		localStorage.setItem("loggedin", 1);
		setLoggedin(true);
		setStatus("player");
		getUser(29);
		// } else {
		// 	alert("Wrong username/password");
		// 	setLoggedin(false);
		// }
	};
	useEffect(
		() => {
			let logged = localStorage.getItem("loggedin") !== null;
			if (logged) {
				setLoggedin(true);
				setStatus("player");
				props.setLoggedin(true);
			} else {
				setLoggedin(false);
				setStatus("");
				props.setLoggedin(false);
			}
		},
		[ loggedin ],
	);

	const createUser = (e) => {
		e.preventDefault();
		console.log("User created");
		let updateUser = { email: userData.username, password: userData.password };
		// fetch("http://localhost:3000/api/createUser", {
		// 	method: "POST",
		// 	body: JSON.stringify(updateUser),
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		if (data.success) {
		// 			alert(data.message);
		// 		} else {
		// 			alert("Something went wrong");
		// 		}
		// 	})
		// 	.catch((error) => console.log(error));
		axios
			.post("http://localhost:3000/api/createUser", JSON.stringify(updateUser), {
				headers: {
					"content-type": "application/json",
				},
			})
			.then((res) => {
				if (res.data.success) {
					alert(res.data.message);
				} else {
					alert("Something went wrong");
				}
			})
			.catch((error) => console.log(error));
	};
	const getUser = (id) => {
		// fetch("http://localhost:3000/api/getUserById/" + id)
		// 	.then((response) => response.json())
		// 	.then((res) => {
		// 		if (res.success) {
		// 			console.log(res.data);
		// 			alert(res.message);
		// 			localStorage.setItem("userData", JSON.stringify({ username: res.data[0].email, password: "" }));
		// 		} else {
		// 			alert("Something went wrong");
		// 		}
		// 	})
		// 	.catch((error) => console.log(error));
		axios
			.get("http://localhost:3000/api/getUserById/" + id)
			.then((res) => {
				if (res.data.success) {
					alert(res.data.message);
					localStorage.setItem("userData", JSON.stringify({ username: res.data.data[0].email, password: "" }));
				} else {
					alert("Something went wrong");
				}
			})
			.catch((error) => console.log(error));
	};
	const updateUser = (e, id) => {
		e.preventDefault();
		let updateUser = { email: userData.username, password: userData.password };
		// fetch("http://localhost:3000/api/updateUser/" + id, {
		// 	method: "PUT",
		// 	body: JSON.stringify(updateUser),
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		if (data.success) {
		// 			alert(data.message);
		// 		} else {
		// 			alert("Something went wrong");
		// 		}
		// 	})
		// 	.catch((error) => console.log(error));
		axios
			.put("http://localhost:3000/api/updateUser/" + id, JSON.stringify(updateUser), {
				headers: {
					"content-type": "application/json",
				},
			})
			.then((res) => {
				if (res.data.success) {
					alert(res.data.message);
				} else {
					alert("Something went wrong");
				}
			})
			.catch((error) => console.log(error));
	};
	const deleteUser = (e, id) => {
		e.preventDefault();
		// fetch("http://localhost:3000/api/deleteUser/" + id, {
		// 	method: "DELETE",
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		if (data.success) {
		// 			alert(data.message);
		// 		} else {
		// 			alert("Something went wrong");
		// 		}
		// 	})
		// 	.catch((error) => console.log(error));
		axios
			.delete("http://localhost:3000/api/deleteUser/" + id)
			.then((res) => {
				if (res.data.success) {
					alert(res.data.message);
				} else {
					alert("Something went wrong");
				}
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			{/* App Name */}
			<h1>Music Store Application</h1>
			{!loggedin && (
				<div>
					<Button color="primary" variant="contained" onClick={() => setStatus("signup")}>
						Sign Up
					</Button>
					&nbsp;&nbsp;&nbsp;
					<Button color="primary" variant="contained" onClick={() => setStatus("signin")}>
						Sign In
					</Button>
				</div>
			)}
			{loggedin && (
				<div>
					<p>
						Welcome {localStorage.getItem("userData") !== null && JSON.parse(localStorage.getItem("userData")).username}
					</p>
					<Button
						color="default"
						variant="contained"
						onClick={() => {
							localStorage.removeItem("loggedin");
							setLoggedin(false);
						}}>
						Logout
					</Button>
				</div>
			)}
			<br />
			{status === "signup" && (
				<SignUp
					styles={styles}
					username={userData.username}
					password={userData.password}
					updateData={(e) => updateData(e)}
					submit={createUser}
				/>
			)}
			{status === "signin" && (
				<Container maxWidth="sm">
					<div style={{ ...styles }}>
						{/* <form onSubmit={login}> */}
						{/* <form onSubmit={(e) => updateUser(e, 29)}> */}
						<form onSubmit={(e) => deleteUser(e, 29)}>
							<h1 style={{ color: "black" }}>Sign In Form</h1>
							<TextField
								type="text"
								placeholder="username"
								name="username"
								value={userData.username}
								onChange={(e) => updateData(e)}
							/>
							<br />
							<TextField
								type="password"
								placeholder="password"
								name="password"
								value={userData.password}
								onChange={(e) => updateData(e)}
							/>
							<br />

							<Button color="primary" variant="contained" type="submit">
								Sign In
							</Button>
						</form>
						<br />
					</div>
				</Container>
			)}
			<br />
		</div>
	);
}
