const PlayerDetails = (props) => {
    return (
        <div>
            <h2 className="fullname">Name: {props.fullName}</h2>
            <h3 className="location">Location: {props.location}</h3>
            <p className="followers">Followers: {props.followers}</p>
        </div>
    );
}

export default PlayerDetails;