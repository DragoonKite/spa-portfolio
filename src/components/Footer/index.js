import React from 'react';
import {GoMarkGithub} from 'react-icons/go';
import {GrLinkedin} from 'react-icons/gr';
import {FaStackOverflow} from 'react-icons/fa'

function Footer () {
    return(
        <footer className='mt-auto text-white-50'>
            <p>
                <a href='https://github.com/DragoonKite'  className='text-white px-3' target='_blank' rel="noreferrer"><GoMarkGithub size={24} /></a>
                <a href='https://www.linkedin.com/in/frank-depaolo-b85043a3/' className='text-white' target='_blank' rel="noreferrer"><GrLinkedin size={24}/></a>
                <a href='https://stackexchange.com/users/16893266/dragoonkite' className='text-white px-3' target='_blank' rel="noreferrer"><FaStackOverflow size={24}/></a>
            </p>
        </footer>
    );
}

export default Footer;