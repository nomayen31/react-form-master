import { useRef } from "react";

const RefFrom = () => {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text" ref={nameRef} name='name' placeholder='enter your name '/>
                <br />
                <input type="email" name="email" id="" placeholder='enter your email' />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='enter your phone'  />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefFrom;