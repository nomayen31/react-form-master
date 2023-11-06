import React, { useState } from 'react';

const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [name, setName] = useState('')
    const [error, setError]= useState('')
    const handleSubmit = (e) =>{
            e.preventDefault()
            if (password.length < 6) {
                setError('password must be 6 charter ')
            }else{
                setError('')
            }
            console.log(name,email, password);
             
    }
    const handleEmailChange = e =>{
            // console.log(e.target.value);
            setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                value={name}
                onChange={handleNameChange}
                type="text" name='name' placeholder='enter your name '/>
                <br />
                <input
                    onChange={handleEmailChange}
                type="email" name="email" id="" placeholder='enter your email' />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" id="" placeholder='enter your phone' required />
                <br />
                <input type="submit" value="submit" />
            </form>
           {
            error && <p>{error}</p>
           }
        </div>
    );
};

export default StatefulForm;