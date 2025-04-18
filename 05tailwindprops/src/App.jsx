import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
    const [count, setCount] = useState(0);
    let myObj = {
        username: "Amrit",
        age: 21,
    };
    let newArr = [1, 2, 3, 4];

    return (
        <>
            <p className="bg-green-400 text-black p-4 rounded-xl my-5 text-base w-50">
                Tailwind test
            </p>
            <Card
                username="Amrit Sharma"
                btnText="Click Me"
                someObj={myObj}
                anotherObj={newArr}
            />
            <Card username="Ujjwal Tiwari" btnText="Visit Me" />
        </>
    );
}

export default App;
