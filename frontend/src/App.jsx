import {Outlet} from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <div className='w-full h-auto'>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
