import React from "react";

function CurrencyCard({
    label,
    amount = 0,
    selectCurrency = "usd",
    currencyList = [],
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
}) {
    // console.log(selectCurrency);

    return (
        <div
            id="card"
            className=" bg-white flex flex-col rounded-lg m-1 p-2 gap-2"
        >
            <div id="card-detail" className="flex justify-between">
                <p>{label}</p>
                <p>Currency Type</p>
            </div>
            <div id="cardvalues" className="flex justify-between ">
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    className="w-35"
                    onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*\.?\d*$/.test(val)) {
                            onAmountChange && onAmountChange(Number(val));
                        }
                    }}
                    disabled={amountDisable}
                />
                <select
                    name="currency"
                    id="currency"
                    className=" bg-gray-200 rounded-md"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                >
                    {currencyList.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default CurrencyCard;
