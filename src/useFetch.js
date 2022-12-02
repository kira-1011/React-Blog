import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() => {
       

        fetch(url, { signal: abortController.signal })
            .then((res) => {
                if(!res.ok) {
                    throw Error("Error while fetching data ...");
                }
                return res.json();
            })
            .then((data) => {
                setPending(false);
                setData(data);
                setError(null);
            })
            .catch((err) => {
                if(err.name === "AbortError")  console.log("Fetch aborted");
                else{
                    setError(err.message);
                    setPending(false);
                }
            }
        )
        }, 1000);

        return () => abortController.abort();
    },[url]);

    return { data ,isPending, error, setData };
};

export default useFetch;