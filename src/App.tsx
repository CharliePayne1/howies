import './App.css';
import Logo from './logo.png';
import hero1 from './hero1.jpg';
import hero2 from './hero2.jpg';
import hero3 from './hero3.jpg';

function App() {
  return (
    <div className="relative min-h-screen m-16">
      <div className="flex justify-end fixed top-6 right-6">
        <a href="mailto:james@howiescider.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </a>
        <a href="https://instagram.com/howiescider/" target="_blank" rel="noopener noreferrer"> {/* Instagram link */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        </a>
      </div>
      <div className="flex flex-col items-center mt-16">
        <img src={Logo} alt="Howie's Cider Logo" className="w-80 mb-8" />
        <div className="flex flex-wrap md:flex-nowrap justify-center w-full md:space-x-8 md:space-x-0">
          <img src={hero1} alt="hero1" className="w-full md:w-1/3 mb-8 md:mb-0" />
          <img src={hero2} alt="hero2" className="w-full md:w-1/3 mb-8 md:mb-0" />
          <img src={hero3} alt="hero3" className="w-full md:w-1/3" />
        </div>
      </div>
    </div>
  );
}

export default App;
