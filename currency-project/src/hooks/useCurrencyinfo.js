import { useState, useEffect } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log("hello");
                setData(res[currency]);
            });
    }, [currency]);

    console.log(data);
    return data;
}


export default useCurrencyinfo;