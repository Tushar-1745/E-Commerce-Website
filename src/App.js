import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/homepage/Homepage';
import Footer from './customer/footer/Footer';
import Product from './customer/components/product/Product';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
