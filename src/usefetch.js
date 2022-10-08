import { useState,useEffect  } from "react" 

const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [isPending,setIsPending] =useState(true)
    const [error,setErrer]=useState(null)

    useEffect (() => {
        setTimeout(() =>{
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }


             return res.json();
            })

            .then(data=> {
             setBlogs(data)
             setIsPending(false);
             setErrer(null);
            })
            .catch(err =>{
                setIsPending(false);
                setErrer(err.message);
                setErrer(null)
            })
        }, 1000)
    }, [url])

    return {data, isPending, error}
}

export default useFetch