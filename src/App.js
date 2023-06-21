import './App.css';
import AOPs from './Components/AOPs';
import AdvanceTax from './Components/AdvanceTax';
import CoOperative from './Components/CoOperative';
import Domestic from './Components/Domestic';
import Firms from './Components/Firms';
import Foreign from './Components/Foreign';
import HUF from './Components/HUF';
import HouseRentAllowance from './Components/HouseRentAllowance';
import Individual from './Components/Individual';
import LLP from './Components/LLP';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      {/* <HouseRentAllowance/> */}
      {/* <AdvanceTax/> */}
      {/* <Individual/>
      <HUF/>
      <AOPs/>
      <Domestic/>
      <Foreign/>
      <Firms/>
      <LLP/>
      <CoOperative/> */}
      <MainRoutes/>
    </div>
  );
}

export default App;
