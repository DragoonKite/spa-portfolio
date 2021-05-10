import React from 'react'
import Nav from '../Nav'

function Header (props) {
    const {
        tabSelected,
        setTabSelected
    } = props;
    return(
        <header data-testid="header" className="mb-auto">
            <div>
                <h2 className='float-md-start mb-0'>Frank D.</h2>
                <Nav
                tabSelected={tabSelected}
                setTabSelected={setTabSelected}
                ></Nav>
            </div> 
        </header>
    )
}

export default Header;