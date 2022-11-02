import React from "react";
import Repos from "./Repos";
import Tabs from "./Tabs";
import Loader from "./Loader";
import { fetchPopularRepos } from './api.js'; 
import { useState, useEffect } from "react";

const Popular = (props) => {

    const [selectedLanguages, setSelectedLanguages] = useState('All');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPopularRepos(selectedLanguages, getPopularReposCb)
    }, []);

    const getPopularReposCb = (data, language) => {
        setRepos(data);
        setLoading(false);
        setSelectedLanguages(language);
    }

    const updateLanguage = (language) => {
        if (language !== selectedLanguages) {
            setLoading(true);
            fetchPopularRepos(language, getPopularReposCb);
        }
    }

    return (
        <React.Fragment>
            <Tabs 
                selectedLanguages={selectedLanguages}
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