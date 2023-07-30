import './App.css';
import Header from './components/Header'
import Gallery from './components/Gallery'

// generate lightbox on click of viewmore
// connect front, back and start slideshow buttons

function App() {
  return (
    <div id='mainWrapper'>
      <div id='mainContainer' className='pt-6'>
        <div id='headerWrapper' className='border-b border-b-medGray px-6 pb-6'>
          <Header />
        </div>
        <div id='galleryWrapper' className='pt-6'>
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
