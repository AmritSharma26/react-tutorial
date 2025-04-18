import { useCallback, useEffect, useRef, useState } from "react";

function App() {
    const [passlength, setpassLength] = useState(8);
    const [isNums, setisNums] = useState(false);
    const [isChar, setisChar] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    // const changePassLength = (e) => {
    //     // console.log(e.target.value);
    //     setpassLength(e.target.value);
    // };

    const passGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (isNums) str += "0123456789";
        if (isChar) str += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~\\";

        for (let i = 1; i <= passlength; i++) {
            let rdmLetterIdx = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(rdmLetterIdx);
        }
        setPassword(pass);
    }, [passlength, isNums, isChar, setPassword]); // array itmes store in chache

    const copyPassword = useCallback(() => {
        window.navigator.clipboard.writeText(password);
        console.log(passwordRef);
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0, 10);
    }, [password]);

    useEffect(() => {
        passGenerator();
    }, [passlength, isNums, isChar, passGenerator]); //array item me change run again

    return (
        <>
            <div
                id="wrapper"
                className="flex flex-col w-full h-screen items-center justify-center box-border bg-gray-950 "
            >
                <div className="flex flex-col bg-gray-700 text-white p-6 m-6 rounded-2xl shadow-2xl min-w-[300px]">
                    <h1 className="text-2xl font-extrabold py-2 text-center">
                        Password Genrator
                    </h1>
                    <div id="input-container" className="flex items-center">
                        <input
                            type="text"
                            className="border rounded-md my-4 w-[80%] p-1 outline-none"
                            placeholder="Password"
                            value={password}
                            readOnly
                            ref={passwordRef}
                        />
                        <button
                            className="w-[20%] bg-blue-700 m-2 p-1 rounded-md cursor-pointer"
                            onClick={() => {
                                copyPassword();
                            }}
                        >
                            copy
                        </button>
                    </div>
                    <div
                        id="setup-container"
                        className="flex flex-wrap items-center justify-between"
                    >
                        <input
                            type="range"
                            name="passlength"
                            id="lenSlider"
                            min={6}
                            max={100}
                            value={passlength}
                            // defaultValue={}
                            className="m-1 p-1 cursor-pointer"
                            // onChange={(e) => changePassLength(e)}
                            onChange={(e) => {
                                setpassLength(e.target.value);
                            }}
                        />
                        <label htmlFor="passlength" className="m-1 p-1 w-23">
                            Length ({passlength})
                        </label>

                        <div id="checkNum" className="m-1 p-1">
                            <input
                                type="checkbox"
                                name="numbers"
                                id=""
                                onChange={(e) => {
                                    setisNums((prev) => !prev);
                                    console.log(e.target.checked);
                                }}
                            />
                            <label htmlFor="numbers">Numbers</label>
                        </div>

                        <div id="checkChar" className="m-1 p-1">
                            <input
                                type="checkbox"
                                name="char"
                                id=""
                                onChange={(e) => {
                                    setisChar((prev) => !prev);
                                    console.log(e.target.checked);
                                }}
                            />
                            <label htmlFor="char">Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
