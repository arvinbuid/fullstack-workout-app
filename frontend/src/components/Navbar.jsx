import {Link} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

function Navbar() {
  const {logout} = useLogout();
  const {user} = useAuthContext();

  const handleLogout = () => {
    logout();
    console.log("User logged out.");
  };

  return (
    <nav className='w-full h-[100px] flex justify-center items-center border-b-2 border-slate-300 bg-white'>
      <div className='w-[80%] px-2 py-4 flex justify-between'>
        <Link to={"/"}>
          <h1 className='text-3xl font-bold'>
            Workout <span className='text-green-600'>App</span>
          </h1>
        </Link>
        {/* logout */}

        <div className='hidden sm:flex items-center gap-4 '>
          {user ? (
            <div className='flex items-center gap-2'>
              <p className='text-lg font-semibold'>{user.email}</p>
              <button
                onClick={handleLogout}
                className='p-2 border-2 border-blue-400 rounded-lg hover:bg-blue-100'
              >
                <p className='text-xl font-semibold text-blue-600'>Logout</p>
              </button>
            </div>
          ) : (
            <>
              <Link to='/login'>
                <p className='text-xl font-semibold'>Login</p>
              </Link>
              <Link to='/signup'>
                <p className='text-xl font-semibold'>Signup</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
