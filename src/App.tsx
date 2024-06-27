import './App.css';
import Logo from './logo.png';
import hero1 from './hero1.jpg';
import hero2 from './hero2.jpg';
import hero3 from './hero3.jpg';

function App() {
  return (
    <div className="relative min-h-screen m-16 mt-4">
      <div className="flex justify-between -mr-12">
        <div className='font-bold'>
          <a href="https://www.amazon.co.uk/Howies-Fruit-Cider-Flavour-Bottles/dp/B0CZ9J7QKM/ref=sr_1_5?crid=OK2TTRLDM7ET&dib=eyJ2IjoiMSJ9.4DGkgdHO2Am6GDC0FhHS6fxCfZVHqRHAtlQa7VYAUuDjHNKX2Cxn5desHV48gm1OCbMkrOxUGKl6IazVO2kPLUBx4-qv8mJYWXrkdbwBW9pIftLhjSKoLIHlNGTNY_vW3kb4OHa31G9fRMdj1SLEQiCVZMokLuRUSpisUX3hgxNFYkpNKkXwVNZtni5rWwt0aUi6W114qsQHUuV-g_a1H6BPax0ZvaVRAWHNELe5LPfYAsIeJHydS-fr11OQjCEuYclbfKLztRf1fPtd3RLbBUDcl98WlpGk4zPCbetYeFk.5YMS5tMHuhBUizscbUQJuEs81a8YolsWcHG5bk8ALqc&dib_tag=se&keywords=howies+cider&qid=1719485199&sprefix=howies+cide%2Caps%2C162&sr=8-5" target="_blank" rel="noopener noreferrer">
            SHOP
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <a href="mailto:james@howiescider.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=63&format=png&color=000000" alt="Email" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/howiescider/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
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
