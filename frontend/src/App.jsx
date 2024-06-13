import {Navigate, Outlet, Route, Routes} from "react-router";
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {useAuthContext} from "./hooks/useAuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  const {user} = useAuthContext();
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <div className='w-full h-auto'>
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
