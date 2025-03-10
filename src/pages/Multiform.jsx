import React, { useState } from 'react'

function Multiform() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className='h-screen'>
            <form>
                <label>
                    Usernname:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <p>Username: {formData.username}, Email: {formData.email}</p>
            </form>
        </div>
    )
}

export default Multiform