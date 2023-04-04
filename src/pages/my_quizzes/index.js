import React from "react";

import CreationForm from "./creationForm";
import QuizList from "./quizzesList";

const Quiz = () => {
    return(
        <div>
            <QuizList/>
            <CreationForm/>
        </div>
    );
}

export default Quiz;