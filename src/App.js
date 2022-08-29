import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/sideBar/SideBar';
import Dashboard from './Pages/DashBoard/Dashboard';

function App() {
  return (
    <div className="App">
          <Header/>
          <div className='sidedashcombo'>
          <SideBar/>
          <Dashboard/>
          </div>
         
    </div>
  );
}

export default App;
