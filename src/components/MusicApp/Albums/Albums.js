import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));
export default function Albums(props) {
	const classes = useStyles();
	return (
		<div className="mb-4">
			{/* Display List of albums */}
			<Container maxWidth="sm">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<img src="images/music/main-poster.jpg" className="poster" alt="poster" />
							<div onClick={() => props.setSong("song1.mp3")} className="playIcon">
								<PlayCircleFilledIcon color="primary" fontSize="large" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							<img src="images/music/album1.jpg" className="poster" alt="poster" />
							<div onClick={() => props.setSong("song2.mp3")} className="playIcon">
								<PlayCircleFilledIcon color="secondary" fontSize="large" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							<img src="images/music/album2.jpg" className="poster" alt="poster" />
							<div onClick={() => props.setSong("song3.mp3")} className="playIcon">
								<PlayCircleFilledIcon color="secondary" fontSize="large" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>
							<img src="images/music/album3.jpg" className="poster" alt="poster" />
							<div onClick={() => props.setSong("song4.mp3")} className="playIcon">
								<PlayCircleFilledIcon color="secondary" fontSize="large" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>
							<img src="images/music/album4.jpg" className="poster" alt="poster" />
							<div onClick={() => props.setSong("song5.mp3")} className="playIcon">
								<PlayCircleFilledIcon color="secondary" fontSize="large" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>
							<img src="images/music/album5.jpg" className="poster" alt="poster" />
							<div onClick={() => props.setSong("song6.mp3")} className="playIcon">
								<PlayCircleFilledIcon color="secondary" fontSize="large" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>
							<img src="images/music/album6.jpg" className="poster" alt="poster" />
							<div onClick={() => props.setSong("song7.mp3")} className="playIcon">
								<PlayCircleFilledIcon color="secondary" fontSize="large" />
							</div>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
