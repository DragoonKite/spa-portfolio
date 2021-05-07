import React from 'react';

function Nav(props){
    return(
        <nav className='nav nav-masthead justify-content-center float-md-end'>
            <a data-testid="about" className="nav-link active unlink" aria-current='page' href="#about">About me</a>
            <a data-testid="portfolio" className="nav-link unlink" href="#portfolio">Portfolio</a>
            <a data-testid="contact" className="nav-link unlink" href="#contact">Contact</a>
            <a data-testid="resume" className="nav-link unlink" href="#resume">Resume</a>
        </nav>
    );
};

export default Nav;