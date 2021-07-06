import './assets/css/index.scss';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
     <header>
       <div className="logo">
         <span>The Planets</span>
       </div>
       <div className="hamburger">
         <div></div>
         <div></div>
         <div></div>
       </div>
     </header>
     <nav>
       <Navigation />
     </nav>
    </div>
  );
}

export default App;
