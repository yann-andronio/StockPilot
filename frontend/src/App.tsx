import { Fragment } from 'react';
import Register from './auth/register/Register';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profil from './pages/Profil/Profil';
import Clients from './pages/clients/Clients';

function App() {
  return (
    <Fragment>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/profile" element={< Profil />} />
          <Route path="/clients" element={< Clients />} />
          <Route path="/register" element={< Register />} />
       
         
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
