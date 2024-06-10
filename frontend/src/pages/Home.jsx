import {useEffect, useState} from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // fetch workout from db
  useEffect(() => {
    const fetchWorkouts = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (isLoading) {
    return (
      <div className='w-[900px] h-[400px] flex justify-center items-center'>
        <ClipLoader color='#36d7b7' size={100} />
      </div>
    );
  }

  // delete workout
  const handleDeleteWorkout = (id) => {
    setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout._id !== id));
  };

  // add a new workout
  const handleAddWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]);
  };

  return (
    <>
      <div className='px-4 py-6 w-full flex xs:flex-col lg:flex-row gap-[30px] lg:gap-0'>
        <div className='flex flex-col gap-4'>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails
                key={workout._id}
                workout={workout}
                deleteWorkout={handleDeleteWorkout}
              />
            ))}
        </div>
        <div className='px-4 flex-1 '>
          <WorkoutForm addWorkout={handleAddWorkout} />
        </div>
      </div>
    </>
  );
};

export default Home;
