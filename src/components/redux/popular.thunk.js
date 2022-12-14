import { fetchPopularRepos } from "../api";
import { getReposFailure, getReposLoading, getReposSuccess } from "./popular.actions"

export const getRepos = (language) => (dispatch) => {
    dispatch(getReposLoading());

    fetch(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
         .then(response => response.json())
         .then(data => dispatch(getReposSuccess(data.items)))
         .catch((error) => {console.log(error)});
}