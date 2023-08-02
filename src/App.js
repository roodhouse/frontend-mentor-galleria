import './App.css';
import Header from './components/Header'
import Gallery from './components/Gallery'

function App() {
  
  return (
    <div id='mainWrapper' className='flex justify-center'>
      <div id='mainContainer' className='pt-6 md:pt-[29px] xl:pt-10 max-w-[375px] md:max-w-[768px] lg:max-w-[1024px]  xl:max-w-[1280px] lg:w-full'>
        <div id='headerWrapper' className='border-b border-b-medGray px-6 pb-6 md:px-10 md:pb-[27px] xl:px-0 xl:mx-10 xl:pb-10'>
          <Header />
        </div>
        <div id='galleryWrapper' className='pt-6 md:pt-10 lg:pt-0'>
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
