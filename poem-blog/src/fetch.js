import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error,seterror] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
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
            if(err.name != 'AbortError')
            seterror(err.message);
        })

        return () => abortCont.abort();

    },[url]
    );
    return {data,error}
}
export default useFetch;
