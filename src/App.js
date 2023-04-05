import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import MainSection from './components/MainSection/MainSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="d-flex">
        <SideBar></SideBar>
        <MainSection></MainSection>
      </div>

    </div>
  );
}

export default App;
