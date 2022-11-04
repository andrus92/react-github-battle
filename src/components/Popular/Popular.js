import React from "react";
import Repos from "./Repos";
import Tabs from "./Tabs";
import Loader from "../Loader";
import { fetchPopularRepos } from '../api.js'; 
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Popular = (props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const paramLang = searchParams.get('language');
    const stateLang = (paramLang ? paramLang : 'All' );

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    

    useEffect(() => {
        fetchPopularRepos(stateLang, getPopularReposCb)
    }, []);

    const getPopularReposCb = (data, stateLang) => {
        setRepos(data);
        setLoading(false);
        setSearchParams({language: stateLang});
    }

    const updateLanguage = (language) => {
        if (language !== stateLang) {
            setLoading(true);
            fetchPopularRepos(language, getPopularReposCb);
        }
    }

    return (
        <React.Fragment>
            <Tabs 
                selectedLanguages={stateLang}
                updateLanguage={updateLanguage}
            />
            <Loader loading={loading}/>
            {repos.length 
                ? <Repos repos={repos} />
                : null
            }
        </React.Fragment>
    );
}

export default Popular;