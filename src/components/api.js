export const fetchPopularRepos = (language, cbFunction) => {
    fetch(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
        .then(response => response.json())
        .then(data => cbFunction(data.items, language))
        .catch(error => console.log(error));
}

