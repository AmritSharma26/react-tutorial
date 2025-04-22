import { useEffect, useRef, useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
    const [isNumber, setIsNumber] = useState(false);
    const [isCharacter, setIsCharacter] = useState(false);
    const [passLength, setpassLength] = useState(8);
    const [password, setPassword] = useState("");
    const inputRef = useRef(null);

    const generatePassword = useCallback(() => {
        let pass = "";
        let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (isNumber) {
            charSet += "1234567890";
        }
        if (isCharacter) {
            charSet += "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
        }

        for (let i = 0; i < passLength; i++) {
            const charSetLen = charSet.length;
            let rdmIdx = Math.floor(Math.random() * charSetLen);
            pass += charSet[rdmIdx];
        }
        // console.log(charSet);
        // console.log(passLength);
        // console.log(pass);
        // console.log("Number : ", isNumber);
        // console.log("Special Characters : ", isCharacter);
        setPassword(pass);
    }, [passLength, isNumber, isCharacter, setPassword]); // optimize - array's itmes store in chache

    const copyPassword = () => {
        const input = inputRef.current;
        input.select();
        // passwordRef.current?.setSelectionRange(0, 10);
        navigator.clipboard.writeText(input.value); // next js not have window -> server side rendering
    };

    useEffect(() => {
        generatePassword();
    }, [passLength, isNumber, isCharacter, generatePassword]); // rerun

    return (
        <>
            <div className="wrapper bg-gray-800 w-full h-screen min-w-[500px] flex items-center justify-center text-white">
                <div className="flex flex-col items-center justify-between gap-2 w-[600px]">
                    <h1 className="font-bold text-4xl mb-6">
                        Password Generator
                    </h1>
                    <div className="flex flex-col gap-2 w-full bg-gray-700 p-6 rounded shadow-2xl">
                        <div className="input-field w-full mb-3 rounded overflow-hidden">
                            <input
                                type="text"
                                id="pass-input"
                                readOnly
                                className="bg-white w-9/12 text-purple-800 text-2xl py-2 px-4 font-semibold"
                                value={password}
                                onChange={generatePassword}
                                ref={inputRef}
                            />
                            <button
                                className="bg-purple-800 font-semibold w-3/12 px-2 py-2 text-2xl cursor-pointer"
                                onClick={copyPassword}
                            >
                                copy
                            </button>
                        </div>
                        <div className="pass-filters w-full flex flex-wrap justify-between gap-3">
                            <div className="lenght-filter flex items-center gap-3 text-2xl w-[250px]">
                                <input
                                    type="range"
                                    id="pass-len-slider"
                                    className="w-full mt-1"
                                    value={passLength}
                                    onChange={(e) => {
                                        setpassLength(e.target.value);
                                    }}
                                    min={5}
                                    max={20}
                                />
                                <label htmlFor="pass-len-slider">
                                    length(<span>{passLength}</span>)
                                </label>
                            </div>
                            <div className="number-filter flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="number-check"
                                    id="number-check"
                                    className="h-5 w-5"
                                    onChange={() => {
                                        setIsNumber((prev) => !prev);
                                    }}
                                />
                                <label
                                    htmlFor="number-check"
                                    className="text-2xl"
                                >
                                    Number
                                </label>
                            </div>
                            <div className="character-filter flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="char-check"
                                    id="char-check"
                                    className="h-5 w-5"
                                    onChange={(e) => {
                                        setIsCharacter((prev) => !prev);
                                    }}
                                />
                                <label
                                    htmlFor="char-check"
                                    className="text-2xl"
                                >
                                    Characters
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
