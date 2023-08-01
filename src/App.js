import './App.css';
import Header from './components/Header'
import Gallery from './components/Gallery'

// tabView
  
  // need to go back and adjust the small screen size lightbox image
// dtView
// prevent scroll when lightbox is open

function App() {
  
  return (
    <div id='mainWrapper'>
      <div id='mainContainer' className='pt-6 md:pt-[29px]'>
        <div id='headerWrapper' className='border-b border-b-medGray px-6 pb-6 md:px-10 md:pb-[27px]'>
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
