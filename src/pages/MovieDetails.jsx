import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Award, Clock, Languages } from 'lucide-react';
import "../styles/MovieDetails.css"

function MovieDetails() {
    const { movieTitle } = useParams();
    const [movieData, setMovieData] = useState(null);
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

    useEffect(() => {
        if (!movieTitle) return;

        const fetchMovieData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(movieTitle)}`);
                setMovieData(response.data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovieData();
    }, [movieTitle]);

    if (!movieData) {
        return <h1 className='text-center mt-8 text-9xl'>Loading....</h1>;
    }
    return (
        <div className="mainDetails">
            <div className='detailsRating'>
                <img className='imagePoster' src={movieData.Poster} alt={movieData.Title} />
            </div>

            <div className='detailsCard'>
                <h1 className="movieTitle">{movieData.Title} <br /><p>Released: {movieData.Released}</p></h1>
                <div className='detailsInfo'>
                    <p>Rated: <span>{movieData.Rated !== "N/A" ? movieData.Rated : "No Age Ratings Found"}</span></p>
                    <p>Genres: {movieData.Genre !== "N/A" ? movieData.Genre : "No Genres Found"}</p>
                    <p>Directed by: {movieData.Director !== "N/A" ? movieData.Director : "No Director Found"}, | Written by: {movieData.Writer !== "N/A" ? movieData.Writer : "No Writers Found"}</p>
                    <p className="moviePlot">Plot: {movieData.Plot !== "N/A" ? movieData.Plot : "No Plot Found"}</p>
                    <p>Actors: {movieData.Acrtors !== "N/A" ? movieData.Actors : "No Actors Found"}</p>
                </div>
                <div className='detailsStuff'>
                    <ul>
                        <li><Clock /> {movieData.Runtime !== "N/A" ? movieData.Runtime : "No Runtime Found"}</li>
                        <li><Languages /> {movieData.Language !== "N/A" ? movieData.Language : "No Languages Found"}</li>
                        <li><Award /> {movieData.Awards !== "N/A" ? movieData.Awards : "No Awards Found"}</li>
                    </ul>
                </div>
                <ul className='detailsUl'>
                    {movieData.Ratings.map((rating, index) => (
                        <li key={index}>
                            {rating.Source}: {rating.Value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MovieDetails;
