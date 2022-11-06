import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeBattle } from "../api";
import PlayerPreview from "./PlayerPreview";
import PlayerDetails from "./PlayerDetails";

const Results = (props) => {
    const [winnerName, setWinnerName] = useState('');
    const [winnerImage, setWinnerImage] = useState('');
    const [winnerFullName, setWinnerFullName] = useState('');
    const [winnerLocation, setWinnerLocation] = useState('');
    const [winnerFollowers, setWinnerFollowers] = useState('');
    
    const [loserName, setLoserName] = useState('');
    const [loserImage, setLoserImage] = useState('');
    const [loserFullName, setLoserFullName] = useState('');
    const [loserLocation, setLoserLocation] = useState('');
    const [loserFollowers, setLoserFollowers] = useState('');

    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        
        const searchParams = new URLSearchParams(location.search);
        const playerOne = searchParams.get('playerOneName');
        const playerTwo = searchParams.get('playerTwoName');
        (async () => {
            const result = await makeBattle(playerOne, playerTwo);
            if (!result) {
                navigate("/nosuchuser");
            } else {
                setWinnerName(result.winner.profile.login);
                setWinnerImage(`https://github.com/${result.winner.profile.login}.png?size200`);
                setWinnerFullName(result.winner.profile.name);
                setWinnerLocation(result.winner.profile.location);
                setWinnerFollowers(result.winner.profile.followers);

                setLoserName(result.loser.profile.login);
                setLoserImage(`https://github.com/${result.loser.profile.login}.png?size200`);
                setLoserFullName(result.loser.profile.name);
                setLoserLocation(result.loser.profile.location);
                setLoserFollowers(result.loser.profile.followers);
            }

            
        })();
        
    }, [])
    
    return (
        <React.Fragment>
            <div className="row">
                <div className="column">
                    <h1>Winner</h1>
                    <PlayerPreview
                        username={winnerName}
                        avatar={winnerImage}
                    >
                        <PlayerDetails 
                            fullName={winnerFullName}
                            location={winnerLocation}
                            followers={winnerFollowers}
                        />
                    </PlayerPreview>
                </div>

                <div className="column">
                <h1>Loser</h1>
                    <PlayerPreview
                        username={loserName}
                        avatar={loserImage}
                    >
                    <PlayerDetails 
                        fullName={loserFullName}
                        location={loserLocation}
                        followers={loserFollowers}
                    />
                    </PlayerPreview>
                </div>
            </div>
        </React.Fragment>
        
        
    );
}

export default Results;