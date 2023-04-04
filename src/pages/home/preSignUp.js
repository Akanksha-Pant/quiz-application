import React from "react";

import homePageBanner from '../../img/home-banner.png'


const PreSignUpPage = ({ onSignUp }) => {
   return (
    <>
        <nav className="navbar"></nav>
        <section id = "home" className="home">
            <div className="home-details">
                <p className="home-heading">
                    Best way to create and play online quizzes.
                </p>
                <p className="home-description">
                    Enjoy yourself by playing our custom games or
                    create new quizzes for millions to enjoy
                </p>
                <button className="sign-up-btn" onClick={onSignUp}> Sign Up </button>
            </div>
            <div className="home-img-block">
                <img src={homePageBanner} alt="home-bnnr"/>
            </div>
        </section>
        <section id="features">
        </section>
        <section id="categories">
        </section>
        <section id="faqs">
        </section>
    </>
   );
}

export default PreSignUpPage;