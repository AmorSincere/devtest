import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import MainSection from './components/MainSection/MainSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import tabler_users from './tabler_users.svg';
import Group from './Group.svg';
import Ellipse from './Ellipse.svg';

function App() {
  const image_objects={
    "tabler_users":tabler_users,
    "Group":Group,
    "Ellipse":Ellipse

}
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <div className="d-flex">
        <SideBar></SideBar>
        <MainSection image_objects={image_objects}></MainSection>
      </div>

    </div>
  );
}

export default App;
