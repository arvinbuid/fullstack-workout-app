function NotFound() {
  return (
    <div className='w-screen h-[75vh] p-4 flex justify-center items-center'>
      <div className='flex items-center'>
        <p className='text-4xl pr-6 border-r border-slate-400'>404</p>
        <span className='text-xl pl-6'>This page could not be found.</span>
      </div>
    </div>
  );
}

export default NotFound;
