import {useEffect, useState} from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  // fetch workout from db
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

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
