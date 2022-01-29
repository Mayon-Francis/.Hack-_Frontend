
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';
import Signup from './components/Signup/Signup';
import Dine from './components/Dine/dine';
import Cart from './components/Cart/Cart'
import TrainRoute from './components/trainroute/trainroute';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);
  const [station, setStation] = useState("")
  const [seat, setSeat] = useState('D12')
  const [coach, setCoach] = useState('55')
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route exact path="/" element={<><Navbar user={user} setUser={setUser} /><Home /></>} />
          <Route exact path="/fortrain" element={<><Navbar user={user} setUser={setUser} /><TrainHome coach={coach} seat={seat} setCoach={coach} setSeat={setSeat} /></>} />
          <Route exact path="/cart" element={<><Navbar user={user} setUser={setUser}/><Cart seat={seat} coach={coach} /></>} />
          <Route exact path="/trainroute" element={<><Navbar /><TrainRoute station={station} setStation={setStation} /></>} />
          <Route exact path="/order" element={<><Navbar station={station} user={user} setUser={setUser} /><Dine /></>} />

        </Routes>
      </div>
    </BrowserRouter>
  )

}


export default App;
