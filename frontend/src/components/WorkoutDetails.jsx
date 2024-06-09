function WorkoutDetails({workout}) {
  return (
    <section className='xs:[80vw] lg:w-[60vw] flex justify-center mx-6'>
      <div className='xs:w-full lg:w-[50vw] px-6 py-6 rounded-md bg-white shadow-md '>
        <div className='text-md md:text-lg flex justify-between bg-blue-100'>
          <div className='flex-col'>
            <h2 className='text-2xl md:text-3xl font-bold text-green-600 mb-4'>{workout.title}</h2>
            <p>
              <span className='font-bold'>Load (in kg): </span>
              {workout.load}
            </p>
            <p>
              <span className='font-bold'>Reps:</span> {workout.reps}
            </p>
            <p>{workout.createdAt}</p>
          </div>
          <div className=''>
            <button>
              <p className='text-red-600'>delete</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutDetails;
