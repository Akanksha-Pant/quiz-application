import React, { useState } from "react";

import authInstance from "../../services/authetication";
const Home = () => {
    const [formData, setFormData] = useState({});

    const handleOnSignIn = async(event) => {
        event.preventDefault();
        const { email, password} = formData;
        await authInstance.signUp(email, password);
    }

    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value});
        console.log(formData);
    }

    return(
        <div>
            <form onSubmit={handleOnSignIn}>
                <label> Email</label>
                <input type = "text" onChange={(e) => handleInputChange('email', e.target.value)}/>
                <label> Password </label>
                <input type = "text" onChange={(e) => handleInputChange('password', e.target.value)}/>
                <button type="submit"> SignIn</button>
            </form>
           
        </div>
    );
}

export default Home;