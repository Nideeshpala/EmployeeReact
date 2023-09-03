import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Add from './Add';
import View from './View';
import Edit from './Edit';
import NFP from './NFP';




function App() {
  return (
    <div>
   <Header></Header>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
  <Route path='/add' element={<Add></Add>}></Route>
  <Route path='/view/:id' element={<View></View>}></Route>
  <Route path='/edit/:id' element={<Edit></Edit>}></Route>
  <Route path='*' element={<NFP></NFP>}></Route>
    </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
