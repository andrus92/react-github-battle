import { memo } from "react";
import { useSelector } from "react-redux";

const Repos = memo((props) => {

    const repos = useSelector(state => state.popularReducer.repos);

    const renderRepos = () => {
        if (repos.length > 0) {
            return repos.map((repo, index) => {
                return (
                    <li key={repo.name} className="popular-item">
                        <div className="popular-rank">#{index +1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img src={repo.owner.avatar_url} alt="avatar" className="avatar"></img>
                            </li>
                            <li><a href={repo.html_url} target="_blank">{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>  
                )
            })
        }
        return null;
    }

    return (
        <ul className="popular-list">
            {renderRepos()}
        </ul>
    );
})

export default Repos;