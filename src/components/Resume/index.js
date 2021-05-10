import React from 'react';

function Resume () {
    return(
        <section>
            <h3>Resume</h3>
            <span>Download my resume <a href='/utils/resume.pdf' download>here</a></span>
            <div>
                <strong>Front-End Skills</strong> 
                <ul className='unstyled'>
                    <li>HTMl/CSS</li>
                    <li>Web API</li>
                    <li>Javascript/JQuery</li>
                    <li>Handlebars/React</li>
                    <li>ManifestJS</li>
                </ul>
                <strong>Back-End Skills</strong>
                <ul className='unstyled'>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>Server-Side API</li>
                    <li>MySQL/Sequelize</li>
                    <li>NongoDB/Mongoose</li>
                </ul>
            </div>     
        </section>
    )
};

export default Resume;