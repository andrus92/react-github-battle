import { useState } from "react";

const PlayerInput = (props) => {
    const [userName, setUserName] = useState('');

    const handleOnChange = (event) => {
        setUserName(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(props.id, userName);
    }

    return (
        <form className="column" onSubmit={handleSubmit}>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type="text" 
                id={props.id}
                placeholder="GitHub Username"
                autoComplete="off"
                value={userName}
                onChange={handleOnChange}
            />
            <button 
                className="button" 
                type="submit"
                disabled={!userName}
            >
                Submit
            </button>
        </form>
    );
}

export default PlayerInput;