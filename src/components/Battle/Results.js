import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeBattle } from "../api";
import PlayerPreview from "./PlayerPreview";
import PlayerDetails from "./PlayerDetails";
import Loader from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import { updateResults } from "../redux/battle.actions";

const Results = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const winnerName = useSelector(state => state.battleReducer.winnerInfo.name);
    const winnerImage = useSelector(state => state.battleReducer.winnerInfo.image);
    const winnerFullName = useSelector(state => state.battleReducer.winnerInfo.fullName);
    const winnerLocation = useSelector(state => state.battleReducer.winnerInfo.location);
    const winnerFollowers = useSelector(state => state.battleReducer.winnerInfo.followers);
    
    const loserName = useSelector(state => state.battleReducer.loserInfo.name);
    const loserImage = useSelector(state => state.battleReducer.loserInfo.image);
    const loserFullName = useSelector(state => state.battleReducer.loserInfo.fullName);
    const loserLocation = useSelector(state => state.battleReducer.loserInfo.location);
    const loserFollowers = useSelector(state => state.battleReducer.loserInfo.followers);

    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        
        const searchParams = new URLSearchParams(location.search);
        const playerOne = searchParams.get('playerOneName');
        const playerTwo = searchParams.get('playerTwoName');
        if (playerOne === null && playerTwo === null) {
            navigate("/nosuchuser");
        } else {
            (async () => {
                const result = await makeBattle(playerOne, playerTwo);
                if (!result) {
                    navigate("/nosuchuser");
                } else {
                    dispatch(updateResults({
                        winnerName: result.winner.profile.login,
                        winnerImage: `https://github.com/${result.winner.profile.login}.png?size200`,
                        winnerFullName: result.winner.profile.name,
                        winnerLocation: result.winner.profile.location,
                        winnerFollowers: result.winner.profile.followers,
                        loserName: result.loser.profile.login,
                        loserImage: `https://github.com/${result.loser.profile.login}.png?size200`,
                        loserFullName: result.loser.profile.name,
                        loserLocation: result.loser.profile.location,
                        loserFollowers: result.loser.profile.followers,
                    }));
    
                    setLoading(false);
                }
            })();
        }
    }, [])
    
    return (
        <React.Fragment>
            <Loader loading={loading}/>
            {!loading ?
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
                :
                null
            }   
        </React.Fragment> 
    );
}

export default Results;