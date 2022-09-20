import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './component/navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import Jackets from './pages/jackets';
import Shirts from './pages/shirts';
import Pants from './pages/pants';
import Detail from './pages/detail';
import ShoppingCart from './pages/shoppingCart';
import Product from './pages/product';
import NewArrival from './pages/newArirval';
import SearchResult from './pages/searchResult';
import PopupLogin from './component/popupLogin';
import Slider from "./component/slider";
import { auth } from "./utils/firebase";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="newarrival" element={<NewArrival/>} />
        <Route path="detail" element={<Detail/>} />
        <Route path="jackets" element={<Jackets/>} />
        <Route path="shirts" element={<Shirts/>} />
        <Route path="pants" element={<Pants/>} />
        <Route path="searchresult" element={<SearchResult/>} />
        <Route path="shoppingcart" element={<ShoppingCart/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>
      
    </div>
  );
}

export default App;
