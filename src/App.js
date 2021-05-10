import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tabs] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  const [tabSelected, setTabSelected] = useState(tabs[0]);

  return (
    <div className='cover-container d-flex mw-100 h-100 p-3 mx-auto flex-column'>
      <div>
        <Header
          tabs={tabs}
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        ></Header>
      </div>
      <main className="mw-100">
        {(() => {
          switch(tabSelected){
            case 'Portfolio': return (<Project />);
            case 'Contact': return (<Contact />);
            case 'Resume': return (<Resume />);
            default: return (<About />)
          }
        })()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
