import React from 'react';
import profilePic from '../../assets/images/0.jpg'

function About () {
    return (
        <section className='my-5'>
            <h1 id='about'>Who am I?</h1>
            <div className="my-2">
                <img
                    src={profilePic}
                    alt="Frank D. profile pic."
                    key="profilePic"
                />
                <p>
                I am a hard worker and fast learner. I worked throughout college while getting my undergrad and Masters. While getting my post-grad degree I was also serving as an officer in the National Guard and planning a wedding, while still working. Throughout the coding bootcamp I attended to become a full-stack developer I have picked up the new technologies fast and even a few libraries and tools not taught to better improve my code and my coding skills.  If you are looking for a hard worker who is not scared away by learning new technology, then I am your coder. 
                </p>
            </div>
        </section>
    )
}

export default About;