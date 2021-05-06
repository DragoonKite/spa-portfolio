import React from 'react'

function Footer () {
    return(
        <footer>
            <ul clasName='flex-row'>
                <li className='mx 1'>
                    <a href='https://github.com/DragoonKite' target='_blank' rel="noreferrer">Github</a>
                </li>
                <li className='mx-1'>
                    <a href='https://www.linkedin.com/in/frank-depaolo-b85043a3/' target='_blank' rel="noreferrer">LinkedIn</a>
                </li>
                <li className='mx-1'>
                    <a href='https://stackexchange.com/users/16893266/dragoonkite' target='_blank' rel="noreferrer">Stack Overflow</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;