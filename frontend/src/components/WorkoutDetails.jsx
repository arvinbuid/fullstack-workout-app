import {formatDistanceToNow} from "date-fns";
import toast, {Toaster} from "react-hot-toast";

function WorkoutDetails({workout, deleteWorkout}) {
  const handleDelete = async () => {
    const response = await fetch("http://localhost:4000/api/workouts/" + workout._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (!response.ok) {
      toast.error("Error deleting workout.");
      return;
    }

    if (response.ok) {
      deleteWorkout(json._id);
      toast.success("Workouts successfully deleted.");
    }
  };

  return (
    <section className='xs:[80vw] lg:w-[60vw] flex justify-center mx-6'>
      <div className='xs:w-full lg:w-[50vw] px-6 py-6 rounded-md bg-white shadow-md '>
        <div className='text-md md:text-lg flex justify-between '>
          <div className='flex-col'>
            <h2 className='text-2xl md:text-3xl font-bold text-green-600 mb-4'>{workout.title}</h2>
            <p>
              <span className='font-bold'>Load (in kg): </span>
              {workout.load}
            </p>
            <p>
              <span className='font-bold'>Reps:</span> {workout.reps}
            </p>
            <p>{formatDistanceToNow(workout.createdAt, {addSuffix: true, includeSeconds: true})}</p>
          </div>
          <div className=''>
            <button onClick={handleDelete}>
              <p className='text-red-600'>
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
                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                  />
                </svg>
              </p>
            </button>
          </div>
        </div>
      </div>
      <Toaster position='top-right' />
    </section>
  );
}

export default WorkoutDetails;