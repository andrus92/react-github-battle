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
    const [language, setLanguage] = useState(stateLang);
    
    

    useEffect(() => {
        fetchPopularRepos(language, getPopularReposCb)
    }, []);

    const getPopularReposCb = (data, lang) => {
        setRepos(data);
        setLoading(false);
        setSearchParams({language: lang});
        setLanguage(lang);
    }

    const updateLanguage = (lang) => {
        if (lang !== language) {
            setLoading(true);
            fetchPopularRepos(lang, getPopularReposCb);
        }
    }

    return (
        <React.Fragment>
            <Tabs 
                selectedLanguages={language}
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