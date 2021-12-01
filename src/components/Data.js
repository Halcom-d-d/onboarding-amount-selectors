import {useEffect, useState} from "react";

function Data({filters}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('Data:', filters);
        setData(Array.from({length: 100}).map(() => {
            return ((Math.random() * (filters.amountTo - filters.amountFrom)) + filters.amountFrom).toFixed(2);
        }));
    }, [filters, setData]);

    return (
        <div>
            {data.map((value) => {
                return <div>{value}</div>
            })}
        </div>
    );
}

export default Data;