import { useContext } from "react";
import { useStateContext } from "../context/StateContext";


export default function Hero() {

    const { test } = useStateContext();

    return (
        <>
            <div className="container">
                <h1 className="text-6xl font-mono">Hello World!{test}</h1>
            </div>
        </>
    )
}