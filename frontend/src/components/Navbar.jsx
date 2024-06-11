import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className='w-full h-[100px] flex justify-center items-center border-b-2 border-slate-300 bg-white'>
      <div className='w-[80%] px-2 py-4 flex justify-between'>
        <Link to={"/"}>
          <h1 className='text-3xl font-bold'>
            Workout <span className='text-green-600'>App</span>
          </h1>
        </Link>
        <div className='hidden sm:flex items-center gap-4 '>
          <Link to='/login'>
            <p className='text-xl font-semibold'>Login</p>
          </Link>
          <Link to='/signup'>
            <p className='text-xl font-semibold'>Signup</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
