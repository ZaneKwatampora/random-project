import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Movie.css"
import { Search } from "lucide-react";

function Movie() {
    const [movie, setMovie] = useState(null);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("One Piece");

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const OMDB_URL = import.meta.env.VITE_OMDB_BASE_URL;

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get(`${OMDB_URL}?apikey=${API_KEY}&t=${query}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie data", error);
            }
        };

        fetchMovieData();
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div className="mainMovie">
            <h1> Search For Movies</h1> 
            <div className="mainSearchMovie">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter movie name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit"><Search/></button>
                </form>
            </div>

            <div className="mainCardMovie">
                {movie ? (
                    <div>
                        <h2>{movie.Title}</h2>
                        <div>
                            <Link to={`/movie/${movie.Title}`}>
                                <img src={movie.Poster} alt={`Image of ${movie.Title}`} />
                            </Link>
                        </div>
                        <ul>
                            {movie.Ratings.map((rating, index) => (
                                <li key={index}>
                                    {rating.Source}: {rating.Value}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Movie;
