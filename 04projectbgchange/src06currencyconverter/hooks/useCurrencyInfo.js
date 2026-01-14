import {useEffect , useState} from 'react'

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() =>{
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((res) => {
            return res.json()  // ✅ Added return
        })
        .then((res) => setData(res[currency]))
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;