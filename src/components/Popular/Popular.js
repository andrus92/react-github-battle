import React from "react";
import Repos from "./Repos";
import Tabs from "./Tabs";
import Loader from "../Loader";
import { useSelector } from "react-redux";

const Popular = (props) => {
    const loading = useSelector(state => state.popularReducer.loading);

    return (
        <React.Fragment>
            <Tabs />
            <Loader loading={loading}/> 
            <Repos />
        </React.Fragment>
    );
}

export default Popular;