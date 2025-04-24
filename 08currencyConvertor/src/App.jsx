import { useState } from "react";
import CurrInput from "./components/CurrInput";
import useCurrInfo from "./hooks/useCurrInfo";

function App() {
    // const [amount, setamount] = useState(0);
    const [amount, setamount] = useState(0);
    const [convertedAmt, setConvertedAmt] = useState(0);
    const [fromCurr, setFromCurr] = useState("usd");
    const [toCurr, setToCurr] = useState("inr");

    const data = useCurrInfo(fromCurr);
    const currList = Object.keys(data);
    // console.log(currList);

    const convert = () => {
        setConvertedAmt((amount * data[toCurr]).toFixed(2));
    };

    const swap = () => {
        setConvertedAmt(amount);
        setamount(convertedAmt);
        setFromCurr(toCurr);
        setToCurr(fromCurr);
    };

    return (
        <>
            <div className="wrapper w-full h-screen text-white bg-gray-800 flex items-center justify-center">
                <div className="relative convertor-container bg-[#ffffff30] w-lg border border-white rounded-md p-4 m-5 shadow-2xl flex flex-col items-center">
                    <CurrInput
                        currInputType="From"
                        amount={amount}
                        currency={fromCurr}
                        currList={currList}
                        onAmountChange={(amount) => {
                            setamount(amount);
                        }}
                        onCurrencyChange={(currency) => {
                            setFromCurr(currency);
                        }}
                    />
                    <button
                        className="absolute left-1/2 top-24 transform -translate-x-1/2 px-4 py-1 bg-purple-800 rounded m-1 cursor-pointer"
                        onClick={swap}
                    >
                        swap
                    </button>
                    <CurrInput
                        currInputType="To"
                        amount={convertedAmt}
                        currency={toCurr}
                        currList={currList}
                        disableAmt
                        onCurrencyChange={(currency) => {
                            setFromCurr(currency);
                        }}
                        classNameStyle="mt-2"
                    />
                    <button
                        className="px-4 py-1 pb-2 mt-4 bg-purple-800 rounded m-1 cursor-pointer "
                        onClick={convert}
                    >
                        Convert {fromCurr.toUpperCase()} to{" "}
                        {toCurr.toUpperCase()}
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
