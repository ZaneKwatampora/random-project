import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function CharDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
    }, [id]);

    if (!character) {
        return (
            <div>
                <h1 className='text-center mt-8 text-9xl'>Loading....</h1>
            </div>
        )
    }

    return (
        <div>
            <img src={character.image} alt={`Image of ${character.name}`} />
            <h1>{character.name} Details</h1>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <ul>
                <li>{character.origin.name}</li>
            </ul>

            <select className='styled-dropdown'>
                <option value="">Episodes {character.name} has appeared in.</option>
                {character.episode.map((epi, index) => (
                    <option key={index} value={epi} disabled>
                        Episode {index + 1}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CharDetails