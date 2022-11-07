import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerInput from "./PlayerInput"
import PlayerPreview from "./PlayerPreview";

const Battle = () => {

    const [playerOneName, setPlayerOneName] = useState('');
    const [playerTwoName, setPlayerTwoName] = useState('');
    const [playerOneImage, setPlayerOneImage] = useState('');
    const [playerTwoImage, setPlayerTwoImage] = useState('');

    const location = useLocation();

    const handleSubmit = (id, userName) => {
        if (id === 'playerOne') {
            setPlayerOneName(userName);
            setPlayerOneImage(`https://github.com/${userName}.png?size200`);
        } else {
            setPlayerTwoName(userName);
            setPlayerTwoImage(`https://github.com/${userName}.png?size200`);
        }
    }

    const handleReset = (id) => {
        if (id === 'playerOne') {
            setPlayerOneName('');
            setPlayerOneImage('');
        } else {
            setPlayerTwoName('');
            setPlayerTwoImage('');
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