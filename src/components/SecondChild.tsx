import { FC, useContext } from "react";
import { CounterContext, CounterContextType } from "./MainCounter";


export const SecondChild: FC = (): JSX.Element => {
    const context: CounterContextType | null = useContext<CounterContextType | null>(CounterContext);

    return (
        <>
            <h3>Count Second Child</h3>
            <p>{context?.count}</p>
            <button onClick={context?.increment}>Increment</button>
            <button onClick={context?.decrement}>Decrement</button>
            <button onClick={context?.reset}>Reset</button>
        </>
    )
}