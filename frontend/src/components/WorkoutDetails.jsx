function WorkoutDetails({workout}) {
  return (
    <section className='xs:[80vw] lg:w-[60vw] flex justify-center mx-6'>
      <div className='xs:w-full lg:w-[50vw] px-6 py-6 rounded-md bg-white shadow-md'>
        <h2 className='text-2xl md:text-3xl font-bold text-green-600 mb-4'>{workout.title}</h2>
        <div className='text-md md:text-lg'>
          <p>
            <span className='font-bold'>Load (in kg): </span>
            {workout.load}
          </p>
          <p>
            <span className='font-bold'>Reps:</span> {workout.reps}
          </p>
          <p>{workout.createdAt}</p>
        </div>
      </div>
    </section>
  );
}

export default WorkoutDetails;
