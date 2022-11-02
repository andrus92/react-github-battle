import React from "react";
import Repos from "./Repos";
import Tabs from "./Tabs";
import { fetchPopularRepos } from './api.js'; 
import Loader from "./Loader";

class Popular extends React.Component {
    state = {
        selectedLanguages: 'All',
        repos: [],
        loading: true
    }

    componentDidMount = () => {
        fetchPopularRepos(this.state.selectedLanguages, this.getPopularReposCb)
    }

    getPopularReposCb = (data) => {
        this.setState({
            repos: data,
            loading: false,
        });
    }


    updateLanguage = (language) => {
        this.setState({
            selectedLanguages: language,
            loading: true,
        });
        fetchPopularRepos(language, this.getPopularReposCb);
    }

    render() {
        return (
            <React.Fragment>
                <Tabs 
                    selectedLanguages={this.state.selectedLanguages}
                    updateLanguage={this.updateLanguage}
                />
                <Loader loading={this.state.loading}/>
                {this.state.repos.length 
                    ? <Repos repos={this.state.repos} />
                    : null
                }
            </React.Fragment>
            
        );
    }
}

export default Popular;