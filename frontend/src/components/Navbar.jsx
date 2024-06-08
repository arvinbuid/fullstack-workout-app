import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className='w-full p-4 flex justify-center'>
      <div className='w-[85vw] px-2 py-4 flex'>
        <Link to={"/"}>
          <h1 className='text-3xl font-bold'>
            Workout <span className='text-green-600'>App</span>
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
