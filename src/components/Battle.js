import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerInput from "./PlayerInput"; 

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
        <div>
            <div className="row">
                {!playerOneImage ?
                    <PlayerInput
                        id='playerOne' 
                        label='Player 1'
                        onSubmit={handleSubmit}
                    /> :
                    <div>
                        <div className="column">
                            <img className="avatar" src={playerOneImage} alt="Avatar"></img>
                            <h2 className="username">@{playerOneName}</h2>
                            <button className="reset" onClick={() => handleReset('player1')}>Reset</button>
                        </div>
                    </div>
                }
                
                {!playerTwoImage ?
                    <PlayerInput
                        id='playerTwo' 
                        label='Player 2'
                        onSubmit={handleSubmit}
                    /> :
                    <div>
                        <div className="column">
                            <img className="avatar" src={playerTwoImage} alt="Avatar"></img>
                            <h2 className="username">@{playerTwoName}</h2>
                            <button className="reset" onClick={() =>handleReset('player2')}>Reset</button>
                        </div>
                    </div>
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
        </div>
    );
}

export default Battle;