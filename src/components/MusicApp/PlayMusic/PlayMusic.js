import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default function PlayMusic(props) {
	return (
		<div className="player">
			{/* Music Player */}
			<AudioPlayer src={"music/" + props.song} autoPlay={false} showJumpControls={false} />
		</div>
	);
}
