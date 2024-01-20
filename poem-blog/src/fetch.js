import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error,seterror] = useState(null);

    useEffect(() => {
        fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error("could not fetch the data")
        }
        return res.json()
    })
    .then(data => {
        setData(data);
    })
    .catch(err => {
         seterror(err.message);
    })
    },[url]
    );
    return {data,error}
}
export default useFetch;
