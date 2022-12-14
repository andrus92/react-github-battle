const id = 'YOUR_CLIENT_ID';
const sec  = 'YOUR_SECRET_ID';

const params = `?client_id=${id}?client_secret=${sec}`;


const getProfile = (userName) => fetch(`https://api.github.com/users/${userName}${params}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } 
        throw new Error(response.status);
    })
    .catch(error => handleError(error));

const getRepos = (userName) => fetch(`https://api.github.com/users/${userName}/repos${params}&per_page=100`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } 
        throw new Error(response.status);
    })
    .catch(error => handleError(error));


const getStarCount = (repos) => {
    return repos.reduce((acc, repo) => {
        return acc = repo.stargazers_count;
    }, 0)
}

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return followers * 3 + totalStars;
}

const handleError = (error) => {
    console.error(error);
}

const getUserData = async (userName) => {
    const profile = await getProfile(userName);
    const repos = await getRepos(userName);

    if (!profile || !repos) {
        return null;
    }

    return {
        profile,
        score: calculateScore(profile, repos),
    }
}

export const makeBattle = async (userName1, userName2) => {
    const user1 = await getUserData(userName1);
    const user2 = await getUserData(userName2);
    
    if (!user1 || !user2) {
        return null;
    }

    if (user1.score < user2.score) {
        return {
            winner: user2,
            loser: user1,
        }
    }
    
    return {
        winner: user1,
        loser: user2,
    }
}

// export const fetchPopularRepos = (language, cbFunction) => {
export const fetchPopularRepos = (language) => {
    fetch(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
        .then(response => response.json())
        .then(data => data.items)
        .catch(error => handleError(error));
}