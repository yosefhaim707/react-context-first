import { FC, useContext } from "react";
import { CounterContext, CounterContextType } from "./MainCounter";



export const FirstChild: FC = (): JSX.Element => {

    const context: CounterContextType | null = useContext<CounterContextType | null>(CounterContext);

    if (!context) return <div>ERROR</div>
    return (
        <>
            <h3>Count First Child</h3>
            <p>{context.count}</p>
            <button onClick={context.increment}>Increment</button>
            <button onClick={context.decrement}>Decrement</button>
            <button onClick={context.reset}>Reset</button>
        </>
    );
}