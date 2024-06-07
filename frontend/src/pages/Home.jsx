import {useEffect, useState} from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
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

  return (
    <>
      <div className='px-4 py-6 w-full'>
        <div className='flex flex-col gap-4'>
          {workouts &&
            workouts.map((workout) => <WorkoutDetails key={workout._id} workout={workout} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
