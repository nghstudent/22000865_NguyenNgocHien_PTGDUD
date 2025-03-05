import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import Footer from './components/Footer';
import SearchProduct from './components/SearchProduct'

function App() {

  return (
    <div className='w-100 bg-white'>
      <Header />
      <SearchProduct />
      <Footer />
    </div>
  )
}

export default App
