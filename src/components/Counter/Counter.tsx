import Button from "../Button/Button";

type CounterProp = {
    count: number,
    incrementHandler: () => void,
    decrementHandler: () => void,
}

const Counter = ({ count, incrementHandler, decrementHandler }: CounterProp) => {
    return (
        <div className="bg-white flex justify-center items-center flex-col gap-7 p-7">
            <p className="text-black font-medium text-xl">{count}</p>
            <div className="flex justify-center items-center gap-7">
                <Button contentText="Increment" handler={incrementHandler} />
                <Button contentText="Decrement" handler={decrementHandler} danger />
            </div>
        </div>
    );
};

export default Counter;