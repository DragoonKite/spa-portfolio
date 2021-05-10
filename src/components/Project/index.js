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
            title: "",
            image: "",
            page: "",
            code: ""
        },
        {
            title: "",
            image: "",
            page: "",
            code: ""
        },
        {
            title: "",
            image: "",
            page: "",
            code: ""
        }
    ];
    
    return(
        <section>
            <h2>Projects</h2>
            <div className='d-flex flex-wrap justify-content-center' style={{width: "80%", margin: "auto"}}>
                {projects.map(project => (
                        <div className="card mx-1" style={{width: "18rem"}}>
                        <img className="card-img-top" src={`/assets/images/${project.image}`} alt={project.title} key={project.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                        </div>
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