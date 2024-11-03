import { createContext, useContext, useState, Context, FC } from "react";
import { FirstChild } from "./FirstChild";
import { SecondChild } from "./SecondChild";

export interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}


export const CounterContext: Context<CounterContextType | null> = createContext<CounterContextType | null>(null);

export const MainCounter: FC = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);
    const increment = (): void => {
        setCount(prev => prev + 1);
        console.log(count);
        
    }
    const decrement = (): void => {
        setCount(count - 1);
    }
    const reset = (): void => {
        setCount(0);
    }
    const contextType: CounterContextType = { count, increment, decrement, reset };
    const counterTools: CounterContextType | null = useContext<CounterContextType | null>(CounterContext);

    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <CounterContext.Provider value={{ count, increment, decrement, reset }}>
                <FirstChild />
                <SecondChild />
            </CounterContext.Provider>
        </>
    );
}
