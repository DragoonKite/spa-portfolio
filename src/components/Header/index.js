import React from 'react'
import Nav from '../Nav'

function Header () {
    return(
        <header data-testid="header" className="flex-row px-1"> 
             <h2>
                <a data-testid="link" href="/">
                Frank D.
                </a>
            </h2>
            <Nav></Nav>
        </header>
    )
}

export default Header;