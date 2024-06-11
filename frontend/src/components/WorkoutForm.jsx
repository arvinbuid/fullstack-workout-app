import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyInputFields, setEmptyInputFields] = useState([]);
  const {dispatch} = useWorkoutsContext();

  // create new workout
  const handleCreateWorkout = async (e) => {
    e.preventDefault();

    const workout = {title, reps, load};

    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    // check is response is okay
    if (!response.ok) {
      setError(json.error);
      setTimeout(() => {
        setError(null);
      }, 3000);

      setEmptyInputFields(json.emptyInputFields);
      toast.error("Error creating workout.");
    }

    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
      setError(null);
      console.log("New exercise added", json);
      setEmptyInputFields([]);
      dispatch({type: "CREATE_WORKOUT", payload: json});
      toast.success("Workout successfully created!.");
    }
  };

  return (
    <section>
      <form
        onSubmit={handleCreateWorkout}
        className='bg-white px-12 py-10 rounded-lg sm:w-[500px] lg:w-[450px] m-auto shadow-lg'
      >
        <h2 className='text-3xl font-bold mb-6'>Create a New Workout</h2>

        <div className='flex flex-col gap-4'>
          <label>Exercise: </label>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={`${
              emptyInputFields.includes("title") ? "border border-red-600" : " "
            } p-2 border border-slate-600 rounded-md`}
          />
          <label>Load (in kg): </label>
          <input
            type='number'
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className={`p-2 ${
              emptyInputFields.includes("reps") ? "border border-red-600" : " "
            } border border-slate-600 rounded-md`}
          />
          <label>Reps:</label>
          <input
            type='number'
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={`p-2 ${
              emptyInputFields.includes("load") ? "border border-red-600" : " "
            } border border-slate-600 rounded-md`}
          />

          <button type='submit' className='mt-4 bg-blue-400 p-4 text-white rounded-md'>
            Submit
          </button>
        </div>
        {error && (
          <div className='bg-red-500 px-4 p-2 w-full text-center text-white mt-4'>
            <p>{error}</p>
          </div>
        )}
      </form>
      <Toaster position='top-right' />
    </section>
  );
}

export default WorkoutForm;
