import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App2() {

  return (
    <div className='w-100 bg-white'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App2
