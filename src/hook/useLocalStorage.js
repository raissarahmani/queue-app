import { useState, useEffect } from "react";

function useLocalStorage (key, init) {
    const [data, setData] = useState(() => {
        const localValue = localStorage.getItem(key) || ""
        if (localValue.length === 0) {
            if (init instanceof Function) return init()
            return init
        }
        return JSON.parse(localValue)
    })

    useEffect(() => {
        const newValue = JSON.stringify(data)
        localStorage.setItem(key, newValue)
    }, [key, data])

    return [data, setData]
}

export default useLocalStorage