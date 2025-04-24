import React, { useId } from "react";

function CurrInput({
    currInputType = "",
    amount = 0,
    currency = "",
    currList = [],
    onAmountChange,
    onCurrencyChange,
    disableAmt = false,
    disableCurr = false,
    classNameStyle = "",
}) {
    const currInputId = useId();

    // const handleAmount = (e) => {
    //     const value = e.target.value === "" ? "0" : Number(e.target.value);
    //     console.log(value);

    //     onAmountChange && onAmountChange(e.target.value);
    // };

    return (
        <div
            className={`curr-input-container flex bg-white text-black rounded-md justify-between p-4 w-full ${classNameStyle}`}
        >
            <div className="left">
                <form action="#" className="flex flex-col gap-2">
                    <label htmlFor={currInputId}>{currInputType}</label>
                    <input
                        type="number"
                        id={currInputId}
                        value={amount}
                        // onChange={handleAmount}
                        onChange={(e) => {
                            onAmountChange && onAmountChange(e.target.value);
                        }}
                        className="bg-gray-200 rounded py-1 px-2"
                        disabled={disableAmt}
                    />
                </form>
            </div>
            <div className="right flex flex-col ml-1 gap-2">
                <p>Currency Type</p>
                <select
                    id=""
                    className="bg-gray-200 p-1 rounded text-black"
                    value={currency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value);
                    }}
                    disabled={disableCurr}
                >
                    {currList.map((currency, key) => (
                        <option key={key} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default CurrInput;
