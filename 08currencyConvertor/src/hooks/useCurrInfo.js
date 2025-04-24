import { useEffect, useState } from "react";

function useCurrInfo(currency = "usd") {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                return setData(res[currency]);
            })
            .catch((err) => {
                console.log("Error while fetching ", err);
            });
    }, [currency]);

    return data;
}

export default useCurrInfo;
