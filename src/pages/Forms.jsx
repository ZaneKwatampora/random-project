import React, { useState } from 'react'

function Forms() {
    const [color, setColor] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const [email, setEmail] = useState('')    
    const [error, setError] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        if (!email.includes('@')) {
            setError('Invalid email! Must contain "@"')
            return
        }
        setError("");
        alert(`Form submitted with ${email}`)
    }

    const toggleCheckbox = () => {
        setIsChecked(prev => !prev)
    }
    

    return (
        <div className='h-screen'>
            {/* <form>
                <label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='OGGA BOOGA LOOGA'
                    />
                </label>
                <p>Typed Name: {name}</p>
            </form> */}
            <form action="">
                <label >
                    <select value={color} onChange={(e) => setColor(e.target.value)}>
                        <option value="">---Select a color---</option>
                        <option value="green">green</option>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="pink">pink</option>
                    </select>
                </label>
                <p>Selcted color: {color}</p>

                <label >
                    Checkbox
                    <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleCheckbox}
                     />
                     i agree to the terms
                </label>
                <p>CheckBox is {isChecked ? "checked" : "unchecked"}</p>


            </form>

            <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Forms