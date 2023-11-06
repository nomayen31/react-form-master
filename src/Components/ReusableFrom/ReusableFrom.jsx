import React from 'react';

const ReusableFrom = ({formTitle,handleSubmit, submitButtonText = 'Submit'}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name : e.target.name.value,
            password : e.target.password.value,
            email : e.target.email.value,
        }
        handleSubmit(data);
    }
   
    return (
        <div>
            <h2>{formTitle}</h2>
             <form onSubmit={handleLocalSubmit}>
                <input
                type="text" name='name' placeholder='enter your name '/>
                <br />
                <input type="email" name="email" id="" placeholder='enter your email' />
                <br />
                <input type="password" name="password" id="" placeholder='enter your phone'  />
                <br />
                <input type="submit" value={submitButtonText} />
            </form>
        </div>
    );
};

export default ReusableFrom;