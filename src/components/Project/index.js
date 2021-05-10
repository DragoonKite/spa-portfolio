import React from 'react'

function Project () {
    const projects = [
        {
           title: "iCamp",
           image: "iCamp.jpg",
           page: "https://dragoonkite.github.io/iCamp/",
           code: "https://github.com/DragoonKite/iCamp"
        },
        {
            title: "Eat Out, Austin",
            image: "eat-out-austin.jpg",
            page: "https://eat-out-austin.herokuapp.com/",
            code: "https://github.com/DragoonKite/eat-out-austin"
        },
        {
            title: "Beginner Blog",
            image: "mvc-blog.jpg",
            page: "https://desolate-escarpment-46981.herokuapp.com/",
            code: "https://github.com/DragoonKite/mvc-blog"
        },
        {
            title: "Food Festival Demo App",
            image: "food-festival.jpg",
            page: "https://dragoonkite.github.io/food-festival/",
            code: "https://github.com/DragoonKite/food-festival"
        },
        {
            title: "Pizza Hunt",
            image: "pizza-hunt.jpg",
            page: "https://hidden-brushlands-76079.herokuapp.com/",
            code: "https://github.com/DragoonKite/pizza-hunt"
        },
        {
            title: "Let's Take Some Notes",
            image: "lets-take-some-notes.jpg",
            page: "https://glacial-springs-90264.herokuapp.com/",
            code: "https://github.com/DragoonKite/lets-take-some-notes"
        }
    ];

    return(
        <section>
            <h2>Projects</h2>
            <div className='d-flex flex-wrap justify-content-center ' style={{width: "80%", margin: "auto"}}>
                {projects.map(project => (
                        <div className="card mx-1 bg-dark border-danger" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title text-secondary">{project.title}</h5>
                            </div>
                            <img className="card-img-top" src={`/assets/images/${project.image}`} alt={project.title} key={project.title}/>
                            <div className="card-body">
                                <a href={project.page} target="_blank" rel="noreferrer" className="card-link">Visit</a>
                                <a href={project.code} target="_blank" rel="noreferrer" className="card-link">Github</a>
                            </div>
                        </div>
                ))}
                {/* <div className="card mx-1" style={{width: "18rem"}}>
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div> */}
            </div>
        </section>  
    )
}

export default Project;