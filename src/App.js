import "./App.css";
import AddNewAddress from "./components/deliveryAddress/AddNewAddress";
import DeliveryAddress from "./components/deliveryAddress/DeliveryAddress";
import Profile from "./components/profile/Profile";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/deliveryaddress" element={<DeliveryAddress/>} />
          <Route exact path="/addnewaddress" element={<AddNewAddress/>} />
        </Routes>
      </Router>
    </>

  );
}
export default App;
