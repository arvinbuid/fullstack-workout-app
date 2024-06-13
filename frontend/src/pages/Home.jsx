import {useEffect, useState} from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import ClipLoader from "react-spinners/ClipLoader";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext";
import {useAuthContext} from "../hooks/useAuthContext";

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useAuthContext();

  // fetch workout from db
  useEffect(() => {
    const fetchWorkouts = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({type: "SET_WORKOUTS", payload: json});
        setIsLoading(false);
      }
    };

    // when user exists, run this function
    if (user) {
      fetchWorkouts();
    }
  }, []);

  if (isLoading) {
    return (
      <div className='w-[900px] h-[400px] flex justify-center items-center'>
        <ClipLoader color='#36d7b7' size={100} />
      </div>
    );
  }

  return (
    <>
      <div className='px-4 py-6 w-full flex xs:flex-col lg:flex-row gap-[30px] lg:gap-0'>
        <div className='flex flex-col gap-4'>
          {workouts &&
            workouts.map((workout) => <WorkoutDetails key={workout._id} workout={workout} />)}
        </div>
        <div className='px-4 flex-1 '>
          <WorkoutForm />
        </div>
      </div>
    </>
  );
};

export default Home;
