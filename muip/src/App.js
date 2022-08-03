
import './App.css';
import Home from './Home';
// import Appbar from './Appbar';
// import Login from './Login';
// import Signup from './Signup';
// import Customercare from './Customercare';
// import TrackOrder from './TrackOrder';
// import MyAccount from './MyAccount';
// import Help from './Help';
// import Fruit from './Fruit';
// import Meat from './Meat';
// import Seafood from './Seafood';
// import Dairy from './Dairy';
// import DeliCheese from './DeliCheese';
// import Bakery from './Bakery';
// import Beverages from './Beverages';
// import Frozen from './Frozen';
// import Wines from './Wines';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Vegetables from './Vegetables';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          {/* <Route path = '/Appbar' element = {<Appbar/>}/> */}
          {/* <Route path = '/Login' element = {<Login/>}/>
          <Route path = '/Signup' element = {<Signup/>}/>
          <Route path = '/Customercare' element = {<Customercare/>}/>
          <Route path = '/TrackOrder' element = {<TrackOrder/>}/>
          <Route path = '/MyAccount' element = {<MyAccount/>}/>
          <Route path = '/Help' element = {<Help/>}/>
          <Route path = '/Fruit' element = {<Fruit/>}/>
          <Route path = '/Vegetables' element = {<Vegetables/>}/>
          <Route path = '/Meat' element = {<Meat/>}/>
          <Route path = '/Seafood' element = {<Seafood/>}/>
          <Route path = '/Dairy' element = {<Dairy/>}/>
          <Route path = '/DeliCheese' element = {<DeliCheese/>}/>
          <Route path = '/Bakery' element = {<Bakery/>}/>
          <Route path = '/Beverages' element = {<Beverages/>}/>
          <Route path = '/Frozen' element = {<Frozen/>}/>
          <Route path = '/Wines' element = {<Wines/>}/> */}

        </Routes>
      </Router>
      </>
  );
}

export default App;
