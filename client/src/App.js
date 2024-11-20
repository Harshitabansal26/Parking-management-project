import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import ParkingSpace from './Components/ParkingSpace';

function App() {
  return (
    <div className="App">
        <Navbar> </Navbar>
        <Login></Login>
        <ParkingSpace></ParkingSpace>
        <Footer> </Footer>
    </div>
  );
}

export default App;