import React from 'react'
import styled from 'styled-components'

function About() {
    const Button = styled.button`
    background-color: green;
    color: white;
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 36px;
    transition: 0.5s ease-in;


    &:hover {
    background-color: blue;
    color: black;
    border: 1px solid black;
    border-radius: 100%;
    scale: 1.2;
    }
    `

    return (
        <div className='h-screen'>

            <h1>About Us</h1>
            <Button>Click Me</Button>
        </div>
    )
}

export default About