import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeBattle } from "../api";

const Results = (props) => {
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const playerOne = searchParams.get('playerOneName');
        const playerTwo = searchParams.get('playerTwoName');
        //makeBattle()
        const a = makeBattle(playerOne, playerTwo);
    }, [])
    return (
        <h1>Results</h1>
    );
}

export default Results;