import { RootState } from "./app/store";
import Counter from "./components/Counter/Counter"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";


function App() {
  const counters = useSelector((state: RootState) => state.counters);
  const dispatch = useDispatch();

  const totalCounts = counters.reduce((sum, current) => sum + current.value, 0);

  const incrementHandler = (counterId: number) => {
    dispatch(increment(counterId));
  }


  const decrementHandler = (counterId: number) => {
    dispatch(decrement(counterId));
  }

  return (
    <div className="min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center space-y-10">
      <h2 className="text-2xl font-medium">Simple Counter Application</h2>
      <div className="space-y-5">
        {/* counter cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-7">
          {
            counters.map(counter => <Counter
              key={counter.id}
              count={counter.value}
              incrementHandler={() => incrementHandler(counter.id)}
              decrementHandler={() => decrementHandler(counter.id)}
            />)
          }
        </div>

        {/* total counts card */}
        <div className="w-full px-5 py-3 flex justify-center items-center bg-white rounded order-1 md:order-2">
          <p className="text-black text-xl font-semibold">Total Count(s): {totalCounts}</p>
        </div>
      </div>
    </div>
  )
}

export default App
