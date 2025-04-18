import { useState } from "react";
import CurrencyCard from "./components/currencyCard";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setamount] = useState(0);
    const [convertedAmount, setconvertedAmount] = useState(0);
    const [fromCurrency, setfromCurrency] = useState("usd");
    const [toCurrency, settoCurrency] = useState("inr");

    const data = useCurrencyInfo(fromCurrency);
    const currencyList = Object.keys(data);

    function convert() {
        setconvertedAmount((amount * data[toCurrency]).toFixed(2));
    }

    const swap = () => {
        setfromCurrency(toCurrency);
        settoCurrency(fromCurrency);
        setamount(convertedAmount);
        setconvertedAmount(amount);
    };

    return (
        <>
            <div
                id="wrapper"
                className="w-full h-[100vh] box-border bg-gradient-to-t from-blue-500 to-blue-950 flex items-center justify-center"
            >
                <div
                    id="container"
                    className=" w-[28rem] border border-white rounded-lg m-4 p-4 flex flex-col"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                >
                    <div
                        id="fromToContainer"
                        className="relative flex flex-col"
                    >
                        <CurrencyCard
                            label="From"
                            amount={amount}
                            currencyList={currencyList}
                            selectCurrency={fromCurrency}
                            onAmountChange={(amount) => {
                                setamount(amount);
                            }}
                            onCurrencyChange={(currency) =>
                                setfromCurrency(currency)
                            }
                        />
                        <button
                            className=" bg-blue-700 cursor-pointer border-2 border-white absolute px-3 rounded-md text-white top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2"
                            onClick={swap}
                        >
                            swap
                        </button>
                        <CurrencyCard
                            label="To"
                            amount={convertedAmount}
                            currencyList={currencyList}
                            selectCurrency={toCurrency}
                            onCurrencyChange={(currency) =>
                                settoCurrency(currency)
                            }
                            amountDisable
                        />
                    </div>

                    <button
                        className="bg-blue-700 rounded-lg my-2 mx-1 p-2 cursor-pointer"
                        onClick={convert}
                    >
                        Convert {fromCurrency.toLowerCase()} to{" "}
                        {toCurrency.toUpperCase()}
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
