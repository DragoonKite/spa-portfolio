import React from 'react';
import './App.css';
import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
        <Header></Header>
        <main>
          <section className='my-5'>
              <h1 id='about'>Who am I?</h1>
              <div className="my-2">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                  </p>
              </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
