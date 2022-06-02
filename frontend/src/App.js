import './App.css';
import { useEffect, useState } from 'react';
import SortedProductNames from './components/SortedProductNames';

function App() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9001/products')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setProducts(data);
        console.log(data);
      })
      .catch(err => console.log(err));
    }, []);
  
  
  return (
    <div className="App">
      <SortedProductNames products={products}/>
    </div>
  );
}

export default App;
