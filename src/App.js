import './App.css';
import Header from './components/Header'
import Gallery from './components/Gallery'

// dtView
  // check all profiles and make sure they are good
// go through and redo the grid for each view
// set max width and flex to keep it center

function App() {
  
  return (
    <div id='mainWrapper'>
      <div id='mainContainer' className='pt-6 md:pt-[29px] xl:pt-10'>
        <div id='headerWrapper' className='border-b border-b-medGray px-6 pb-6 md:px-10 md:pb-[27px] xl:px-0 xl:mx-10 xl:pb-10'>
          <Header />
        </div>
        <div id='galleryWrapper' className='pt-6 md:pt-10'>
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
