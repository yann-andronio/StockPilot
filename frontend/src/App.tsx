import { Fragment } from 'react';
import Register from './auth/register/Register';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Fragment>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/register" element={< Register />} />
       
         
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
