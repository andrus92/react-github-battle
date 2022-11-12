import React from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerInput from "./PlayerInput"
import PlayerPreview from "./PlayerPreview";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    updatePlayerOneName,
    updatePlayerOneImg,
    updatePlayerTwoName,
    updatePlayerTwoImg
 } from "../redux/battle.actions";

const Battle = () => {

    const dispatch = useDispatch();
    const playerOneName = useSelector(state => state.battleReducer.playerOneName);
    const playerTwoName = useSelector(state => state.battleReducer.playerTwoName);
    const playerOneImage = useSelector(state => state.battleReducer.playerOneImage);
    const playerTwoImage = useSelector(state => state.battleReducer.playerTwoImage);

    const location = useLocation();

    useEffect(() => {
        dispatch(updatePlayerOneName(''));
        dispatch(updatePlayerOneImg(''));
        dispatch(updatePlayerTwoName(''));
        dispatch(updatePlayerTwoImg(''));
    }, []);

    const handleSubmit = (id, userName) => {
        if (id === 'playerOne') {
            dispatch(updatePlayerOneName(userName));
            dispatch(updatePlayerOneImg(`https://github.com/${userName}.png?size200`));
        } else {
            dispatch(updatePlayerTwoName(userName));
            dispatch(updatePlayerTwoImg(`https://github.com/${userName}.png?size200`));
        }
    }

    const handleReset = (id) => {
        if (id === 'playerOne') {
            dispatch(updatePlayerOneName(''));
            dispatch(updatePlayerOneImg(''));
        } else {
            dispatch(updatePlayerTwoName(''));
            dispatch(updatePlayerTwoImg(''));
        }
    }

    return (
        <React.Fragment>
            <div className="row">
                {!playerOneImage ?
                    <PlayerInput
                        id='playerOne' 
                        label='Player 1'
                        onSubmit={handleSubmit}
                    /> :
                    <PlayerPreview
                        username={playerOneName}
                        avatar={playerOneImage}
                    >
                        <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
                    </PlayerPreview>
                }
                
                {!playerTwoImage ?
                    <PlayerInput
                        id='playerTwo' 
                        label='Player 2'
                        onSubmit={handleSubmit}
                    /> :
                    <PlayerPreview
                        username={playerTwoName}
                        avatar={playerTwoImage}
                    >
                        <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
                    </PlayerPreview>
                }
            </div>
            {(playerOneImage && playerTwoImage) ?
                <Link 
                    className="button"
                    to={{
                        pathname: `${location.pathname}/results`,
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
                    }

                    }
                >
                    Battle
                </Link> :
                null
            }
        </React.Fragment>
    );
}

export default Battle;