import React from 'react';

function Nav(props){
    const{
        tabSelected,
        setTabSelected
    } = props;
    return(
        <nav className='nav nav-masthead justify-content-center float-md-end'>
            <a data-testid="about" className={`nav-link unlink ${tabSelected === 'About' && 'active'}`} aria-current='page' href="#about" onClick={() => setTabSelected('About')}>About me</a>
            <a data-testid="portfolio" className={`nav-link unlink ${tabSelected === 'Portfolio' && 'active'}`} aria-current='page' href="#portfolio" onClick={() => setTabSelected('Portfolio')}>Portfolio</a>
            <a data-testid="contact" className={`nav-link unlink ${tabSelected === 'Contact' && 'active'}`} aria-current='page' href="#contact" onClick={() => setTabSelected('Contact')}>Contact</a>
            <a data-testid="resume" className={`nav-link unlink ${tabSelected === 'Resume' && 'active'}`} aria-current='page' href="#resume" onClick={() => setTabSelected('Resume')}>Resume</a>
        </nav>
    );
};

export default Nav;