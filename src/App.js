import './App.css';
import { Outlet } from 'react-router-dom'
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div className='d-flex'>
        <Aside/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
