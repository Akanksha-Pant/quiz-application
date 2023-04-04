import React, { useState } from "react";
import ReactModal from "react-modal";

import authInstance from "../../services/authetication";

const AuthenticationForm = ({ signIn=true, isModalOpen }) => {
    const [formData, setFormData] = useState({});

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        const { email, password} = formData;
        if(signIn){
            await authInstance.signUp(email, password);
        }
        else{
            await authInstance.signIn(email, password)
        }
    }
    
    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value});
        console.log(formData);
    }

    return(
       <ReactModal isOpen={isModalOpen}>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <label> Email</label>
                    <input type = "text" onChange={(e) => handleInputChange('email', e.target.value)}/>
                    <label> Password </label>
                    <input type = "text" onChange={(e) => handleInputChange('password', e.target.value)}/>
                    <button type="submit"> SignIn</button>
                </form>
            </div>
       </ReactModal>
    );
}

export default AuthenticationForm;