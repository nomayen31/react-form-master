import React from 'react';
import useInputState from '../Hooks/UseInputState';

const HookForm = () => {
    // const [name, handleNameChange]= useInputState('rojoni')
    const emailState = useInputState('ohin@gmail.com')
    const handleSubmit = e =>{
        console.log('form data',emailState.value);
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input
                type="text" value={name} onChange={handleNameChange} name='name' placeholder='enter your name '/>
                <br /> */}
                <input {...emailState} type="email" name="email" id="" placeholder='enter your email' />
                <br />
                <input type="password" name="password" id="" placeholder='enter your phone'  />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;