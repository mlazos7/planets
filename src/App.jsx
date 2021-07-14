import './assets/css/index.scss';
import Navigation from './components/Navigation';
import {useState} from 'react';
import { Planet } from './components/Planet';

function App() {

  const [showNavigation, setShowNagivation] = useState(false)

  const handleNavigationClick = () => {
    setShowNagivation(!showNavigation);
  }

  return (
    <div className="App">
     <header>
       <div className="logo">
         <span>The Planets</span>
       </div>
       <div className="hamburger" onClick={handleNavigationClick}>
         <div></div>
         <div></div>
         <div></div>
       </div>
     </header>
     <nav>
       <Navigation show={showNavigation} />
     </nav>
     <main>
       <Planet />
     </main>
    </div>
  );
}

export default App;
