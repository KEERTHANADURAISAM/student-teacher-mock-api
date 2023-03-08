
import './App.css';
import Home from './Components/Home';
import Student from './Components/Student';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Common from './Components/Common';
import EditStd from './Components/EditStd';
import View from './Components/View';
import Dashboard from './Components/Dashboard';
import StaffCmnpage from './Components/StaffCmnpage';
import StaffEdit from './Components/StaffEdit';
import StaffView from './Components/StaffView';
import Staff from './Components/Staff';
import Reward from './Components/Reward';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/home/dashboard' element={<Dashboard/>}></Route>
  <Route path='/student' element={<Student/>}></Route>
  <Route path='/rewards' element={<Reward/>}></Route>
  <Route path='/loadingdata' element={<Common/>}></Route>
  <Route path='/student/edit/:id' element={<EditStd/>}></Route>
  <Route path='/loadingdata/student/:id' element={<View/>}></Route>
  <Route path='/staffadd' element={<Staff/>}></Route>
  <Route path='/staffpage' element={<StaffCmnpage/>}></Route>
  <Route path='/staffpage/edit/:id' element={<StaffEdit/>}></Route>
  <Route path='/staffpage/view/:id' element={<StaffView/>}></Route>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
