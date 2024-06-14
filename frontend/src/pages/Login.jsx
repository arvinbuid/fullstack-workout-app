import {useState} from "react";
import {useLogin} from "../hooks/useLogin";
import {FaEye} from "react-icons/fa";
import {FaEyeSlash} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {login, error, isLoading} = useLogin();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section className='w-full h-[85vh] flex justify-center items-center px-6'>
      <form
        onSubmit={handleLoginSubmit}
        className='flex flex-col w-[400px] border-2 border-blue-400 px-10 py-8 rounded-lg bg-white'
      >
        <h3 className='text-3xl font-bold mb-6'>LOGIN</h3>

        <div className='flex flex-col gap-4'>
          <label>Email: </label>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='p-3 border border-slate-600 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          />

          <label>Password: </label>
          <div className='w-full flex flex-col gap-2 relative'>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='p-3 border border-slate-600 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
            />
            <span
              onClick={toggleShowPassword}
              className='absolute right-0 top-4 pr-4 cursor-pointer text-blue-600'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type='submit'
            className='flex gap-1 mt-6 justify-center bg-blue-400 p-4 text-white rounded-md'
            disabled={isLoading}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
              />
            </svg>
            Login
          </button>
          {error && (
            <div className='bg-red-500 p-4 w-full text-center text-white'>
              <p>{error}</p>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default Login;
