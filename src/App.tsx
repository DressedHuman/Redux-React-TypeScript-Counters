import { useState } from "react"
import Counter from "./components/Counter/Counter"

type Count = {
  id: number,
  value: number,
}

type InitialCounts = Count[]

const initialCounts: InitialCounts = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
]

function App() {
  const [counters, setCounters] = useState(initialCounts);
  const totalCounts = counters.reduce((sum, current) => sum + current.value, 0);

  const increment = (counterId: number) => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });

    setCounters(updatedCounters);
  }


  const decrement = (counterId: number) => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        }
      }
      return counter;
    });

    setCounters(updatedCounters);
  }

  return (
    <div className="min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center space-y-10">
      <h2 className="text-2xl font-medium">Simple Counter Application</h2>
      <div className="space-y-5">
        {/* counter cards */}
        <div className="flex justify-center items-center gap-7">
          {
            counters.map(counter => <Counter
              key={counter.id}
              count={counter.value}
              incrementHandler={() => increment(counter.id)}
              decrementHandler={() => decrement(counter.id)}
            />)
          }
        </div>

        {/* total counts card */}
        <div className="w-full px-5 py-3 flex justify-center items-center bg-white">
          <p className="text-black text-xl font-semibold">Total Count(s): {totalCounts}</p>
        </div>
      </div>
    </div>
  )
}

export default App
