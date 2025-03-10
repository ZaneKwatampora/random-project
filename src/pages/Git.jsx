import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../styles/Git.css"

function Git() {

    const [gitInfo, setGitInfo] = useState([])

    const GIT_TOKEN = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
    const GIT_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
    const url = `https://api.github.com/users/${GIT_USERNAME}/repos`;

    useEffect(() => {
        const fetchGitInfo = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Authorization': `token ${GIT_TOKEN}`
                    }
                });
                setGitInfo(response.data);
            } catch (error) {
                console.error("Error fetching Git data", error);
            };
        };

        fetchGitInfo();
    }, [])
    return (
        <div className="main">
            <h1>GitHub Repos</h1>
            <div className='mainCard'>
                {gitInfo.length > 0 ? (
                    gitInfo.map((gitInfo) => (
                        <div key={gitInfo.id} className='card'>
                            <h3>{gitInfo.name}</h3>
                            <p>{gitInfo.description || "No Description Available"}</p>
                            <a href={gitInfo.homepage ||gitInfo.html_url} target="_blank" rel="noopener noreferrer">
                                Link to: {gitInfo.name}
                            </a>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Git