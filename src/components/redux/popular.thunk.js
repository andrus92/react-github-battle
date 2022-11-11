import { fetchPopularRepos } from "../api";
import { getReposFailure, getReposLoading, getReposSuccess } from "./popular.actions"

export const getRepos = (language) => (dispatch) => {
    dispatch(getReposLoading());

    // return fetchPopularRepos(lang)
    //     .then (data => dispatch(getReposSuccess(data)))
    //     .catch (error => dispatch(getReposError(data)))
    // return fetchPopularRepos(lang)
    //      //.then (data => dispatch(getReposSuccess(data)))
    //      .then ((data) => (console.log(data)))
    //      .catch (error => dispatch(getReposFailure(data)))
    // fetch(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    //     .then(response => response.json())
    //     .then((data) => {console.log(data.items)})
    //     .catch((error) => {console.log(error)});
    fetch(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
         .then(response => response.json())
         .then(data => dispatch(getReposSuccess(data.items)))
         .catch((error) => {console.log(error)});
}