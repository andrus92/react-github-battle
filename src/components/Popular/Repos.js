import { memo } from "react";

const Repos = memo((props) => {
    console.log('REPOS');
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index) => {
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
            })}
        </ul>
    );
})

export default Repos;