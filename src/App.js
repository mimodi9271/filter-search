import './App.css';
import Filter from './component/Filter/filter';
import Navbar from './component/Navbar/Navbar';
import Productlist from './component/Product/Productlist';
import SearchBar from './component/Search/Search';
import Provider from './Provider/provider';

function App() {
  return (
    <Provider>
       <Navbar />
       <Filter />
       <Productlist />
    </Provider>
  );
}

export default App;
