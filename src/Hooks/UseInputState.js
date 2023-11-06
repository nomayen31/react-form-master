import { useState } from "react";


const useInputState = (defaultValue = '') =>{
    const [value, setValue] = useState(defaultValue);

    const handleChnage = e =>{
        setValue(e.target.value)
    }
    return{ value, handleChnage}
}

export default useInputState;