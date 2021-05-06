import React from 'react';

function Nav(props){
    return(
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about">About me</a>
                </li>
                <li className="mx-2">Portfolio</li>
                <li className="mx-2">Contact</li>
                <li className="mx-2">Resume</li>
            </ul>
        </nav>
    );
};

export default Nav;