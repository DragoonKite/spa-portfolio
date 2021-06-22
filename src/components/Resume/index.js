import React from 'react';
import myResume from '../../assets/resume.pdf'
function Resume () {
    return(
        <section>
            <h3>Resume</h3>
            <span>Download my resume <a href={myResume} download>here</a></span>
            <div>
                <strong>Front-End Skills</strong> 
                <ul className='unstyled'>
                    <li>HTMl/CSS</li>
                    <li>Bootstrap/Semantic UI</li>
                    <li>Web API</li>
                    <li>Javascript/JQuery</li>
                    <li>Handlebars/React/Redux</li>
                    <li>PWA/ManifestJS</li>
                </ul>
                <strong>Back-End Skills</strong>
                <ul className='unstyled'>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>Server-Side API</li>
                    <li>MySQL/Sequelize</li>
                    <li>NongoDB/Mongoose</li>
                    <li>Graphql</li>
                </ul>
            </div>     
        </section>
    )
};

export default Resume;