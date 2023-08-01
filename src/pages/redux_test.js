import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../redux/reducers/countSlice"

function App() {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="flex gap-6 justify-center mt-5">
                <button onClick={() => dispatch(increment())} className="border-2 border-green-500 rounded-md px-2 py-3">
                    Increment
                </button>
                <button onClick={() => dispatch(incrementByValue(5))} className="border-2 border-cyan-500 rounded-md px-2 py-3">
                    Increment By Value
                </button>
                <div className="text-2xl">{count}</div>
                <button onClick={() => dispatch(decrement())} className="border-2 border-red-500 rounded-md px-2 py-3">
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default App