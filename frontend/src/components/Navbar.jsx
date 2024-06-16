import {Link} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";
import {GiMuscleUp} from "react-icons/gi";
import {FaUserCircle} from "react-icons/fa";
import {FaRegUserCircle} from "react-icons/fa";
import {IoMdLogOut} from "react-icons/io";

function Navbar() {
  const {logout} = useLogout();
  const {user} = useAuthContext();

  const handleLogout = () => {
    logout();
    console.log("User logged out.");
  };

  return (
    <nav className='w-full h-[100px] flex justify-center items-center border-b-2 border-slate-300 bg-white'>
      <div className='w-[80vw] px-2 py-4 flex justify-between'>
        <Link to={"/"}>
          <span className='text-3xl text-blue-800 flex gap-4 items-center'>
            <GiMuscleUp />
            <p className='text-black tracking-tight font-bold py-2 hidden sm:flex'>WORKOUT</p>
          </span>
        </Link>
        {/* logout */}

        <div className=' items-center gap-6 tracking-tight'>
          {user ? (
            <div className='flex items-center gap-4'>
              <p className='text-lg px-2 font-semibold hidden sm:flex'>{user.email}</p>
              <button
                onClick={handleLogout}
                className='flex items-center gap-2 text-xl transition transform hover:border-b-2 border-green-600 py-2 '
              >
                <IoMdLogOut className='text-blue-800' />
                <p className='font-semibold'>LOGOUT</p>
              </button>
            </div>
          ) : (
            <>
              <Link to='/login'>
                <div className='flex items-center gap-2 text-xl transition transform hover:border-b-2 border-green-600 pb-2 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                  <FaUserCircle className='text-blue-800' />
                  <p className='font-semibold'>LOGIN</p>
                </div>
              </Link>
              <Link to='/signup'>
                <div className='flex items-center gap-2 text-xl transition transform hover:border-b-2 border-green-600 pb-2 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                  <FaRegUserCircle className='text-blue-800' />
                  <p className='font-semibold'>SIGNUP</p>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
