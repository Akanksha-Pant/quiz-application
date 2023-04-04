import React, { useState } from 'react';

import quizzesInstance from '../../services/quiz';

const CreationForm = () => {
    const [formData, setFormData] = useState({});

    const handleOnChange = (fieldName, event) => {
        setFormData({...formData, [fieldName]: event.target.value});
    }

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        console.log(formData);
        quizzesInstance.createQuiz({...formData});
    } 

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <label> Title</label>
                <input onChange={(e) => handleOnChange('title', e)}/>
                <label> Description</label>
                <input onChange={(e) => handleOnChange('description', e)}/>
                <label> Points</label>
                <input type="number" onChange={(e) => handleOnChange('points', e)}/>
                <label> Duration </label>
                <input onChange={(e) => handleOnChange('duration', e)}/>
                <button type="submit">Add quiz</button>
            </form>
        </div>
    );
}

export default CreationForm;